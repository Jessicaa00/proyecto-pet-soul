// Inicializar la API client
const api = new PetSoulAPI('https://petsoulbackend.ngrok.app');

// Elementos del DOM
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

form.addEventListener('submit', async function (e) {
    e.preventDefault();

    const password = passwordInput.value;
    const confirmar = confirmPassword.value;

    // Validación de contraseñas
    if (password !== confirmar) {
        alert("Las contraseñas no coinciden");
        return;
    }

    // Preparar datos del usuario
    const datosUsuario = {
        nombre: document.getElementById('username').value,
        email: document.getElementById('email').value,
        password: password,
        mostrarDatos: incluirDatos,
        direccion: direccion.value,
        telefono: telefono.value
    };

    console.log("Datos enviados al backend:", datosUsuario);

    try {
        // Usar el método register de la API
        const response = await api.register(datosUsuario);
        
        console.log("Usuario creado:", response);
        alert('Usuario creado exitosamente');
        
        // Resetear formulario y redirigir
        form.reset();
        window.location.href = '../index.html';
        
    } catch (error) {
        console.error("Error al registrar:", error);
        
        // Mostrar mensaje de error específico
        const mensaje = error.message || 'Hubo un error al crear el usuario';
        alert(mensaje);
    }
});