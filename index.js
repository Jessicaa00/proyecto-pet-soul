// index.js

// Mascotas de ejemplo
const mascotas = [
    {
        nombre: "Pipo",
        edad: "3 años",
        sexo: "Macho",
        especie: "Perro",
        tamaño: "Mediano",
        raza: "Dachshund",
        estadoSalud: "Buena",
        estadoAdopcion: "Disponible",
        institucion: "Refugio Patitas Felices",
        institucionResponsable: "Fundación Animales Uruguay",
        imagen: "https://images.unsplash.com/photo-1631517672382-93ced9e6526c?w=500&auto=format&fit=crop&q=60",
        descripcion: "Cariñoso y activo, perfecto para una familia."
    },
    {
        nombre: "Nala",
        edad: "6 meses",
        sexo: "Hembra",
        especie: "Gato",
        tamaño: "Pequeño",
        raza: "Siames",
        estadoSalud: "Vacunada",
        estadoAdopcion: "Disponible",
        institucion: "Gatitos Uruguay",
        institucionResponsable: "ONG Gatitos Felices",
        imagen: "https://images.unsplash.com/photo-1666181839388-2623c19d935e?w=500&auto=format&fit=crop&q=60",
        descripcion: "Juguetona y cariñosa, ideal para apartamento."
    },
    {
        nombre: "Cleo",
        edad: "2 años",
        sexo: "Hembra",
        especie: "Gato",
        tamaño: "Mediano",
        raza: "Común",
        estadoSalud: "Buena",
        estadoAdopcion: "Disponible",
        institucion: "Refugio Manos Amigas",
        institucionResponsable: "Fundación Manos Amigas",
        imagen: "https://images.unsplash.com/photo-1593483316242-efb5420596ca?w=500&auto=format&fit=crop&q=60",
        descripcion: "Tranquila y amigable, busca un hogar tranquilo."
    },
];

// Generar tarjetas de mascotas
const contenedor = document.getElementById("contenedorMascotas");

mascotas.forEach(pet => {
    const card = document.createElement("div");
    card.classList.add("col-md-4", "col-lg-3", "mb-4");

    let colorEstado = "#2e7d32";
    if (pet.estadoAdopcion.toLowerCase() === "adoptado") colorEstado = "#ff6b6b";
    else if (pet.estadoAdopcion.toLowerCase().includes("proceso")) colorEstado = "#f4c542";

    const botonAdoptar = pet.estadoAdopcion.toLowerCase() === "disponible" ?
        `<button>Adoptar</button>` :
        `<span style="margin-top: auto; display: block; padding: 8px 20px; border-radius: 25px; background-color: #555; color: white; font-weight: bold;">No disponible</span>`;

    card.innerHTML = `
        <div class="pet-card">
            <img src="${pet.imagen}" alt="${pet.nombre}">
            <div class="pet-info text-center">
                <h5 class="nombre">${pet.nombre}</h5>
                <span class="estado" style="background-color: ${colorEstado};">${pet.estadoAdopcion}</span>
            </div>
            <div class="card-overlay">
                <h5>${pet.nombre}</h5>
                <p class="descripcion-corta">${pet.descripcion}</p>
                <ul>
                    <li><strong>Edad:</strong> ${pet.edad}</li>
                    <li><strong>Sexo:</strong> ${pet.sexo}</li>
                    <li><strong>Especie:</strong> ${pet.especie}</li>
                    <li><strong>Tamaño:</strong> ${pet.tamaño || "Desconocido"}</li>
                    <li><strong>Raza:</strong> ${pet.raza || "Desconocida"}</li>
                    <li><strong>Salud:</strong> ${pet.estadoSalud || "N/A"}</li>
                    <li><strong>Institución:</strong> ${pet.institucion}</li>
                    <li><strong>Instituto responsable:</strong> ${pet.institucionResponsable}</li>
                </ul>
                ${botonAdoptar}
            </div>
        </div>
    `;

    contenedor.appendChild(card);
});



// Toggle menú hamburguesa
function toggleMenu() {
    const menu = document.querySelector('.menu');
    const icon = document.querySelector('.menu-toggle i');
    menu.classList.toggle('active');
    if (menu.classList.contains('active')) {
        icon.classList.replace('bi-list', 'bi-x');
    } else {
        icon.classList.replace('bi-x', 'bi-list');
    }
}

document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            const menu = document.querySelector('.menu');
            const icon = document.querySelector('.menu-toggle i');
            menu.classList.remove('active');
            icon.classList.replace('bi-x', 'bi-list');
        }
    });
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        const menu = document.querySelector('.menu');
        const icon = document.querySelector('.menu-toggle i');
        menu.classList.remove('active');
        icon.classList.replace('bi-x', 'bi-list');
    }
});

// ===== LOGICA DE USUARIO LOGUEADO =====
function actualizarHeaderUsuario() {
    // Seleccionamos únicamente el dropdown del usuario
    const usuarioDropdown = document.querySelector('.icons .dropdown:last-child ul.dropdown-menu-end');
    if (!usuarioDropdown) return;

    const usuarioLogueado = JSON.parse(localStorage.getItem('usuarioLogueado'));

    const loginItem = usuarioDropdown.querySelector('a[href="../login/login.html"]');
    const registerItem = usuarioDropdown.querySelector('a[href="../registrarse/registrarse.html"]');

    if (usuarioLogueado) {
        // Ocultar login y registro
        if (loginItem) loginItem.style.display = 'none';
        if (registerItem) registerItem.style.display = 'none';

        // Saludo y cerrar sesión
        if (!usuarioDropdown.querySelector('#saludo-usuario')) {
            const saludo = document.createElement('li');
            saludo.id = 'saludo-usuario';
            saludo.innerHTML = `<span class="dropdown-item">Hola, ${usuarioLogueado.nombre}</span>`;
            usuarioDropdown.prepend(saludo);

            const cerrarSesionItem = document.createElement('li');
            cerrarSesionItem.innerHTML = `<a class="dropdown-item" href="#" id="cerrar-sesion">Cerrar sesión</a>`;
            usuarioDropdown.appendChild(cerrarSesionItem);

            document.getElementById('cerrar-sesion').addEventListener('click', () => {
                localStorage.removeItem('usuarioLogueado');
                location.reload();
            });
        }
    } else {
        // Mostrar login y registro si no hay usuario
        if (loginItem) loginItem.style.display = 'block';
        if (registerItem) registerItem.style.display = 'block';

        const saludo = usuarioDropdown.querySelector('#saludo-usuario');
        if (saludo) saludo.remove();

        const cerrarSesionItem = usuarioDropdown.querySelector('#cerrar-sesion')?.parentElement;
        if (cerrarSesionItem) cerrarSesionItem.remove();
    }
}

const rol = localStorage.getItem("rol");

// Ejecutar al cargar el DOM    
document.addEventListener('DOMContentLoaded', actualizarHeaderUsuario);