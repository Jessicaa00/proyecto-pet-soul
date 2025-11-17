// =========================
//     DATOS Y VARIABLES
// =========================
let allInstitutions = [];
let displayedCount = 5;
let filteredInstitutions = [];

// DEFAULT INSTITUTIONS (si no hay storage)
const defaultInstitutions = [
    {
        id: 'inst_001',
        nombre: 'Centro de Rescate Animal',
        tipo: 'Centro de Rescate',
        ubicacion: 'Montevideo',
        descripcion: 'Rescata y rehabilita animales en situación de calle.',
        fechaCreacion: '2023-01-15'
    },
    {
        id: 'inst_002',
        nombre: 'Fundación Patitas',
        tipo: 'Fundación',
        ubicacion: 'Canelones',
        descripcion: 'Promueve campañas de adopción y educación responsable.',
        fechaCreacion: '2023-03-20'
    },
    {
        id: 'inst_003',
        nombre: 'Refugio Esperanza',
        tipo: 'Refugio',
        ubicacion: 'Montevideo',
        descripcion: 'Ofrece refugio y cuidado a animales abandonados.',
        fechaCreacion: '2023-02-10'
    },
    {
        id: 'inst_004',
        nombre: 'Protectora Animal del Este',
        tipo: 'Protectora',
        ubicacion: 'Maldonado',
        descripcion: 'Dedicados al rescate y protección en la zona este.',
        fechaCreacion: '2023-05-05'
    },  
    {
        id: 'inst_005',
        nombre: 'Veterinaria AnimalCare',
        tipo: 'Veterinaria',
        ubicacion: 'Rocha',
        descripcion: 'Atención médica y campañas de castración.',
        fechaCreacion: '2023-06-12'
    },
    {
        id: 'inst_006',
        nombre: 'Grupo Patas Felices',
        tipo: 'Protectora',
        ubicacion: 'San José',
        descripcion: 'Rescate de mascotas heridas o abandonadas.',
        fechaCreacion: '2023-07-01'
    },
    {
        id: 'inst_007',
        nombre: 'Refugio Amanecer',
        tipo: 'Refugio',
        ubicacion: 'Maldonado',
        descripcion: 'Refugio para perros y gatos rescatados.',
        fechaCreacion: '2023-08-18'
    },
    {
        id: 'inst_008',
        nombre: 'Veterinaria VetPlus',
        tipo: 'Veterinaria',
        ubicacion: 'Montevideo',
        descripcion: 'Servicios médicos y adopciones responsables.',
        fechaCreacion: '2023-09-09'
    },
    {
        id: 'inst_009',
        nombre: 'Centro Animal SOS',
        tipo: 'Centro de Rescate',
        ubicacion: 'Canelones',
        descripcion: 'Especialistas en rescates complejos.',
        fechaCreacion: '2023-10-22'
    },
    {
        id: 'inst_010',
        nombre: 'Fundación Huellitas',
        tipo: 'Fundación',
        ubicacion: 'Colonia',
        descripcion: 'Realizan adopciones y campañas educativas.',
        fechaCreacion: '2023-11-10'
    },
    {
        id: 'inst_011',
        nombre: 'Refugio San Francisco',
        tipo: 'Refugio',
        ubicacion: 'Paysandú',
        descripcion: 'Hogar transitorio para animales rescatados.',
        fechaCreacion: '2023-12-01'
    },
    {
        id: 'inst_012',
        nombre: 'Veterinaria PetHealth',
        tipo: 'Veterinaria',
        ubicacion: 'Rivera',
        descripcion: 'Castraciones y atención primaria.',
        fechaCreacion: '2024-01-08'
    },
    {
        id: 'inst_013',
        nombre: 'Protectora Callejeros',
        tipo: 'Protectora',
        ubicacion: 'Artigas',
        descripcion: 'Protección de animales de la calle.',
        fechaCreacion: '2024-02-15'
    },
    {
        id: 'inst_014',
        nombre: 'Fundación Bigotes',
        tipo: 'Fundación',
        ubicacion: 'Flores',
        descripcion: 'Campañas de cuidado y adopción felina.',
        fechaCreacion: '2024-03-01'
    }
];


// =========================
//  MANEJO DE LOCALSTORAGE
// =========================
function getInstitutions() {
    const data = localStorage.getItem('institutions');
    return data ? JSON.parse(data) : [];
}

function saveInstitution(inst) {
    const current = getInstitutions();
    current.push(inst);
    localStorage.setItem('institutions', JSON.stringify(current));
}


// =========================
//     SESIÓN TEMPORAL
// =========================
function getCurrentSession() {
    return null; // No hay login todavía
}


// =========================
//     INICIALIZACIÓN
// =========================
function initializeInstitutions() {
    let institutions = getInstitutions();

    if (institutions.length === 0) {
        defaultInstitutions.forEach(saveInstitution);
        institutions = getInstitutions();
    }

    return institutions;
}


// =========================
//       ORDENAR LISTA
// =========================
function sortInstitutions(institutions) {
    return [...institutions].sort((a, b) => a.nombre.localeCompare(b.nombre));
}


// =========================
//     RENDER DE TARJETAS
// =========================
function renderInstitutions() {
    const container = document.getElementById('institutionsList');
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    const session = getCurrentSession();

    container.innerHTML = '';

    const institutionsToShow = filteredInstitutions.slice(0, displayedCount);

    institutionsToShow.forEach(inst => {
        const isAdmin = session && session.institutionId === inst.id;

        const row = document.createElement('div');
        row.className = 'institution-row';

        row.innerHTML = `
            <div class="institution-name" style="font-size: 1.2rem; font-weight: 600; color:#333;">
                ${inst.nombre}
                ${isAdmin ? '<i class="bi bi-star-fill ms-2" style="color: var(--amarillo);"></i>' : ''}
            </div>

            <div class="institution-type" style="color: var(--verde-principal); font-size:.95rem; margin-top:4px;">
                ${inst.tipo}
            </div>

            <div class="institution-description" style="color:#555; margin-top:8px;">
                ${inst.descripcion}
            </div>

            <div style="margin-top:12px;">
                <a href="institucion.html?id=${inst.id}" class="btn-ver-mas"
                    style="background: var(--verde-principal); padding:8px 14px;
                           border-radius:8px; color:white; text-decoration:none;">
                    ver más
                </a>
            </div>
        `;

        container.appendChild(row);
    });

    // BOTÓN "VER MÁS" NUEVO (FUNCIONA BIEN)
    loadMoreBtn.style.display =
        filteredInstitutions.length > displayedCount ? 'inline-block' : 'none';

    // NO HAY RESULTADOS
    if (institutionsToShow.length === 0) {
        container.innerHTML = `
            <div class="institution-row" style="grid-column: 1/-1; text-align: center; padding: 40px;">
                <div style="color: #333;">
                    <i class="bi bi-search" style="font-size: 3rem; display: block; margin-bottom: 15px;"></i>
                    No se encontraron instituciones
                </div>
            </div>
        `;
    }
}


// =========================
//       LOAD MORE
// =========================
function loadMore() {
    displayedCount += 2;
    renderInstitutions();
}


// =========================
//        DOM READY
// =========================
document.addEventListener('DOMContentLoaded', function () {
    allInstitutions = initializeInstitutions();
    filteredInstitutions = sortInstitutions(allInstitutions);
    renderInstitutions();

    const btn = document.getElementById('loadMoreBtn');
    if (btn) btn.addEventListener('click', loadMore);
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