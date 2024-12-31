// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    // Carica la navbar
    fetch('components/navbar.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('header').innerHTML = data;
            setupMobileMenu();
            highlightCurrentPage();
            setupLanguageSelector();
        });

    // Carica il footer
    fetch('components/footer.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('footer').innerHTML = data;
            setupNewsletterForm();
        });

    // Setup menu mobile
    function setupMobileMenu() {
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const navLinks = document.querySelector('.nav-links');
        
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            document.body.classList.toggle('menu-open');
        });

        // Chiudi il menu quando si clicca su un link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                document.body.classList.remove('menu-open');
            });
        });
    }

    // Evidenzia la pagina corrente nel menu
    function highlightCurrentPage() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const menuLinks = document.querySelectorAll('.nav-links a');
        
        menuLinks.forEach(link => {
            if (link.getAttribute('href') === currentPage) {
                link.classList.add('active');
            }
        });
    }

    // Setup language selector
    function setupLanguageSelector() {
        const languageSelector = document.querySelector('.language-selector');
        if (languageSelector) {
            languageSelector.addEventListener('change', (e) => {
                const lang = e.target.value;
                // Implementa qui la logica per il cambio lingua
                console.log('Cambio lingua a:', lang);
            });
        }
    }

    // Setup newsletter form
    function setupNewsletterForm() {
        const newsletterForm = document.querySelector('.newsletter-form');
        if (newsletterForm) {
            newsletterForm.addEventListener('submit', async (e) => {
                e.preventDefault();
                const email = newsletterForm.querySelector('input[type="email"]').value;
                
                try {
                    // Implementa qui la logica per l'iscrizione alla newsletter
                    console.log('Iscrizione newsletter:', email);
                    showMessage('Iscrizione completata con successo!', 'success');
                    newsletterForm.reset();
                } catch (error) {
                    showMessage('Errore durante l\'iscrizione. Riprova.', 'error');
                }
            });
        }
    }

    // Utility per mostrare messaggi
    function showMessage(message, type) {
        const alert = document.createElement('div');
        alert.className = `alert alert-${type}`;
        alert.textContent = message;
        
        document.body.appendChild(alert);
        setTimeout(() => alert.remove(), 5000);
    }
});

// Gestione scroll header
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll) {
        navbar.style.transform = 'translateY(-100%)';
    } else {
        navbar.style.transform = 'translateY(0)';
    }
    lastScroll = currentScroll;
}); 