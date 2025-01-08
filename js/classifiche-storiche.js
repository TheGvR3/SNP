// Importa direttamente i dati
const classificheStoriche = {
    "2023": {
        "sn1": [
            { "pos": 1, "pilota": "Alessandro Rossi", "punti": 245 },
            { "pos": 2, "pilota": "Marco Bianchi", "punti": 230 },
            { "pos": 3, "pilota": "Giuseppe Verdi", "punti": 215 }
        ],
        "sn1-light": [
            { "pos": 1, "pilota": "Luca Ferrari", "punti": 210 },
            { "pos": 2, "pilota": "Andrea Romano", "punti": 195 },
            { "pos": 3, "pilota": "Sofia Marino", "punti": 180 }
        ],
        "sn2": [
            { "pos": 1, "pilota": "Francesco Costa", "punti": 225 },
            { "pos": 2, "pilota": "Lorenzo Bruno", "punti": 210 },
            { "pos": 3, "pilota": "Elena Ricci", "punti": 195 }
        ],
        "sn2-light": [
            { "pos": 1, "pilota": "Matteo Conti", "punti": 190 },
            { "pos": 2, "pilota": "Sara Galli", "punti": 175 },
            { "pos": 3, "pilota": "Paolo Mancini", "punti": 160 }
        ],
        "superpole": [
            { "pos": 1, "pilota": "Alessandro Rossi", "punti": 100 },
            { "pos": 2, "pilota": "Luca Ferrari", "punti": 90 },
            { "pos": 3, "pilota": "Francesco Costa", "punti": 80 }
        ],
        "endurance-sn1": [
            { "pos": 1, "pilota": "Team Rossi Racing", "punti": 220 },
            { "pos": 2, "pilota": "Team Veloce", "punti": 205 },
            { "pos": 3, "pilota": "Team Campioni", "punti": 190 }
        ],
        "endurance-sn1-light": [
            { "pos": 1, "pilota": "Team Giovani", "punti": 200 },
            { "pos": 2, "pilota": "Team Sfida", "punti": 185 },
            { "pos": 3, "pilota": "Team Futuro", "punti": 170 }
        ],
        "endurance-sn2": [
            { "pos": 1, "pilota": "Team Esordienti", "punti": 180 },
            { "pos": 2, "pilota": "Team Promesse", "punti": 165 },
            { "pos": 3, "pilota": "Team Talenti", "punti": 150 }
        ],
        "talent": [
            { "pos": 1, "pilota": "Michele Rizzo", "punti": 150 },
            { "pos": 2, "pilota": "Giulia Moretti", "punti": 140 },
            { "pos": 3, "pilota": "Davide Leone", "punti": 130 }
        ]
    },
    "2022": {
        "sn1": [
            { "pos": 1, "pilota": "Marco Bianchi", "punti": 235 },
            { "pos": 2, "pilota": "Alessandro Rossi", "punti": 220 },
            { "pos": 3, "pilota": "Lorenzo Bruno", "punti": 205 }
        ],
        "sn1-light": [
            { "pos": 1, "pilota": "Andrea Romano", "punti": 200 },
            { "pos": 2, "pilota": "Sofia Marino", "punti": 185 },
            { "pos": 3, "pilota": "Luca Ferrari", "punti": 170 }
        ],
        "sn2": [
            { "pos": 1, "pilota": "Elena Ricci", "punti": 215 },
            { "pos": 2, "pilota": "Francesco Costa", "punti": 200 },
            { "pos": 3, "pilota": "Giuseppe Verdi", "punti": 185 }
        ],
        "sn2-light": [
            { "pos": 1, "pilota": "Sara Galli", "punti": 180 },
            { "pos": 2, "pilota": "Matteo Conti", "punti": 165 },
            { "pos": 3, "pilota": "Paolo Mancini", "punti": 150 }
        ],
        "superpole": [
            { "pos": 1, "pilota": "Marco Bianchi", "punti": 100 },
            { "pos": 2, "pilota": "Elena Ricci", "punti": 90 },
            { "pos": 3, "pilota": "Andrea Romano", "punti": 80 }
        ],
        "endurance-sn1": [
            { "pos": 1, "pilota": "Team Veloce", "punti": 210 },
            { "pos": 2, "pilota": "Team Rossi Racing", "punti": 195 },
            { "pos": 3, "pilota": "Team Campioni", "punti": 180 }
        ],
        "endurance-sn1-light": [
            { "pos": 1, "pilota": "Team Sfida", "punti": 190 },
            { "pos": 2, "pilota": "Team Giovani", "punti": 175 },
            { "pos": 3, "pilota": "Team Futuro", "punti": 160 }
        ],
        "endurance-sn2": [
            { "pos": 1, "pilota": "Team Promesse", "punti": 170 },
            { "pos": 2, "pilota": "Team Esordienti", "punti": 155 },
            { "pos": 3, "pilota": "Team Talenti", "punti": 140 }
        ],
        "talent": [
            { "pos": 1, "pilota": "Giulia Moretti", "punti": 145 },
            { "pos": 2, "pilota": "Davide Leone", "punti": 135 },
            { "pos": 3, "pilota": "Michele Rizzo", "punti": 125 }
        ]
    },
    "2021": {
        "sn1": [
            { "pos": 1, "pilota": "Lorenzo Bruno", "punti": 240 },
            { "pos": 2, "pilota": "Marco Bianchi", "punti": 225 },
            { "pos": 3, "pilota": "Alessandro Rossi", "punti": 210 }
        ],
        "sn1-light": [
            { "pos": 1, "pilota": "Sofia Marino", "punti": 205 },
            { "pos": 2, "pilota": "Luca Ferrari", "punti": 190 },
            { "pos": 3, "pilota": "Andrea Romano", "punti": 175 }
        ],
        "sn2": [
            { "pos": 1, "pilota": "Giuseppe Verdi", "punti": 220 },
            { "pos": 2, "pilota": "Elena Ricci", "punti": 205 },
            { "pos": 3, "pilota": "Francesco Costa", "punti": 190 }
        ],
        "sn2-light": [
            { "pos": 1, "pilota": "Paolo Mancini", "punti": 185 },
            { "pos": 2, "pilota": "Sara Galli", "punti": 170 },
            { "pos": 3, "pilota": "Matteo Conti", "punti": 155 }
        ],
        "superpole": [
            { "pos": 1, "pilota": "Lorenzo Bruno", "punti": 100 },
            { "pos": 2, "pilota": "Sofia Marino", "punti": 90 },
            { "pos": 3, "pilota": "Giuseppe Verdi", "punti": 80 }
        ],
        "endurance-sn1": [
            { "pos": 1, "pilota": "Team Campioni", "punti": 215 },
            { "pos": 2, "pilota": "Team Veloce", "punti": 200 },
            { "pos": 3, "pilota": "Team Rossi Racing", "punti": 185 }
        ],
        "endurance-sn1-light": [
            { "pos": 1, "pilota": "Team Futuro", "punti": 195 },
            { "pos": 2, "pilota": "Team Sfida", "punti": 180 },
            { "pos": 3, "pilota": "Team Giovani", "punti": 165 }
        ],
        "endurance-sn2": [
            { "pos": 1, "pilota": "Team Talenti", "punti": 175 },
            { "pos": 2, "pilota": "Team Promesse", "punti": 160 },
            { "pos": 3, "pilota": "Team Esordienti", "punti": 145 }
        ],
        "talent": [
            { "pos": 1, "pilota": "Davide Leone", "punti": 140 },
            { "pos": 2, "pilota": "Michele Rizzo", "punti": 130 },
            { "pos": 3, "pilota": "Giulia Moretti", "punti": 120 }
        ]
    },
    "2020": {
        "sn1": [
            { "pos": 1, "pilota": "Marco Bianchi", "punti": 230 },
            { "pos": 2, "pilota": "Lorenzo Bruno", "punti": 215 },
            { "pos": 3, "pilota": "Alessandro Rossi", "punti": 200 }
        ],
        "sn1-light": [
            { "pos": 1, "pilota": "Luca Ferrari", "punti": 195 },
            { "pos": 2, "pilota": "Sofia Marino", "punti": 180 },
            { "pos": 3, "pilota": "Andrea Romano", "punti": 165 }
        ],
        "sn2": [
            { "pos": 1, "pilota": "Elena Ricci", "punti": 210 },
            { "pos": 2, "pilota": "Giuseppe Verdi", "punti": 195 },
            { "pos": 3, "pilota": "Francesco Costa", "punti": 180 }
        ],
        "sn2-light": [
            { "pos": 1, "pilota": "Sara Galli", "punti": 175 },
            { "pos": 2, "pilota": "Paolo Mancini", "punti": 160 },
            { "pos": 3, "pilota": "Matteo Conti", "punti": 145 }
        ],
        "superpole": [
            { "pos": 1, "pilota": "Marco Bianchi", "punti": 100 },
            { "pos": 2, "pilota": "Luca Ferrari", "punti": 90 },
            { "pos": 3, "pilota": "Elena Ricci", "punti": 80 }
        ],
        "endurance-sn1": [
            { "pos": 1, "pilota": "Team Veloce", "punti": 205 },
            { "pos": 2, "pilota": "Team Campioni", "punti": 190 },
            { "pos": 3, "pilota": "Team Rossi Racing", "punti": 175 }
        ],
        "endurance-sn1-light": [
            { "pos": 1, "pilota": "Team Sfida", "punti": 185 },
            { "pos": 2, "pilota": "Team Futuro", "punti": 170 },
            { "pos": 3, "pilota": "Team Giovani", "punti": 155 }
        ],
        "endurance-sn2": [
            { "pos": 1, "pilota": "Team Promesse", "punti": 165 },
            { "pos": 2, "pilota": "Team Talenti", "punti": 150 },
            { "pos": 3, "pilota": "Team Esordienti", "punti": 135 }
        ],
        "talent": [
            { "pos": 1, "pilota": "Michele Rizzo", "punti": 135 },
            { "pos": 2, "pilota": "Giulia Moretti", "punti": 125 },
            { "pos": 3, "pilota": "Davide Leone", "punti": 115 }
        ]
    }
};

document.addEventListener('DOMContentLoaded', function() {
    // Rimuovi la parte del fetch e usa direttamente classificheStoriche
    const yearSelector = document.getElementById('anno');
    const classificheTabs = document.querySelector('.classifiche-tabs');
    const classificheContent = document.querySelector('.classifiche-content');
    
    // Inizializza i tab delle categorie
    const categorie = [
        { id: 'sn1', nome: 'SN1' },
        { id: 'sn1-light', nome: 'SN1 Light' },
        { id: 'sn2', nome: 'SN2' },
        { id: 'sn2-light', nome: 'SN2 Light' },
        { id: 'superpole', nome: 'Superpole' },
        { id: 'endurance-sn1', nome: 'Endurance SN1' },
        { id: 'endurance-sn1-light', nome: 'Endurance SN1 Light' },
        { id: 'endurance-sn2', nome: 'Endurance SN2' },
        { id: 'talent', nome: 'Talent' }
    ];

    // Crea i tab delle categorie
    classificheTabs.innerHTML = categorie.map((categoria, index) => `
        <button class="tab-btn ${index === 0 ? 'active' : ''}" data-category="${categoria.id}">
            ${categoria.nome}
        </button>
    `).join('');

    // Funzione per creare la tabella della classifica
    function createClassificaTable(data) {
        if (!data || data.length === 0) {
            return '<div class="error-message">Nessun dato disponibile per questa categoria.</div>';
        }

        return `
            <table class="classifica-table">
                <thead>
                    <tr>
                        <th>Pos.</th>
                        <th>Pilota</th>
                        <th>Punti</th>
                    </tr>
                </thead>
                <tbody>
                    ${data.map(row => `
                        <tr>
                            <td>${row.pos}</td>
                            <td>${row.pilota}</td>
                            <td>${row.punti}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        `;
    }

    // Funzione per aggiornare la classifica visualizzata
    function updateClassifica(anno, categoria) {
        const datiAnno = classificheStoriche[anno];
        if (!datiAnno) {
            classificheContent.innerHTML = '<div class="error-message">Nessun dato disponibile per questo anno.</div>';
            return;
        }

        const datiCategoria = datiAnno[categoria];
        if (!datiCategoria) {
            classificheContent.innerHTML = '<div class="error-message">Nessun dato disponibile per questa categoria.</div>';
            return;
        }

        classificheContent.innerHTML = `
            <div class="classifica-header">
                <h3>${categorie.find(c => c.id === categoria).nome} - ${anno}</h3>
            </div>
            ${createClassificaTable(datiCategoria)}
        `;
    }

    // Event Listeners
    yearSelector.addEventListener('change', (e) => {
        const activeTab = classificheTabs.querySelector('.tab-btn.active');
        updateClassifica(e.target.value, activeTab.dataset.category);
    });

    classificheTabs.addEventListener('click', (e) => {
        if (e.target.classList.contains('tab-btn')) {
            // Aggiorna lo stato attivo dei tab
            classificheTabs.querySelectorAll('.tab-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            e.target.classList.add('active');

            // Aggiorna la classifica
            updateClassifica(yearSelector.value, e.target.dataset.category);
        }
    });

    // Carica la prima classifica all'avvio
    updateClassifica(yearSelector.value, 'sn1');
}); 