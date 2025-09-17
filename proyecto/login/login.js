




/*
document.getElementById('form-login').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Aquí haces la consulta al backend
    fetch('http://localhost:8080/aplicacion/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    })
        .then(res => res.json())
        .then(data => {
            // Maneja la respuesta
            alert(data.message);
        })
        .catch(err => {
            alert('Error en el login');
        });
});
*/


const form = document.getElementById("form-login");
const errorMsg = document.getElementById("errorMsg");

form.addEventListener("submit", function (e) {
    e.preventDefault(); // Evita enviar el form de inmediato

    const usuario = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Ejemplo: validación simple
    if (usuario !== "admin" || password !== "1234") {
        errorMsg.style.display = "block"; // Mostrar mensaje
    } else {
        errorMsg.style.display = "none"; // Ocultar mensaje
        alert("Login exitoso!");
    }
});