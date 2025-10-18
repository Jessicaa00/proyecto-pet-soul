// ==== Simulación de datos ====
const mascotas = [
  {
    nombre: "Firulais",
    edad: "Adulto",
    sexo: "Macho",
    especie: "Perro",
    raza: "Labrador",
    estadoSalud: "Buena",
    estadoAdopcion: "Disponible",
    instituto: "Huellas Felices",
    imagen: "https://placedog.net/400/300"
  },
  {
    nombre: "Michi",
    edad: "Cachorro",
    sexo: "Hembra",
    especie: "Gato",
    raza: "Común europeo",
    estadoSalud: "Excelente",
    estadoAdopcion: "Disponible",
    instituto: "Patitas del Sur",
    imagen: "https://placekitten.com/400/300"
  },
  {
    nombre: "Luna",
    edad: "Adulto",
    sexo: "Hembra",
    especie: "Gato",
    raza: "Siamesa",
    estadoSalud: "Buena",
    estadoAdopcion: "Adoptado",
    instituto: "Refugio Esperanza",
    imagen: "https://placekitten.com/401/300"
  }
];

// ==== Renderizado dinámico ====
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("pet-container");
  const template = document.querySelector(".template");

  if (!container || !template) {
    console.error("No se encontró el contenedor o la plantilla");
    return;
  }

  mascotas.forEach(pet => {
    const clone = template.cloneNode(true);
    clone.classList.remove("d-none", "template");

    // Imagen
    clone.querySelector("img").src = pet.imagen;

    // Nombre + estado
    clone.querySelector(".nombre").textContent = pet.nombre;
    clone.querySelector(".estado").textContent = pet.estadoAdopcion;

    // Nombre + estado
    const estadoBadge = clone.querySelector(".estado");
    estadoBadge.textContent = pet.estadoAdopcion;

    // Cambiar color según estado
    if (pet.estadoAdopcion.toLowerCase() === "disponible") {
      estadoBadge.classList.add("bg-success"); // verde
      estadoBadge.classList.remove("bg-secondary");
    } else {
      estadoBadge.classList.add("bg-secondary"); // gris para adoptado
      estadoBadge.classList.remove("bg-success");
    }

    // Datos del hover
    clone.querySelector(".nombre-hover").textContent = pet.nombre;
    clone.querySelector(".edad").textContent = pet.edad;
    clone.querySelector(".sexo").textContent = pet.sexo;
    clone.querySelector(".especie").textContent = pet.especie;
    clone.querySelector(".raza").textContent = pet.raza;
    clone.querySelector(".estado-salud").textContent = pet.estadoSalud;
    clone.querySelector(".estado-adopcion").textContent = pet.estadoAdopcion;
    clone.querySelector(".instituto-responsable").textContent = pet.instituto;

    // Agregar al contenedor
    container.appendChild(clone);
  });
});
