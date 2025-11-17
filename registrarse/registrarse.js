/**
 * registrarse.js
 * Maneja el registro de nuevos usuarios usando PetSoulAPI
 */

// Inicializar la API client
const api = new PetSoulAPI('https://petsoulbackend.ngrok.app');

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

// Event listener para el checkbox
if (mostrarDatos) {
    mostrarDatos.addEventListener('change', () => {
        incluirDatos = mostrarDatos.checked;
        
        // Opcional: habilitar/deshabilitar campos según checkbox
        if (direccion) direccion.disabled = !incluirDatos;
        if (telefono) telefono.disabled = !incluirDatos;
    });
}

// Función para validar email
function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Función para mostrar mensajes de error
function mostrarError(mensaje) {
    alert(mensaje);
    // Alternativa: puedes crear un div para mostrar errores
    // const errorDiv = document.getElementById('error-message');
    // if (errorDiv) errorDiv.textContent = mensaje;
}

// Función para deshabilitar/habilitar el botón de envío
function toggleSubmitButton(disabled) {
    if (submitButton) {
        submitButton.disabled = disabled;
        submitButton.textContent = disabled ? 'Registrando...' : 'Registrarse';
    }
}

// Manejador del formulario
if (form) {
    form.addEventListener('submit', async function (e) {
        e.preventDefault();

        const username = document.getElementById('username')?.value;
        const email = document.getElementById('email')?.value;
        const password = passwordInput?.value;
        const confirmar = confirmPassword?.value;

        // Validaciones del lado del cliente
        if (!username || !email || !password) {
            mostrarError('Por favor, completa todos los campos requeridos');
            return;
        }

        if (!validarEmail(email)) {
            mostrarError('Por favor, ingresa un email válido');
            return;
        }

        if (password !== confirmar) {
            mostrarError('Las contraseñas no coinciden');
            return;
        }

        // Preparar datos del usuario
        const datosUsuario = {
            nombre: username,
            email: email,
            password: password,
            mostrarDatos: incluirDatos
        };

        // Solo incluir dirección y teléfono si el checkbox está marcado
        if (incluirDatos) {
            if (direccion?.value) {
                datosUsuario.direccion = direccion.value;
            }
            if (telefono?.value) {
                datosUsuario.telefono = telefono.value;
            }
        }

        console.log('Datos a enviar:', datosUsuario);

        // Deshabilitar botón mientras se procesa
        toggleSubmitButton(true);

        try {
            // Llamar a la API de registro
            const response = await api.register(datosUsuario);
            
            console.log('Respuesta del servidor:', response);
            
            // Mostrar mensaje de éxito
            alert('¡Usuario creado exitosamente! Serás redirigido al inicio de sesión.');
            
            // Limpiar formulario
            form.reset();
            
            // Redirigir al login o index
            window.location.href = '../index.html';
            
        } catch (error) {
            console.error('Error al registrar usuario:', error);
            
            // Manejar diferentes tipos de errores
            let mensajeError = 'Hubo un error al crear el usuario';
            
            if (error.status === 400) {
                mensajeError = error.message || 'Datos inválidos. Verifica la información ingresada';
            } else if (error.status === 409) {
                mensajeError = 'El email ya está registrado';
            } else if (error.status === 0) {
                mensajeError = 'No se pudo conectar con el servidor. Verifica tu conexión';
            } else if (error.message) {
                mensajeError = error.message;
            }
            
            mostrarError(mensajeError);
            
        } finally {
            // Re-habilitar botón
            toggleSubmitButton(false);
        }
    });
}

// Log para debugging
console.log('Script de registro cargado correctamente');