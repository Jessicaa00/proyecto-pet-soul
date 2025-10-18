// Simulación de datos (puede ser tu base de datos real)
const mascotas = [
  {
    nombre: "Firulais",
    edad: "Adulto",
    sexo: "Macho",
    vacuna: "Sí",
    estado: "Disponible",
    imagen: "https://placedog.net/400/300"
  },
  {
    nombre: "Michi",
    edad: "Cachorro",
    sexo: "Hembra",
    vacuna: "Sí",
    estado: "Disponible",
    imagen: "https://placekitten.com/400/300"
  },
  {
    nombre: "Luna",
    edad: "Adulto",
    sexo: "Hembra",
    vacuna: "No",
    estado: "Adoptado",
    imagen: "https://placekitten.com/401/300"
  }
];

const container = document.getElementById("pet-container");
const template = document.querySelector(".pet-card-template");

mascotas.forEach(pet => {
  const clone = template.cloneNode(true);
  clone.classList.remove("d-none");  // Mostrar la tarjeta clonada
  clone.querySelector(".card-img-top").src = pet.imagen;
  clone.querySelector(".card-title").textContent = pet.nombre;
  clone.querySelector(".edad").textContent = pet.edad;
  clone.querySelector(".sexo").textContent = pet.sexo;
  clone.querySelector(".vacuna").textContent = pet.vacuna;
  clone.querySelector(".estado").textContent = pet.estado;
  container.appendChild(clone);
});
