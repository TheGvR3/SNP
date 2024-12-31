document.addEventListener('DOMContentLoaded', () => {
    // Gestione delle tab per le classifiche
    const tabButtons = document.querySelectorAll('.tab-btn');
    const classificheContents = document.querySelectorAll('.classifica-content');

    // Funzione per mostrare una specifica categoria
    const showCategory = (category) => {
        // Rimuovi active da tutti i contenuti
        classificheContents.forEach(content => {
            content.classList.remove('active');
        });
        // Aggiungi active solo al contenuto selezionato
        document.getElementById(`${category}-classifica`).classList.add('active');

        // Aggiorna anche i bottoni
        tabButtons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.category === category) {
                btn.classList.add('active');
            }
        });
    };

    // Event listener per i tab buttons
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.dataset.category;
            showCategory(category);
        });
    });

    // Caricamento dati classifiche dal file JSON
    const loadClassifiche = async () => {
        try {
            const response = await fetch('./data/campionati.json');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const classificheData = await response.json();

            // Popola le tabelle delle classifiche
            Object.keys(classificheData).forEach(category => {
                const table = createClassificaTable(classificheData[category]);
                const container = document.getElementById(`${category}-classifica`);
                if (container) {
                    container.innerHTML = '';
                    container.appendChild(table);
                }
            });

            // Mostra la prima categoria (SN1) all'avvio
            showCategory('sn1');

        } catch (error) {
            console.error('Errore nel caricamento delle classifiche:', error);
            document.querySelectorAll('.classifica-content').forEach(content => {
                content.innerHTML = `
                    <div class="error-message">
                        <p>Si è verificato un errore nel caricamento delle classifiche.</p>
                        <p>Dettaglio: ${error.message}</p>
                    </div>
                `;
            });
        }
    };

    // Funzione per creare la tabella della classifica
    const createClassificaTable = (data) => {
        const table = document.createElement('table');
        table.className = 'classifica-table';
        
        // Intestazione
        const thead = document.createElement('thead');
        thead.innerHTML = `
            <tr>
                <th>Pos.</th>
                <th>Pilota</th>
                <th>Punti</th>
            </tr>
        `;
        table.appendChild(thead);

        // Corpo della tabella
        const tbody = document.createElement('tbody');
        data.forEach(row => {
            tbody.innerHTML += `
                <tr>
                    <td>${row.pos}</td>
                    <td>${row.pilota}</td>
                    <td>${row.punti}</td>
                </tr>
            `;
        });
        table.appendChild(tbody);

        return table;
    };

    // Gestione del form di iscrizione
    const form = document.getElementById('iscrizione-form');
    if (form) {
        // Aggiorna il form di iscrizione con le categorie
        const categoriaSelect = form.querySelector('#categoria');
        categoriaSelect.innerHTML = `
            <option value="">Seleziona una categoria</option>
            <option value="sn1">SN1</option>
            <option value="sn1-light">SN1 Light</option>
            <option value="sn2">SN2</option>
            <option value="sn2-light">SN2 Light</option>
            <option value="superpole">Superpole</option>
        `;

        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());

            try {
                console.log('Dati iscrizione:', data);
                showMessage('Iscrizione inviata con successo!', 'success');
                form.reset();
            } catch (error) {
                showMessage('Errore durante l\'iscrizione. Riprova.', 'error');
            }
        });
    }

    // Utility per mostrare messaggi
    function showMessage(message, type) {
        const alert = document.createElement('div');
        alert.className = `alert alert-${type}`;
        alert.textContent = message;
        
        if (form) {
            form.insertBefore(alert, form.firstChild);
            setTimeout(() => alert.remove(), 5000);
        }
    }

    // Carica le classifiche all'avvio
    loadClassifiche();
}); 