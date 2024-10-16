function enviarReclamo(event) {
    event.preventDefault(); // Evita el envío predeterminado del formulario

    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;
    const destinatario = document.getElementById('destinatario').value;

    // Simulación de envío (aquí es donde se manejaría la lógica del backend para enviar el reclamo)
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `
        <p>Gracias, <strong>${nombre}</strong>. Tu reclamo ha sido enviado a <strong>${destinatario}</strong>.</p>
        <p>Nos pondremos en contacto contigo a través de <strong>${email}</strong>.</p>
    `;

    // Reiniciar el formulario después de enviar el reclamo
    document.getElementById('reclamoForm').reset();
}
