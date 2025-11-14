const form = document.getElementById('form-donar');
const successMsg = document.getElementById('successMsg');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nombre = form.nombre.value;
    const email = form.email.value;
    const monto = form.monto.value;
    const mensaje = form.mensaje.value;
    const metodo = form.metodo.value;

    if (!metodo) {
        alert('Por favor selecciona un método de pago');
        return;
    }

    console.log({ nombre, email, monto, mensaje, metodo });

    // Mostrar mensaje de éxito
    successMsg.textContent = `Gracias por tu donación de ${monto} UYU vía ${metodo === 'paypal' ? 'PayPal' : 'MercadoPago'} 💚`;
    successMsg.style.display = 'block';

    form.reset();
});
