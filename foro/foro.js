
// ===== DATOS DE PUBLICACIONES =====
let posts = [
    {
        id: 1,
        author: 'Juan Pérez',
        avatar: 'J',
        time: 'Hace 2 horas',
        category: 'perros',
        text: '¿Alguien tiene consejos para cuidar cachorros recién adoptados? Acabo de adoptar un labrador de 2 meses y quiero asegurarme de darle los mejores cuidados desde el principio. 🐶',
        image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800',
        likes: 0,
        liked: false,
        comments: []
    },
    {
        id: 2,
        author: 'Ana López',
        avatar: 'A',
        time: 'Hace 4 horas',
        category: 'gatos',
        text: 'Mi gato está muy tímido desde que llegó a casa. ¿Cómo puedo ayudarlo a adaptarse y ganar confianza? Ya lleva una semana conmigo y todavía se esconde mucho. 😿',
        image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=800',
        likes: 0,
        liked: false,
        comments: []
    },
    {
        id: 3,
        author: 'María García',
        avatar: 'M',
        time: 'Hace 1 día',
        category: 'salud',
        text: 'Recordatorio importante: ¡No olviden las vacunas anuales de sus mascotas! Acabo de llevar a mis perros y el veterinario me recordó la importancia de mantener el calendario al día. 💉',
        image: null,
        likes: 0,
        liked: false,
        comments: []
    },
    {
        id: 4,
        author: 'Carlos Rodríguez',
        avatar: 'C',
        time: 'Hace 2 días',
        category: 'cuidados',
        text: 'Tips para el verano: Recuerden que el calor también afecta a nuestras mascotas. Siempre agua fresca disponible, eviten paseos en las horas más calurosas y nunca los dejen en el auto. ☀️🐾',
        image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800',
        likes: 0,
        liked: false,
        comments: []
    },
    {
        id: 5,
        author: 'Laura Martínez',
        avatar: 'L',
        time: 'Hace 3 días',
        category: 'adopcion',
        text: '¡Adoptar fue la mejor decisión de mi vida! Hace un mes adopté a Luna y no puedo estar más feliz. Si están pensando en adoptar, ¡háganlo! Hay muchos peluditos esperando un hogar. 🏡❤️',
        image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=800',
        likes: 0,
        liked: false,
        comments: []
    }
];


// ===== FILTRADO POR CATEGORÍAS =====
const categoryOptions = document.querySelectorAll('.category-option');
const selectedCategoryText = document.getElementById('selectedCategory');
let currentCategory = 'todos';

categoryOptions.forEach(option => {
    option.addEventListener('click', function(e) {
        e.preventDefault();
        
        categoryOptions.forEach(o => o.classList.remove('active'));
        this.classList.add('active');
        
        currentCategory = this.getAttribute('data-category');
        const categoryName = this.textContent.trim();
        
        selectedCategoryText.textContent = categoryName;
        
        renderPosts();
    });
});

// ===== RENDERIZAR PUBLICACIONES =====
function renderPosts() {
    const postsContainer = document.getElementById('postsContainer');
    postsContainer.innerHTML = '';
    
    const filteredPosts = currentCategory === 'todos' 
        ? posts 
        : posts.filter(post => post.category === currentCategory);
    
    filteredPosts.forEach(post => {
        const postCard = createPostCard(post);
        postsContainer.appendChild(postCard);
    });
}

function createPostCard(post) {
    const card = document.createElement('div');
    card.className = 'post-card';
    card.setAttribute('data-post-id', post.id);
    
    const likesText = post.likes > 0 ? ` (${post.likes})` : '';
    const commentsCount = post.comments.length > 0 ? ` (${post.comments.length})` : '';
    
    card.innerHTML = `
        <div class="post-header">
            <div class="post-avatar">${post.avatar}</div>
            <div class="post-user-info">
                <p class="post-user-name">${post.author}</p>
                <p class="post-time">${post.time}</p>
            </div>
            <span class="post-category">${getCategoryName(post.category)}</span>
        </div>
        <div class="post-body">
            <p class="post-text">${post.text}</p>
            ${post.image ? `<img src="${post.image}" alt="Post image" class="post-image">` : ''}
        </div>
        <div class="post-actions">
            <button class="post-action-btn ${post.liked ? 'liked' : ''}" onclick="toggleLike(${post.id})">
                <i class="bi bi-heart${post.liked ? '-fill' : ''}"></i>
                <span>Me gusta${likesText}</span>
            </button>
            <button class="post-action-btn" onclick="toggleComments(${post.id})">
                <i class="bi bi-chat"></i>
                <span>Comentar${commentsCount}</span>
            </button>
            <button class="post-action-btn">
                <i class="bi bi-share"></i>
                <span>Compartir</span>
            </button>
        </div>
        <div class="comments-section" id="comments-${post.id}" style="display: none;">
            <div id="comments-list-${post.id}">
                ${post.comments.map(comment => createCommentHTML(comment)).join('')}
            </div>
            <div class="comment-input-container">
                <input type="text" class="comment-input" id="comment-input-${post.id}" 
                       placeholder="Escribe un comentario..." 
                       onkeypress="handleCommentKeyPress(event, ${post.id})">
                <button class="comment-submit-btn" onclick="addComment(${post.id})">
                    <i class="bi bi-send-fill"></i>
                </button>
            </div>
        </div>
    `;
    
    return card;
}

function createCommentHTML(comment) {
    return `
        <div class="comment-item">
            <div class="comment-header">
                <div class="comment-avatar">${comment.author[0]}</div>
                <div>
                    <span class="comment-author">${comment.author}</span>
                    <span class="comment-time ms-2">${comment.time}</span>
                </div>
            </div>
            <p class="comment-text">${comment.text}</p>
        </div>
    `;
}

function getCategoryName(category) {
    const categories = {
        'salud': 'Salud',
        'perros': 'Perros',
        'gatos': 'Gatos',
        'cuidados': 'Cuidados',
        'adopcion': 'Adopción'
    };
    return categories[category] || category;
}

// ===== FUNCIONALIDAD DE LIKES =====
function toggleLike(postId) {
    const post = posts.find(p => p.id === postId);
    if (post) {
        post.liked = !post.liked;
        post.likes = post.liked ? post.likes + 1 : post.likes - 1;
        renderPosts();
    }
}

// ===== FUNCIONALIDAD DE COMENTARIOS =====
function toggleComments(postId) {
    const commentsSection = document.getElementById(`comments-${postId}`);
    if (commentsSection.style.display === 'none') {
        commentsSection.style.display = 'block';
    } else {
        commentsSection.style.display = 'none';
    }
}

function addComment(postId) {
    const input = document.getElementById(`comment-input-${postId}`);
    const commentText = input.value.trim();
    
    if (commentText) {
        const post = posts.find(p => p.id === postId);
        if (post) {
            const newComment = {
                id: Date.now(),
                author: 'Usuario',
                text: commentText,
                time: 'Ahora'
            };
            
            post.comments.push(newComment);
            input.value = '';
            renderPosts();
            
            // Mantener la sección de comentarios abierta
            setTimeout(() => {
                const commentsSection = document.getElementById(`comments-${postId}`);
                commentsSection.style.display = 'block';
            }, 10);
        }
    }
}

function handleCommentKeyPress(event, postId) {
    if (event.key === 'Enter') {
        addComment(postId);
    }
}

// ===== CREAR NUEVA PUBLICACIÓN =====
function handleSubmit() {
    const author = document.getElementById('author').value;
    const category = document.getElementById('categorySelect').value;
    const message = document.getElementById('message').value;
    const imageUrl = document.getElementById('imageUrl').value;
    
    if (!author || !category || !message) {
        alert('Por favor completa todos los campos requeridos');
        return;
    }
    
    // Cerrar modal
    const modal = bootstrap.Modal.getInstance(document.getElementById('createPostModal'));
    modal.hide();
    
    // Mostrar alerta de verificación
    showVerificationAlert();
    
    // Limpiar formulario
    document.getElementById('author').value = '';
    document.getElementById('categorySelect').value = '';
    document.getElementById('message').value = '';
    document.getElementById('imageUrl').value = '';
}

function showVerificationAlert() {
    const alert = document.getElementById('verificationAlert');
    alert.style.display = 'block';
    
    setTimeout(() => {
        alert.style.display = 'none';
    }, 5000);
}

function closeAlert() {
    document.getElementById('verificationAlert').style.display = 'none';
}

// ===== INICIALIZACIÓN =====
document.addEventListener('DOMContentLoaded', () => {
    renderPosts();
});

// Función para toggle del menú hamburguesa
function toggleMenu() {
    const menu = document.querySelector('.menu');
    const icon = document.querySelector('.menu-toggle i');
    
    menu.classList.toggle('active');
    
    // Cambiar icono de hamburguesa a X
    if (menu.classList.contains('active')) {
        icon.classList.remove('bi-list');
        icon.classList.add('bi-x');
    } else {
        icon.classList.remove('bi-x');
        icon.classList.add('bi-list');
    }
}

// Cerrar menú al hacer clic en un enlace (solo en móvil)
document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            const menu = document.querySelector('.menu');
            const icon = document.querySelector('.menu-toggle i');
            
            menu.classList.remove('active');
            icon.classList.remove('bi-x');
            icon.classList.add('bi-list');
        }
    });
});

// Cerrar menú al cambiar tamaño de ventana
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        const menu = document.querySelector('.menu');
        const icon = document.querySelector('.menu-toggle i');
        
        menu.classList.remove('active');
        icon.classList.remove('bi-x');
        icon.classList.add('bi-list');
    }
});