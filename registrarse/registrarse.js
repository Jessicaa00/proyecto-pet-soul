const mostrarDatos = document.getElementById('mostrarDatos');
const direccion = document.getElementById('direccion');
const telefono = document.getElementById('telefono');
const form = document.getElementById('form-registrarse');

let incluirDatos = mostrarDatos.checked;

mostrarDatos.addEventListener('change', () => {
    incluirDatos = mostrarDatos.checked;
});

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const datosFormulario = {
        nombre: document.getElementById('username').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
        mostrarDatos: incluirDatos.checked,
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
            // Limpiar los campos del formulario
            form.reset();

            window.location.href = '../index.html'; 
        })
        .catch(error => {
            alert('Hubo un error: ' + error.message);
        });
});
