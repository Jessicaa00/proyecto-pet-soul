// Obtener ID de la URL
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

// Traer instituciones
const instituciones = JSON.parse(localStorage.getItem("instituciones")) || [];

// Buscar la institución
const inst = instituciones[id];

// Rellenar datos
document.getElementById("nombre").textContent = inst.nombre;
document.getElementById("tipo").textContent = inst.tipo;
document.getElementById("descripcion").textContent = inst.descripcion;

// Servicios
const serviciosUl = document.getElementById("servicios");
inst.servicios.forEach(serv => {
    serviciosUl.innerHTML += `<li>${serv}</li>`;
});

// Mascotas de la institución (si querés mostrar)
const todasMascotas = JSON.parse(localStorage.getItem("mascotas")) || [];

const contMascotas = document.getElementById("listaMascotas");

const mascotasInst = todasMascotas.filter(m => m.institucion === inst.nombre);

mascotasInst.forEach(m => {
    contMascotas.innerHTML += `
        <div class="card-mascota">
            <img src="${m.imagen}">
            <h5>${m.nombre}</h5>
            <p>${m.descripcion}</p>
        </div>
    `;
});
