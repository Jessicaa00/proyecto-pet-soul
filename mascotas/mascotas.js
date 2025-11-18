const mascotasLocales = [
  {
    nombre: "Rocky",
    edad: "2 años",
    sexo: "Macho",
    especie: "Perro",
    tamaño: "Grande",
    raza: "Pastor Alemán",
    estadoAdopcion: "Disponible",
    institucion: "Refugio Patitas Felices",
    institucionResponsable: "Fundación Animales Uruguay",
    imagen: "https://images.unsplash.com/photo-1453487977089-77350a275ec5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlcnJvcyUyMGdyYW5kZXN8ZW58MHx8MHx8fDA%3D",
    descripcion: "Muy activo y juguetón, ideal para familias con patio."
  },
  {
    nombre: "Lola",
    edad: "6 meses",
    sexo: "Hembra",
    especie: "Gato",
    tamaño: "Pequeño",
    raza: "Tabby/Mestiza",
    estadoSalud: "Vacunada",
    estadoAdopcion: "Disponible",
    institucion: "Gatitos Uruguay",
    institucionResponsable: "ONG Gatitos Felices",
    imagen: "https://plus.unsplash.com/premium_photo-1675848495392-6b9a3b962df0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Z2F0byUyMGR1cm1pZW5kb3xlbnwwfHwwfHx8MA%3D%3D",
    descripcion: "Cariñosa y tranquila, le encanta dormir al sol."
  },
  {
    nombre: "Max",
    edad: "4 años",
    sexo: "Macho",
    especie: "Perro",
    tamaño: "Mediano",
    raza: "Border Collie",
    estadoSalud: "Buena",
    estadoAdopcion: "Adoptado",
    institucion: "Refugio Amigo Peludo",
    institucionResponsable: "Fundación Animales Uruguay",
    imagen: "https://images.unsplash.com/photo-1620325698009-4163b8f6d501?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVycm8lMjBqdWdhbmRvfGVufDB8fDB8fHww",
    descripcion: "Le encanta correr y jugar con pelotas."
  },
  {
    nombre: "Maya",
    edad: "1 año",
    sexo: "Hembra",
    especie: "Gato",
    tamaño: "Mediano",
    raza: "Común Europeo",
    estadoSalud: "Buena",
    estadoAdopcion: "Disponible",
    institucion: "Gatitos Uruguay",
    institucionResponsable: "ONG Gatitos Felices",
    imagen: "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2F0b3xlbnwwfHwwfHx8MA%3D%3D",
    descripcion: "Curiosa y muy inteligente, le gusta explorar."
  },
  {
    nombre: "Toby",
    edad: "5 años",
    sexo: "Macho",
    especie: "Perro",
    tamaño: "Grande",
    raza: "Golden Retriever",
    estadoSalud: "Buena",
    estadoAdopcion: "En proceso",
    institucion: "Refugio Patitas Felices",
    institucionResponsable: "Fundación Animales Uruguay",
    imagen: "https://plus.unsplash.com/premium_photo-1666777247416-ee7a95235559?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVycm98ZW58MHx8MHx8fDA%3D",
    descripcion: "Fiel y tranquilo, se adapta a cualquier familia."
  },
  {
    nombre: "Nala",
    edad: "8 meses",
    sexo: "Hembra",
    especie: "Gato",
    tamaño: "Pequeño",
    raza: "British Shorthair (Mestiza)",
    estadoSalud: "Vacunada",
    estadoAdopcion: "Disponible",
    institucion: "Gatitos Uruguay",
    institucionResponsable: "ONG Gatitos Felices",
    imagen: "https://images.unsplash.com/photo-1595433707802-6b2626ef1c91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2F0aXRvfGVufDB8fDB8fHww",
    descripcion: "Juguetona y sociable con otros gatos."
  },
  {
    nombre: "Bobby",
    edad: "3 años",
    sexo: "Macho",
    especie: "Perro",
    tamaño: "Mediano",
    raza: "Jack Russell Terrier",
    estadoSalud: "Buena",
    estadoAdopcion: "Disponible",
    institucion: "Refugio Manos Amigas",
    institucionResponsable: "Fundación Manos Amigas",
    imagen: "https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVycm98ZW58MHx8MHx8fDA%3D",
    descripcion: "Amistoso con niños y otros perros."
  },
  {
    nombre: "Simba",
    edad: "2 años",
    sexo: "Macho",
    especie: "Gato",
    tamaño: "Mediano",
    raza: "Maine Coon",
    estadoSalud: "Buena",
    estadoAdopcion: "Adoptado",
    institucion: "Gatitos Uruguay",
    institucionResponsable: "ONG Gatitos Felices",
    imagen: "https://images.unsplash.com/photo-1536590158209-e9d615d525e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fGdhdG98ZW58MHx8MHx8fDA%3D",
    descripcion: "Muy activo, le gusta trepar y cazar juguetes."
  },
  {
    nombre: "Coco",
    edad: "1 año",
    sexo: "Hembra",
    especie: "Perro",
    tamaño: "Pequeño",
    raza: "Kokoni",
    estadoSalud: "Buena",
    estadoAdopcion: "Disponible",
    institucion: "Refugio Patitas Felices",
    institucionResponsable: "Fundación Animales Uruguay",
    imagen: "https://images.unsplash.com/photo-1587559045816-8b0a54d1fbd2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    descripcion: "Muy cariñosa y afectuosa con personas."
  },
  {
    nombre: "Luna",
    edad: "2 años",
    sexo: "Hembra",
    especie: "Gato",
    tamaño: "Mediano",
    raza: "Khao Manee",
    estadoSalud: "Buena",
    estadoAdopcion: "En proceso",
    institucion: "Refugio Manos Amigas",
    institucionResponsable: "Fundación Manos Amigas",
    imagen: "https://images.unsplash.com/photo-1518288774672-b94e808873ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGdhdG98ZW58MHx8MHx8fDA%3D",
    descripcion: "Sociable y tranquila, ideal para departamentos."
  },
  {
    nombre: "Rex",
    edad: "4 años",
    sexo: "Macho",
    especie: "Perro",
    tamaño: "Grande",
    raza: "Cocker Spaniel",
    estadoSalud: "Buena",
    estadoAdopcion: "Disponible",
    institucion: "Refugio Patitas Felices",
    institucionResponsable: "Fundación Animales Uruguay",
    imagen: "https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBlcnJvfGVufDB8fDB8fHww",
    descripcion: "Protector y leal, necesita espacio para correr."
  },
  {
    nombre: "Mimi",
    edad: "6 meses",
    sexo: "Hembra",
    especie: "Gato",
    tamaño: "Pequeño",
    raza: "Ragdoll",
    estadoSalud: "Vacunada",
    estadoAdopcion: "Disponible",
    institucion: "Gatitos Uruguay",
    institucionResponsable: "ONG Gatitos Felices",
    imagen: "https://images.unsplash.com/photo-1506755855567-92ff770e8d00?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fGdhdG98ZW58MHx8MHx8fDA%3D",
    descripcion: "Extrovertida y le encanta recibir mimos."
  },
  {
    nombre: "Bruno",
    edad: "3 años",
    sexo: "Macho",
    especie: "Perro",
    tamaño: "Mediano",
    raza: "Goldendoodle",
    estadoSalud: "Buena",
    estadoAdopcion: "Adoptado",
    institucion: "Refugio Manos Amigas",
    institucionResponsable: "Fundación Manos Amigas",
    imagen: "https://images.unsplash.com/photo-1547525623-c7d42c20284c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTF8fHBlcnJvfGVufDB8fDB8fHww",
    descripcion: "Tranquilo y obediente, ideal para familias."
  },
  {
    nombre: "Kira",
    edad: "1 año",
    sexo: "Hembra",
    especie: "Gato",
    tamaño: "Mediano",
    raza: "Siamesa Mestiza",
    estadoSalud: "Buena",
    estadoAdopcion: "Disponible",
    institucion: "Gatitos Uruguay",
    institucionResponsable: "ONG Gatitos Felices",
    imagen: "https://images.unsplash.com/photo-1615497001839-b0a0eac3274c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fGdhdG98ZW58MHx8MHx8fDA%3D",
    descripcion: "Curiosa y juguetona, le encanta explorar."
  },
  {
    nombre: "Lucky",
    edad: "2 años",
    sexo: "Macho",
    especie: "Perro",
    tamaño: "Grande",
    raza: "Labrador",
    estadoSalud: "Buena",
    estadoAdopcion: "Disponible",
    institucion: "Refugio Patitas Felices",
    institucionResponsable: "Fundación Animales Uruguay",
    imagen: "https://images.unsplash.com/photo-1507660392550-9aff6e04c7e5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIyfHxwZXJyb3xlbnwwfHwwfHx8MA%3D%3D",
    descripcion: "Activo y amistoso, perfecto para familias activas."
  },
  {
    nombre: "Kiwi",
    edad: "2 años",
    sexo: "Hembra",
    especie: "Perro",
    tamaño: "Grande",
    raza: "Chihuahua",
    estadoSalud: "Buena",
    estadoAdopcion: "Disponible",
    institucion: "Refugio Patitas Felices",
    institucionResponsable: "Fundación Animales Uruguay",
    imagen: "https://images.unsplash.com/photo-1579462435531-6c9580b64879?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGNoaWh1YWh1YXxlbnwwfHwwfHx8MA%3D%3D",
    descripcion: "Dulce y tranquila. Siempre lista para recibir mimos."
  },

];
// ===== VARIABLES GLOBALES =====
const contenedorMascotas = document.getElementById("contenedorMascotas");
const btnVerMas = document.querySelector(".btn-ver-mas");
let todasLasMascotas = [...mascotasLocales]; // Inicializamos con locales
let mascotasFiltradas = [...todasLasMascotas];
let mascotasMostradas = 8;
const API_URL = 'http://localhost:3000/api/mascotas';

// ===== FUNCIONES =====
function renderizarMascotas(lista) {
  contenedorMascotas.innerHTML = "";
  const mostrar = lista.slice(0, mascotasMostradas);

  if (mostrar.length === 0) {
    contenedorMascotas.innerHTML = `
      <div class="col-12 text-center py-5">
        <h4 class="text-muted">No se encontraron mascotas 😢</h4>
      </div>
    `;
    btnVerMas.style.display = "none";
    return;
  }

  mostrar.forEach((m) => {
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("col-md-4", "col-lg-3", "mb-4");

    let colorEstado = "#999";
    if (m.estadoAdopcion.toLowerCase() === "disponible") colorEstado = "#2e7d32";
    else if (m.estadoAdopcion.toLowerCase() === "adoptado") colorEstado = "#ff6b6b";
    else if (m.estadoAdopcion.toLowerCase() === "en proceso") colorEstado = "#f4c542";

const botonAdoptar = m.estadoAdopcion.toLowerCase() === "disponible" ?
  `<button class="btn-adoptar" onclick="adoptarMascota('${m.nombre}')">Adoptar</button>` :
  `<span class="badge" style="background-color: #555;">No disponible</span>`;

    tarjeta.innerHTML = `
      <div class="pet-card">
        <img src="${m.imagen}" alt="${m.nombre}">
        <div class="pet-info text-center">
          <h5 class="nombre">${m.nombre}</h5>
          <span class="badge estado" style="background-color: ${colorEstado};">
            ${m.estadoAdopcion || 'Disponible'}
          </span>
        </div>

        <div class="card-overlay">
          <h5>${m.nombre}</h5>
          <p class="descripcion-corta">${m.descripcion || "Mascota muy amigable y cariñosa."}</p>

          <ul>
            <li><strong>Edad:</strong> ${m.edad}</li>
            <li><strong>Sexo:</strong> ${m.sexo}</li>
            <li><strong>Especie:</strong> ${m.especie}</li>
            <li><strong>Tamaño:</strong> ${m.tamaño}</li>
            <li><strong>Raza:</strong> ${m.raza || "Desconocida"}</li>
            <li><strong>Salud:</strong> ${m.estadoSalud}</li>
            <li><strong>Institución:</strong> ${m.institucion}</li>
            <li><strong>Instituto responsable:</strong> ${m.institucionResponsable}</li>
          </ul>
          ${botonAdoptar}
        </div>
      </div>
    `;

    contenedorMascotas.appendChild(tarjeta);
  });

  btnVerMas.style.display = mascotasMostradas >= lista.length ? "none" : "inline-block";
}


// Aplicar filtros
function aplicarFiltros() {
  const especieFiltro = document.getElementById('especie').value.toLowerCase();
  const tamañoFiltro = document.getElementById('tamaño').value.toLowerCase();
  const edadFiltro = document.getElementById('edad').value.toLowerCase();

  mascotasFiltradas = todasLasMascotas.filter(mascota => {
    const coincideEspecie = !especieFiltro || mascota.especie.toLowerCase() === especieFiltro;
    const coincideTamaño = !tamañoFiltro || mascota.tamaño.toLowerCase() === tamañoFiltro;
    const coincideEdad = !edadFiltro || mascota.edad.toLowerCase().includes(edadFiltro);
    return coincideEspecie && coincideTamaño && coincideEdad;
  });

  mascotasMostradas = 4;
  renderizarMascotas(mascotasFiltradas);
}

// Obtener mascotas desde API (opcional)
async function obtenerMascotas() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error("Error al obtener mascotas");
    const datosAPI = await response.json();
    if (datosAPI.length) {
      todasLasMascotas = datosAPI;
      aplicarFiltros();
    }
  } catch (error) {
    console.warn("⚠️ No se pudo cargar desde API, usando datos locales");
  }
}

// ===== EVENTOS =====
document.addEventListener("DOMContentLoaded", function () {
  renderizarMascotas(mascotasFiltradas); // Mostrar locales al cargar

  // Intentar cargar API
  obtenerMascotas();

  function aplicarFiltros() {
    const especieFiltro = document.getElementById('especie').value.toLowerCase();
    const tamañoFiltro = document.getElementById('tamaño').value.toLowerCase();
    const edadFiltro = document.getElementById('edad').value.toLowerCase();
    const sexoFiltro = document.getElementById('sexo') ? document.getElementById('sexo').value.toLowerCase() : '';

    mascotasFiltradas = todasLasMascotas.filter(mascota => {
      const coincideEspecie = !especieFiltro || mascota.especie.toLowerCase() === especieFiltro;
      const coincideTamaño = !tamañoFiltro || mascota.tamaño.toLowerCase() === tamañoFiltro;
      const coincideSexo = !sexoFiltro || mascota.sexo.toLowerCase() === sexoFiltro;

      const categoria = mascota.edad.toLowerCase().includes("mes") ? "cachorro" :
        parseInt(mascota.edad) <= 2 ? "joven" : "adulto";
      const coincideEdad = !edadFiltro || categoria === edadFiltro;

      return coincideEspecie && coincideTamaño && coincideSexo && coincideEdad;
    });

    mascotasMostradas = 4;
    renderizarMascotas(mascotasFiltradas);
  }
  // Botón Ver más
  btnVerMas.addEventListener("click", function () {
    mascotasMostradas += 4;
    renderizarMascotas(mascotasFiltradas);
  });
});

function adoptarMascota(nombreMascota) {
    // Guardamos qué mascota quiere adoptar
    localStorage.setItem("mascotaAdoptar", nombreMascota);

    // Redirige a la página donde se completa la adopción
    window.location.href = "../adopcion/adoptar.html";
}



// ===== MENU HAMBURGUESA =====
function toggleMenu() {
  const menu = document.querySelector('.menu');
  const icon = document.querySelector('.menu-toggle i');
  menu.classList.toggle('active');
  icon.classList.toggle('bi-list');
  icon.classList.toggle('bi-x');
}

document.querySelectorAll('.menu a').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 768) toggleMenu();
  });
});
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    const menu = document.querySelector('.menu');
    const icon = document.querySelector('.menu-toggle i');
    menu.classList.remove('active');
    icon.classList.add('bi-list');
    icon.classList.remove('bi-x');
  }
});

function adoptarMascota(nombreMascota) {
  // Mensaje lindo tipo alerta
  alert(`Tu solicitud para adoptar a ${nombreMascota} fue enviada a la institución 🐾`);
}