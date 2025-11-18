const formLogin = document.getElementById('form-login');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

if (formLogin) {
    formLogin.addEventListener('submit', function(e) {
        e.preventDefault();

        const email = emailInput.value.trim();
        const password = passwordInput.value;

        let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
        const usuario = usuarios.find(u => u.email === email && u.password === password);

        if (!usuario) {
            alert('Email o contraseña incorrectos');
            return;
        }

        // Guardar usuario logueado
        localStorage.setItem('usuarioLogueado', JSON.stringify(usuario));
        alert(`¡Bienvenido, ${usuario.nombre}!`);
        window.location.href = '../index.html';
    });
}

