// Datos simulados (ejemplo)
const usuarioLogueado = localStorage.getItem('usuario') || 'UsuarioEjemplo';
const mascotaAdoptada = localStorage.getItem('mascota') || 'Firulais';
const fechaHoy = new Date().toLocaleDateString();

// Mostrar datos en el formulario
document.getElementById('usuario').textContent = usuarioLogueado;
document.getElementById('nombreMascota').textContent = mascotaAdoptada;
document.getElementById('fecha').textContent = fechaHoy;

// Subir imagen
const uploadBox = document.querySelector('.upload-box input');
uploadBox.addEventListener('change', (e) => {
    const fileName = e.target.files[0]?.name || '';
    if (fileName) {
        e.target.parentElement.textContent = fileName;
    }
});

// Botón Crear
document.getElementById('btnCrear').addEventListener('click', (e) => {
    e.preventDefault();
    
    // Capturar experiencia
    const experiencia = document.querySelector('.form-box textarea').value;
    
    if(!experiencia) {
        alert('Escribe tu experiencia antes de crear.');
        return;
    }

    // Guardar experiencia (puede ser en localStorage, o enviarla a tu backend)
    const nuevaExperiencia = {
        usuario: usuarioLogueado,
        mascota: mascotaAdoptada,
        fecha: fechaHoy,
        experiencia: experiencia
    };
    
    // Ejemplo guardando en localStorage
    let experiencias = JSON.parse(localStorage.getItem('experiencias')) || [];
    experiencias.push(nuevaExperiencia);
    localStorage.setItem('experiencias', JSON.stringify(experiencias));

    alert('¡Experiencia registrada!');
    // Limpiar formulario
    document.querySelector('.form-box textarea').value = '';
    uploadBox.value = '';
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