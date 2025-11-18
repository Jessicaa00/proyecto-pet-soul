    // Función para toggle del menú hamburguesa
function toggleMenu() {
    const menu = document.querySelector('.menu');
    const icon = document.querySelector('.menu-toggle i');
    
    menu.classList.toggle('active');
    
    // Cambiar icono de hamburguesa a X
    if (menu.classList.contains('active')) {
        icon.classList.remove('bi-list');
        icon.classList.add('bi-x');
    } else {
        icon.classList.remove('bi-x');
        icon.classList.add('bi-list');
    }
}

// Cerrar menú al hacer clic en un enlace (solo en móvil)
document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            const menu = document.querySelector('.menu');
            const icon = document.querySelector('.menu-toggle i');
            
            menu.classList.remove('active');
            icon.classList.remove('bi-x');
            icon.classList.add('bi-list');
        }
    });
});

// Cerrar menú al cambiar tamaño de ventana
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        const menu = document.querySelector('.menu');
        const icon = document.querySelector('.menu-toggle i');
        
        menu.classList.remove('active');
        icon.classList.remove('bi-x');
        icon.classList.add('bi-list');
    }
});

    // NAVEGACIÓN ENTRE SECCIONES
        const navLinks = document.querySelectorAll('.nav-tabs-admin a');
        const sections = document.querySelectorAll('.section-content');

        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
                
                sections.forEach(section => section.classList.remove('active'));
                
                const targetSection = link.getAttribute('data-section');
                document.getElementById(targetSection).classList.add('active');
            });
        });

        // BOTÓN ELIMINAR
        document.addEventListener('click', (e) => {
            if (e.target.closest('.bi-trash')) {
                if (confirm('¿Estás seguro de eliminar este elemento?')) {
                    const row = e.target.closest('tr');
                    row.remove();
                    alert('Elemento eliminado correctamente');
                }
            }
        });

        // BOTÓN EDITAR
        document.addEventListener('click', (e) => {
            if (e.target.closest('.bi-pencil')) {
                alert('Función de editar (aquí puedes abrir un modal con los datos)');
            }
        });

        // BOTÓN MENSAJE
        document.addEventListener('click', (e) => {
            if (e.target.closest('.btn-mensaje')) {
                alert('Redirigiendo a mensajería para contactar al interesado...');
                // Aquí puedes redirigir a la sección de mensajería
                // window.location.href = '/mensajeria';
            }
        });

        // GUARDAR MASCOTA
        const btnGuardarMascota = document.getElementById('btnGuardarMascota');
        const formMascota = document.getElementById('formMascota');

        if (btnGuardarMascota && formMascota) {
            btnGuardarMascota.addEventListener('click', () => {
                if (formMascota.checkValidity()) {
                    alert('Mascota agregada correctamente');
                    
                    const modal = bootstrap.Modal.getInstance(document.getElementById('addMascotaModal'));
                    modal.hide();
                    
                    formMascota.reset();
                } else {
                    formMascota.reportValidity();
                }
            });
        }

        // GUARDAR PRODUCTO
        const btnGuardarProducto = document.getElementById('btnGuardarProducto');
        const formProducto = document.getElementById('formProducto');

        if (btnGuardarProducto && formProducto) {
            btnGuardarProducto.addEventListener('click', () => {
                if (formProducto.checkValidity()) {
                    alert('Producto/Servicio agregado correctamente');
                    
                    const modal = bootstrap.Modal.getInstance(document.getElementById('addProductoModal'));
                    modal.hide();
                    
                    formProducto.reset();
                } else {
                    formProducto.reportValidity();
                }
            });
        }

        

        console.log('Panel de institución Pet Soul cargado correctamente');

