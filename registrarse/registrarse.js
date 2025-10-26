const mostrarDatos = document.getElementById('mostrarDatos');
const direccion = document.getElementById('direccion');
const telefono = document.getElementById('telefono');
const passwordInput = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const form = document.getElementById('form-registrarse');

let incluirDatos = mostrarDatos.checked;

mostrarDatos.addEventListener('change', () => {
    incluirDatos = mostrarDatos.checked;
});

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const password = passwordInput.value;
    const confirmar = confirmPassword.value;

    // Validación de contraseñas
    if (password !== confirmar) {
        alert("Las contraseñas no coinciden");
        return; // Detiene el envío si no coinciden
    }

    const datosFormulario = {
        nombre: document.getElementById('username').value,
        email: document.getElementById('email').value,
        password: password, // solo la contraseña principal
        mostrarDatos: incluirDatos,
        direccion: direccion.value,
        telefono: telefono.value
    };

    console.log("Datos enviados al backend:", datosFormulario);

    fetch('https://petsoulbackend.ngrok.app/api/auth/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datosFormulario)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Error al crear usuario');
        }
        return response.json();
    })
    .then(data => {
        alert('Usuario creado exitosamente');
        form.reset();
        window.location.href = '../index.html';
    })
    .catch(error => {
        alert('Hubo un error: ' + error.message);
    });
});
