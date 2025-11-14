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
        imagen: "https://images.unsplash.com/photo-1631517672382-93ced9e6526c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FsY2hpY2hhJTIwcGVycm98ZW58MHx8MHx8fDA%3D",
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
        imagen: "https://images.unsplash.com/photo-1666181839388-2623c19d935e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2F0byUyMHNpYW1lc3xlbnwwfHwwfHx8MA%3D%3D",
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
        imagen: "https://images.unsplash.com/photo-1593483316242-efb5420596ca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIzfHxnYXRvfGVufDB8fDB8fHww",
        descripcion: "Tranquila y amigable, busca un hogar tranquilo."
    },
];

// Generación de tarjetas
const contenedor = document.getElementById("contenedorMascotas");

mascotas.forEach(pet => {
    const card = document.createElement("div");
    card.classList.add("col-md-4", "col-lg-3", "mb-4");

    // Lógica para asignar el color de estado
    let estadoClass = pet.estadoAdopcion;
    let colorEstado = "#2e7d32";
    if (pet.estadoAdopcion.toLowerCase() === "adoptado") {
        colorEstado = "#ff6b6b"; // Rojo suave
    } else if (pet.estadoAdopcion.toLowerCase().includes("proceso")) {
        colorEstado = "#f4c542"; // Amarillo
    }

    const botonAdoptar = pet.estadoAdopcion.toLowerCase() === "disponible" ?
        `<button>Adoptar</button>` :
        `<span style="margin-top: auto; display: block; padding: 8px 20px; border-radius: 25px; background-color: #555; color: white; font-weight: bold;">No disponible</span>`;

    const descripcion = pet.descripcion || "Mascota muy amigable y cariñosa, lista para un hogar.";

    card.innerHTML = `
        <div class="pet-card">
            <img src="${pet.imagen}" alt="${pet.nombre}">
            <div class="pet-info text-center">
                <h5 class="nombre">${pet.nombre}</h5>
                
                <span class="estado ${estadoClass}" style="background-color: ${colorEstado};">
                    ${pet.estadoAdopcion}
                </span>
            </div>

            <div class="card-overlay">
                <h5>${pet.nombre}</h5>

                <p class="descripcion-corta">${descripcion}</p>

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

// [Código de funciones toggleMenu, event listeners, etc. - Mantener el resto de tu JS]

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