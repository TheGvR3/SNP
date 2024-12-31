document.addEventListener('DOMContentLoaded', () => {
    // Inizializzazione del calendario
    const calendarEl = document.getElementById('calendar');
    const calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        locale: 'it',
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,listWeek'
        },
        events: [
            {
                title: 'Gran Premio Nazionale Kart',
                start: '2024-03-15',
                end: '2024-03-16',
                color: '#e9bc00'
            },
            // Aggiungi altri eventi qui
        ],
        eventClick: function(info) {
            // Gestisce il click su un evento
            showEventDetails(info.event);
        }
    });
    calendar.render();

    // Gestione del download del programma
    document.getElementById('downloadProgramma').addEventListener('click', () => {
        // Simula il download di un PDF
        window.open('path/to/programma.pdf');
    });

    // Gestione dei filtri archivio
    const filtriArchivio = document.querySelectorAll('.filtri-archivio select');
    filtriArchivio.forEach(filtro => {
        filtro.addEventListener('change', () => {
            loadArchivedEvents();
        });
    });

    // Caricamento eventi archiviati
    function loadArchivedEvents(page = 1) {
        const anno = document.getElementById('anno').value;
        const categoria = document.getElementById('categoria').value;

        // Simula una chiamata API
        // In produzione, sostituire con una vera chiamata API
        const eventiArchivio = [
            {
                data: '2023-12-10',
                titolo: 'Campionato Regionale Kart',
                location: 'Circuito di Vallelunga',
                categoria: 'kart'
            },
            // Altri eventi...
        ];

        renderArchivedEvents(eventiArchivio);
    }

    // Rendering eventi archiviati
    function renderArchivedEvents(eventi) {
        const container = document.querySelector('.archivio-grid');
        container.innerHTML = eventi.map(evento => `
            <article class="evento-card">
                <div class="evento-data">
                    <span class="giorno">${new Date(evento.data).getDate()}</span>
                    <span class="mese">${new Date(evento.data).toLocaleString('it', { month: 'short' }).toUpperCase()}</span>
                </div>
                <div class="evento-info">
                    <h3>${evento.titolo}</h3>
                    <p class="location"><i class="fas fa-map-marker-alt"></i> ${evento.location}</p>
                    <a href="#" class="btn btn-primary">Dettagli</a>
                </div>
            </article>
        `).join('');
    }

    // Gestione form di registrazione
    const registrazioneForm = document.getElementById('registrazione-form');
    if (registrazioneForm) {
        registrazioneForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const formData = new FormData(registrazioneForm);
            const data = Object.fromEntries(formData.entries());

            try {
                // Simula l'invio dei dati
                console.log('Dati registrazione:', data);
                showMessage('Registrazione completata con successo!', 'success');
                registrazioneForm.reset();
            } catch (error) {
                showMessage('Errore durante la registrazione. Riprova.', 'error');
            }
        });
    }

    // Utility per mostrare messaggi
    function showMessage(message, type) {
        const alert = document.createElement('div');
        alert.className = `alert alert-${type}`;
        alert.textContent = message;
        
        registrazioneForm.insertBefore(alert, registrazioneForm.firstChild);
        setTimeout(() => alert.remove(), 5000);
    }

    // Carica gli eventi iniziali
    loadArchivedEvents();
}); 