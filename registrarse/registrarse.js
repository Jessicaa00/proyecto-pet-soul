// Elementos del DOM
const mostrarDatos = document.getElementById('mostrarDatos');
const direccion = document.getElementById('direccion');
const telefono = document.getElementById('telefono');
const passwordInput = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const form = document.getElementById('form-registrarse');
const submitButton = form?.querySelector('button[type="submit"]');

// Estado del checkbox
let incluirDatos = mostrarDatos?.checked || false;

if (mostrarDatos) {
    mostrarDatos.addEventListener('change', () => {
        incluirDatos = mostrarDatos.checked;
        if (direccion) direccion.disabled = !incluirDatos;
        if (telefono) telefono.disabled = !incluirDatos;
    });
}

// Función para validar email
function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Mostrar mensaje de error
function mostrarError(mensaje) {
    alert(mensaje);
}

// Habilitar/deshabilitar botón
function toggleSubmitButton(disabled) {
    if (submitButton) {
        submitButton.disabled = disabled;
        submitButton.textContent = disabled ? 'Registrando...' : 'Registrarse';
    }
}

// Formulario
if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const username = document.getElementById('username')?.value.trim();
        const email = document.getElementById('email')?.value.trim();
        const password = passwordInput?.value;
        const confirmar = confirmPassword?.value;

        if (!username || !email || !password) {
            mostrarError('Por favor completa todos los campos requeridos');
            return;
        }

        if (!validarEmail(email)) {
            mostrarError('Ingresa un email válido');
            return;
        }

        if (password !== confirmar) {
            mostrarError('Las contraseñas no coinciden');
            return;
        }

        // Leer usuarios existentes
        let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

        // Verificar si el email ya existe
        if (usuarios.find(u => u.email === email)) {
            mostrarError('El email ya está registrado');
            return;
        }

        // Crear nuevo usuario
        const nuevoUsuario = {
            nombre: username,
            email,
            password,
            mostrarDatos: incluirDatos
        };

        if (incluirDatos) {
            if (direccion?.value) nuevoUsuario.direccion = direccion.value;
            if (telefono?.value) nuevoUsuario.telefono = telefono.value;
        }

        usuarios.push(nuevoUsuario);
        localStorage.setItem('usuarios', JSON.stringify(usuarios));

        alert('Usuario creado exitosamente. Ahora puedes iniciar sesión.');
        form.reset();
        window.location.href = '../login/login.html';
    });
}
