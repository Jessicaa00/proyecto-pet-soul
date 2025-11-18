function actualizarHeaderUsuario() {
    // Selecciona el dropdown del usuario
    const usuarioDropdown = document.querySelector('.icons .dropdown:last-child ul.dropdown-menu-end');
    if (!usuarioDropdown) return;

    const usuarioLogueado = JSON.parse(localStorage.getItem('usuarioLogueado'));

    const loginItem = usuarioDropdown.querySelector('a[href="../login/login.html"]');
    const registerItem = usuarioDropdown.querySelector('a[href="../registrarse/registrarse.html"]');

    if (usuarioLogueado) {
        if (loginItem) loginItem.style.display = 'none';
        if (registerItem) registerItem.style.display = 'none';

        // Agregar saludo y cerrar sesión
        if (!usuarioDropdown.querySelector('#saludo-usuario')) {
            const saludo = document.createElement('li');
            saludo.id = 'saludo-usuario';
            saludo.innerHTML = `<span class="dropdown-item">Hola, ${usuarioLogueado.nombre}</span>`;
            usuarioDropdown.prepend(saludo);

            const cerrarSesionItem = document.createElement('li');
            cerrarSesionItem.innerHTML =
                `<a class="dropdown-item" href="#" id="cerrar-sesion">Cerrar sesión</a>`;
            usuarioDropdown.appendChild(cerrarSesionItem);

            document.getElementById('cerrar-sesion').addEventListener('click', () => {
                localStorage.removeItem('usuarioLogueado');
                location.reload();
            });
        }
    } else {
        if (loginItem) loginItem.style.display = 'block';
        if (registerItem) registerItem.style.display = 'block';

        const saludo = usuarioDropdown.querySelector('#saludo-usuario');
        if (saludo) saludo.remove();

        const cerrarSesionItem = usuarioDropdown.querySelector('#cerrar-sesion')?.parentElement;
        if (cerrarSesionItem) cerrarSesionItem.remove();
    }
}



document.addEventListener('DOMContentLoaded', actualizarHeaderUsuario);
