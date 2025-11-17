const casosExito = [
  {
    mascota: "Luna",
    adoptante: "María",
    institucion: "Centro de Rescate Animal",
    descripcion: "Desde que adoptamos a Luna, nuestra vida cambió por completo. Al principio estaba tímida y asustada, pero con paciencia y cariño se convirtió en la reina de la casa. Ahora disfruta de los paseos largos, los juegos y el cariño familiar. Cada día nos sorprende con su alegría y ternura.",
    fecha: "2025-04-10",
    imagen: "https://images.unsplash.com/photo-1604848698030-c434ba08ece1?w=500&auto=format&fit=crop&q=60"
  },
  {
    mascota: "Milo",
    adoptante: "Juan",
    institucion: "Refugio Gatuno Feliz",
    descripcion: "Milo llegó a nuestra vida un día lluvioso. Estaba solo y desconfiado, pero ahora se ha adaptado perfectamente. Le encanta descansar en el sillón, jugar con otros gatos y cada día demuestra su cariño hacia todos en casa.",
    fecha: "2025-03-22",
    imagen: "https://images.unsplash.com/photo-1751402985454-b0d819ad972c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhvbWJyZSUyMGNvbiUyMGdhdG98ZW58MHx8MHx8fDA%3D"
  },
  {
    mascota: "Nina",
    adoptante: "Sofía",
    institucion: "Hogar Canino Amor",
    descripcion: "Nina es nuestra alegría diaria. Desde que llegó, nos ha llenado de amor y energía. Es juguetona, cariñosa y siempre está pendiente de todos. Gracias a la familia del hogar, encontramos una compañera increíble que nos hace felices todos los días.",
    fecha: "2025-05-01",
    imagen: "https://plus.unsplash.com/premium_photo-1664371675057-83f34f7596a2?w=500&auto=format&fit=crop&q=60"
  },
  {
    mascota: "Max",
    adoptante: "Carla",
    institucion: "Refugio Patitas Felices",
    descripcion: "Max es un perro lleno de energía. Desde que llegó a nuestra casa, cada día es una aventura. Nos acompaña a todas partes y su alegría es contagiosa. Estamos muy agradecidos con el refugio por permitirnos encontrar a este compañero incondicional.",
    fecha: "2025-02-15",
    imagen: "https://plus.unsplash.com/premium_photo-1683141114041-56c1014adb01?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fG1hc2NvdGFzfGVufDB8fDB8fHww"
  },
  {
    mascota: "Lola",
    adoptante: "Martín",
    institucion: "Hogar Gatuno Amoroso",
    descripcion: "Lola llegó a nuestra vida muy asustada, pero con paciencia y cariño se ha vuelto una gatita cariñosa y juguetona. Nos sigue por toda la casa y es imposible no sonreír al verla disfrutar de su nueva familia.",
    fecha: "2025-01-30",
    imagen: "https://images.unsplash.com/photo-1703798462981-f3f13c108774?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    mascota: "Thor",
    adoptante: "Ana",
    institucion: "Centro de Rescate Animal",
    descripcion: "Thor es un perro valiente y protector. Desde que lo adoptamos, nos ha enseñado la alegría de tener un compañero fiel. Es juguetón y le encanta correr en el parque. No podríamos estar más felices con él.",
    fecha: "2025-04-18",
    imagen: "https://plus.unsplash.com/premium_photo-1663036912909-958bef34f7ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTh8fG11amVyJTIwY29uJTIwcGVycm98ZW58MHx8MHx8fDA%3D"
  },
  {
    mascota: "Bella",
    adoptante: "Claudia",
    institucion: "Refugio Patitas Felices",
    descripcion: "Bella llegó tímida pero con mucho amor. Ahora es parte de nuestra familia, disfruta de los paseos y de jugar con otros perros del barrio. Adoptarla fue la mejor decisión.",
    fecha: "2025-03-05",
    imagen: "https://images.unsplash.com/photo-1544396738-140a4988bab8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fG1hc2NvdGFzJTIwY29uJTIwZHVlJUMzJUIxb3N8ZW58MHx8MHx8fDA%3D"
  },
  {
    mascota: "Simba",
    adoptante: "Marta",
    institucion: "Hogar Gatuno Amoroso",
    descripcion: "Simba es un gato muy curioso y juguetón. Cada día nos sorprende con sus travesuras y su cariño. Estamos muy felices de tenerlo con nosotros.",
    fecha: "2025-02-20",
    imagen: "https://plus.unsplash.com/premium_photo-1677666510237-60094cc47d99?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGdhdG9zJTIwY29uJTIwZHVlJUMzJUIxb3N8ZW58MHx8MHx8fDA%3D"
  },
  {
    mascota: "Rocky",
    adoptante: "Laura",
    institucion: "Centro de Rescate Animal",
    descripcion: "Rocky es un perro lleno de vida y amor. Nos acompaña en todos los paseos y su energía es contagiosa. Estamos agradecidos con el centro por brindarnos esta oportunidad.",
    fecha: "2025-01-18",
    imagen: "https://images.unsplash.com/photo-1605001011156-cbf0b0f67a51?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG11amVyJTIwY29uJTIwcGVycm98ZW58MHx8MHx8fDA%3D"
  },
  {
    mascota: "Mimi",
    adoptante: "Lucía",
    institucion: "Refugio Gatuno Feliz",
    descripcion: "Mimi es una gatita encantadora y muy cariñosa. Desde que llegó, nuestra casa se llenó de amor y alegría. No podemos imaginar nuestra vida sin ella.",
    fecha: "2025-04-01",
    imagen: "https://plus.unsplash.com/premium_photo-1664908327473-9323161a566b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z2F0b3MlMjBjb24lMjBkdWUlQzMlQjFvc3xlbnwwfHwwfHx8MA%3D%3D"
  }
];

let displayedCount = 2; // cuántos casos mostrar inicialmente

function renderCasos() {
  const container = document.querySelector(".casos-container");
  container.innerHTML = "";

  const casosAMostrar = casosExito.slice(0, displayedCount);

  casosAMostrar.forEach(caso => {
    const tarjeta = document.createElement("div");
    tarjeta.className = "tarjeta-caso";

    tarjeta.innerHTML = `
      <div class="caso-imagen">
        <img src="${caso.imagen}" alt="${caso.mascota}">
      </div>
      <div class="caso-info">
        <h3>
          <span>${caso.adoptante} adoptó a ${caso.mascota}</span>
          <span class="institucion">${caso.institucion}</span>
        </h3>
        <p>${caso.descripcion}</p>
        <p class="fecha">${caso.fecha}</p>
      </div>
    `;

    container.appendChild(tarjeta);
  });

  // Mostrar u ocultar botón "Ver más"
  const btn = document.querySelector(".btn-ver-mas");
  if (displayedCount >= casosExito.length) {
    btn.style.display = "none";
  } else {
    btn.style.display = "block";
  }
}

function cargarMas() {
  displayedCount += 2; // cargar 2 más cada vez
  renderCasos();
}

document.addEventListener("DOMContentLoaded", () => {
  renderCasos();
  const btn = document.querySelector(".btn-ver-mas");
  btn.addEventListener("click", cargarMas);
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