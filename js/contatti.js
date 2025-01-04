document.addEventListener('DOMContentLoaded', function() {
    // Gestione form di contatto
    const contactForm = document.querySelector('#contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData.entries());

            try {
                // Costruisci l'oggetto email
                const subject = encodeURIComponent(`Nuovo messaggio da ${data.nome} ${data.cognome}: ${data.oggetto}`);
                const body = encodeURIComponent(
                    `Nome: ${data.nome} ${data.cognome}\n` +
                    `Email: ${data.email}\n` +
                    `Telefono: ${data.telefono || 'Non specificato'}\n` +
                    `Messaggio:\n${data.messaggio}`
                );

                // Costruisci il link mailto
                const mailtoLink = `mailto:selezionenazionalepiloti@gmail.com?subject=${subject}&body=${body}`;
                
                // Trova il link nascosto e imposta l'href
                const link = document.getElementById('mailtoLink');
                link.href = mailtoLink;
                
                // Simula il click sul link
                link.click();

                showMessage('Email client aperto! Controlla la tua applicazione email.', 'success');
                contactForm.reset();
            } catch (error) {
                showMessage('Errore nell\'apertura del client email. Riprova.', 'error');
                console.error('Errore:', error);
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
        // Rimuovi eventuali messaggi esistenti
        const existingAlerts = document.querySelectorAll('.alert');
        existingAlerts.forEach(alert => alert.remove());

        // Crea il nuovo messaggio
        const alert = document.createElement('div');
        alert.className = `alert alert-${type}`;
        alert.textContent = message;
        
        // Inserisci il messaggio all'inizio del form
        const form = document.getElementById('contact-form');
        if (form) {
            form.insertBefore(alert, form.firstChild);
            
            // Rimuovi il messaggio dopo 5 secondi
            setTimeout(() => {
                if (alert.parentNode) {
                    alert.remove();
                }
            }, 5000);
        }
    }
}); 