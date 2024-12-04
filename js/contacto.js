//Documento de js controla los botones

document.getElementById('contacto').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');
});

document.getElementById('contacto').addEventListener('reset', function() {
    alert('El formulario ha sido limpiado.');
});
