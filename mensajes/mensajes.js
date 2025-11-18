// ========================================
// CONFIGURACIÓN DE API
// ========================================

const GROQ_API_KEY = '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';
const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions';

// ========================================
// DATOS DE CHATS (simulando backend)
// ========================================
const chatsData = {
  "Refugio Peluditos": [
    { sender: "institution", text: "Hola! ¿Estás interesado en adoptar?", time: "10:30" }
  ],
  "Institución Animal": [
    { sender: "institution", text: "Tenemos gatos jóvenes disponibles", time: "09:15" }
  ],
  "Refugio Canino": [
    { sender: "institution", text: "Cachorro listo para adopción", time: "08:50" }
  ]
};

// ========================================
// CONTEXTOS PARA CADA INSTITUCIÓN
// ========================================
const institutionContexts = {
  "Refugio Peluditos": `Eres un asistente del Refugio Peluditos en Uruguay, una organización dedicada a la adopción de perros y gatos rescatados.

IMPORTANTE: Debes responder DIRECTAMENTE a lo que el usuario pregunta. Lee su mensaje con atención y responde específicamente a eso.

Información del refugio:
- Tenemos perros de todos los tamaños y edades (cachorros, adultos, seniors)
- También tenemos gatos en adopción
- Proceso: entrevista → visita al refugio → período de adaptación → adopción
- Requisitos: ser mayor de 18 años, espacio adecuado, compromiso de cuidado
- Las mascotas están vacunadas, desparasitadas y castradas
- Adopción con costo de $2000 UYU (cubre gastos veterinarios)
- Horario: Lunes a Sábado 10:00-18:00
- Ubicación: Montevideo

Responde de forma natural, breve (máximo 2-3 oraciones) y SIEMPRE relacionado con lo que el usuario pregunta.`,

  "Institución Animal": `Eres un representante de Institución Animal en Uruguay, especializada en rescate y adopción de gatos.

IMPORTANTE: Lee cuidadosamente lo que el usuario pregunta y responde ESPECÍFICAMENTE a esa pregunta.

Información:
- Nos especializamos en gatos de todas las edades
- Tenemos gatitos bebés, jóvenes y adultos
- Todos están castrados, vacunados y desparasitados
- Costo de adopción: $1500 UYU
- Incluimos kit de inicio (plato, arenero, juguete)
- Requisitos: hogar seguro, ventanas protegidas, compromiso
- Asesoramos sobre cuidados específicos de gatos
- Horario: Martes a Domingo 14:00-19:00

Sé cálido, responde brevemente (2-3 oraciones) y ASEGÚRATE de responder lo que te preguntan.`,

  "Refugio Canino": `Eres parte del Refugio Canino en Uruguay, enfocado en rescate y adopción responsable de perros.

IMPORTANTE: Presta atención a lo que el usuario te dice y responde EXACTAMENTE a eso, no des respuestas genéricas.

Información:
- Tenemos perros de razas mixtas y algunas razas puras rescatadas
- Tamaños: pequeños (hasta 10kg), medianos (10-25kg), grandes (más de 25kg)
- Todos vacunados, castrados y con tratamiento antiparasitario
- Evaluamos temperamento para recomendar el perro adecuado
- Proceso incluye asesoramiento post-adopción por 3 meses
- Costo: $2500 UYU (incluye collar, correa y primer mes de alimento)
- Requisitos: espacio adecuado, tiempo para paseos, patio si es perro grande
- Horario: Lunes a Viernes 9:00-17:00, Sábados 10:00-14:00

Responde brevemente (2-3 oraciones), con entusiasmo pero siendo específico a lo que preguntan.`
};

// ========================================
// VARIABLES GLOBALES
// ========================================
let currentChat = null;
let conversationHistories = {};

// ========================================
// ELEMENTOS DOM
// ========================================
const chatListContainer = document.getElementById('chat-list-container');
const chatBoxContainer = document.getElementById('chat-box-container');
const chatTitle = document.getElementById('chat-title');
const chatMessages = document.getElementById('chat-messages');
const messageInput = document.getElementById('message-input');
const sendBtn = document.getElementById('send-btn');
const backBtn = document.getElementById('back-btn');
const chatItems = document.querySelectorAll('.chat-item');

// ========================================
// FUNCIONES AUXILIARES
// ========================================

// Función para formatear hora actual
function getCurrentTime() {
  const now = new Date();
  return `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
}

// ========================================
// FUNCIÓN PARA OBTENER RESPUESTA DE IA
// ========================================
async function getAIResponse(userMessage, chatName) {
  try {
    // Inicializar historial si no existe
    if (!conversationHistories[chatName]) {
      conversationHistories[chatName] = [];
    }

    // Agregar mensaje del usuario al historial
    conversationHistories[chatName].push({
      role: "user",
      content: userMessage
    });

    // Preparar mensajes para la API
    const messages = [
      {
        role: "system",
        content: institutionContexts[chatName]
      },
      ...conversationHistories[chatName].slice(-6) // Últimos 6 mensajes para mejor contexto
    ];

    const response = await fetch(GROQ_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${GROQ_API_KEY}`
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages: messages,
        temperature: 0.5,
        max_tokens: 120,
        top_p: 0.9
      })
    });

    if (!response.ok) {
      throw new Error('Error en la API de Groq');
    }

    const data = await response.json();
    const aiResponse = data.choices[0].message.content;

    // Agregar respuesta al historial
    conversationHistories[chatName].push({
      role: "assistant",
      content: aiResponse
    });

    return aiResponse;

  } catch (error) {
    console.error('Error al obtener respuesta de IA:', error);
    
    // Respuestas de fallback inteligentes según el contexto
    const fallbacksByInstitution = {
      "Refugio Peluditos": [
        "Claro, puedo ayudarte. ¿Qué te gustaría saber sobre nuestros peluditos?",
        "Tenemos varios perros y gatos esperando un hogar. ¿Prefieres perros o gatos?",
        "El proceso de adopción es simple. ¿Tienes alguna pregunta específica?"
      ],
      "Institución Animal": [
        "¡Me encantaría ayudarte a encontrar tu gato ideal! ¿Qué buscas?",
        "Tenemos gatitos de diferentes edades. ¿Prefieres un gatito bebé o adulto?",
        "Puedo darte más información. ¿Qué necesitas saber?"
      ],
      "Refugio Canino": [
        "¡Genial que te interesen nuestros perros! ¿Buscas algún tamaño en particular?",
        "Tenemos cachorros y perros adultos. ¿Qué prefieres?",
        "Con gusto te ayudo. ¿Tienes experiencia con perros?"
      ]
    };
    
    const fallbacks = fallbacksByInstitution[chatName] || fallbacksByInstitution["Refugio Peluditos"];
    return fallbacks[Math.floor(Math.random() * fallbacks.length)];
  }
}

// ========================================
// FUNCIÓN PARA RENDERIZAR MENSAJES
// ========================================
function renderMessages(chatName) {
  const messages = chatsData[chatName] || [];
  chatMessages.innerHTML = '';
  
  // QUITAR la clase empty cuando hay un chat seleccionado
  chatMessages.classList.remove('empty');
  
  messages.forEach(msg => {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${msg.sender}`;
    messageDiv.innerHTML = `
      <div>${msg.text}</div>
      <small class="text-muted" style="font-size: 0.7rem; display: block; margin-top: 4px;">${msg.time}</small>
    `;
    chatMessages.appendChild(messageDiv);
  });
  
  // Scroll al final
  requestAnimationFrame(() => {
    chatMessages.scrollTop = chatMessages.scrollHeight;
  });
}

// ========================================
// INDICADOR DE ESCRITURA
// ========================================
function showTypingIndicator() {
  const typingDiv = document.createElement('div');
  typingDiv.id = 'typing-indicator';
  typingDiv.className = 'message institution d-flex flex-column';
  typingDiv.innerHTML = `
    <span>
      <span class="typing-dot">.</span>
      <span class="typing-dot">.</span>
      <span class="typing-dot">.</span>
    </span>
  `;
  chatMessages.appendChild(typingDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function removeTypingIndicator() {
  const indicator = document.getElementById('typing-indicator');
  if (indicator) {
    indicator.remove();
  }
}

// ========================================
// FUNCIÓN PARA ABRIR UN CHAT
// ========================================
function openChat(chatName) {
  currentChat = chatName;
  chatTitle.textContent = chatName;
  
  // Renderizar mensajes (esto ya quita la clase empty)
  renderMessages(chatName);
  
  // Mostrar chat box y ocultar lista en móvil
  chatBoxContainer.classList.remove('d-none');
  
  if (window.innerWidth < 768) {
    chatListContainer.classList.add('d-none');
  }
  
  // Limpiar y enfocar input
  messageInput.value = '';
  messageInput.focus();
}

// ========================================
// FUNCIÓN PARA ENVIAR MENSAJE
// ========================================
async function sendMessage() {
  const text = messageInput.value.trim();
  
  if (!text || !currentChat) return;
  
  // Deshabilitar input mientras se procesa
  messageInput.disabled = true;
  sendBtn.disabled = true;
  
  // Agregar mensaje del usuario
  const userMessage = {
    sender: "user",
    text: text,
    time: getCurrentTime()
  };
  
  chatsData[currentChat].push(userMessage);
  
  // Limpiar input
  messageInput.value = '';
  
  // Renderizar mensajes
  renderMessages(currentChat);
  
  // Actualizar preview en lista
  updateChatPreview(currentChat, text);
  
  // Mostrar indicador de escritura
  showTypingIndicator();
  
  // Obtener respuesta de IA
  const aiResponse = await getAIResponse(text, currentChat);
  
  // Remover indicador de escritura
  removeTypingIndicator();
  
  // Agregar respuesta de la institución
  const institutionMessage = {
    sender: "institution",
    text: aiResponse,
    time: getCurrentTime()
  };
  
  chatsData[currentChat].push(institutionMessage);
  renderMessages(currentChat);
  updateChatPreview(currentChat, aiResponse);
  
  // Rehabilitar input
  messageInput.disabled = false;
  sendBtn.disabled = false;
  messageInput.focus();
}

// ========================================
// FUNCIÓN PARA ACTUALIZAR PREVIEW
// ========================================
function updateChatPreview(chatName, lastMessage) {
  chatItems.forEach(item => {
    if (item.dataset.name === chatName) {
      const small = item.querySelector('small');
      if (small) {
        small.textContent = lastMessage.length > 40 
          ? lastMessage.substring(0, 40) + '...' 
          : lastMessage;
      }
    }
  });
}

// ========================================
// EVENT LISTENERS
// ========================================

// Items de chat
chatItems.forEach(item => {
  item.addEventListener('click', () => {
    const chatName = item.dataset.name;
    
    // Marcar como activo
    chatItems.forEach(i => i.classList.remove('active'));
    item.classList.add('active');
    
    openChat(chatName);
  });
});

// Botón enviar
sendBtn.addEventListener('click', sendMessage);

// Enter en input
messageInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    sendMessage();
  }
});

// Botón volver
backBtn.addEventListener('click', () => {
  chatBoxContainer.classList.add('d-none');
  chatListContainer.classList.remove('d-none');
  currentChat = null;
  
  // AGREGAR la clase empty cuando no hay chat seleccionado
  chatMessages.classList.add('empty');
  chatMessages.innerHTML = '<p class="text-muted text-center mt-4">Selecciona un chat para comenzar 🐾</p>';
});

// Responsive
window.addEventListener('resize', () => {
  if (window.innerWidth >= 768) {
    chatListContainer.classList.remove('d-none');
    if (currentChat) {
      chatBoxContainer.classList.remove('d-none');
    }
  }
});

// ========================================
// VERIFICACIÓN DE API KEY
// ========================================
if (GROQ_API_KEY === 'TU_API_KEY_AQUI') {
  console.warn('⚠️ Por favor, configura tu API key de Groq en la línea 7 del archivo mensajes.js');
  console.log('📝 Obtén tu API key gratis en: https://console.groq.com/keys');
}

// ========================================
// INICIALIZACIÓN
// ========================================
// Agregar clase empty al cargar la página
chatMessages.classList.add('empty');