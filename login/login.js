// login.js simplificado
const form = document.getElementById("form-login");
const errorMsg = document.getElementById("errorMsg");

// Manejo del submit del login
form.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!email || !password) {
        alert("Completa todos los campos");
        return;
    }

    // Consulta al backend
    fetch('https://petsoulbackend.ngrok.app/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email, password: password })
    })
    .then(res => res.json())
    .then(data => {
        console.log("Respuesta del backend:", data); 
        alert(data.message || "Sin mensaje del servidor");

        if (data.success) { // login correcto
            localStorage.setItem("email", email);
            window.location.href = "../index.html"; // redirigir al inicio
        } else {
            if (errorMsg) errorMsg.style.display = "block"; // mostrar error en HTML
        }
    })
    .catch(err => {
        alert("Error en el login");
        console.error(err);
    });
});

// Mostrar la inicial en index.html
window.addEventListener("DOMContentLoaded", () => {
    const perfilDiv = document.getElementById("perfil");
    const email = localStorage.getItem("email");

    if (email && perfilDiv) {
        perfilDiv.textContent = email.charAt(0).toUpperCase();
    }
});
