const form = document.querySelector('#contact-form');
const status = document.querySelector('#respuesta');
const btn = document.querySelector('#submit-btn');

form.addEventListener('submit', async function (e) {
    e.preventDefault();

    btn.disabled = true;
    status.innerHTML = "Enviando...";

    const response = await fetch('https://formspree.io/f/mbdwbpnr', {
        method: 'POST',
        body: new FormData(form),
        headers: {
            Accept: 'application/json'
        }
    });

    if (response.ok) {
        form.reset();
        status.style.color = "green";
        status.innerHTML = "¡Gracias! Tu mensaje ha sido enviado con éxito.";
    } else {
        status.style.color = "red";
        status.innerHTML = "Hubo un error al enviar el mensaje. Inténtalo de nuevo.";
    }

    btn.disabled = false;
});