document.addEventListener('DOMContentLoaded', function() {
    // Gestione form di contatto
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData.entries());

            try {
                // Qui andrebbe la logica per inviare i dati al server
                console.log('Dati form:', data);
                showMessage('Messaggio inviato con successo!', 'success');
                contactForm.reset();
            } catch (error) {
                showMessage('Errore nell\'invio del messaggio. Riprova.', 'error');
            }
        });

        // Validazione form in tempo reale
        const inputs = contactForm.querySelectorAll('input[required], textarea[required]');
        inputs.forEach(input => {
            input.addEventListener('blur', () => {
                if (!input.value) {
                    input.classList.add('error');
                } else {
                    input.classList.remove('error');
                }
            });
        });
    }

    // Gestione accordion FAQ
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            const isActive = header.classList.contains('active');

            // Chiudi tutti gli accordion
            accordionHeaders.forEach(h => {
                h.classList.remove('active');
                h.nextElementSibling.classList.remove('active');
            });

            // Apri l'accordion cliccato
            if (!isActive) {
                header.classList.add('active');
                content.classList.add('active');
            }
        });
    });

    // Utility per mostrare messaggi
    function showMessage(message, type) {
        const alert = document.createElement('div');
        alert.className = `alert alert-${type}`;
        alert.textContent = message;
        
        if (contactForm) {
            contactForm.insertBefore(alert, contactForm.firstChild);
            setTimeout(() => alert.remove(), 5000);
        }
    }
}); 