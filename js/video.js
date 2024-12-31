document.addEventListener('DOMContentLoaded', function() {
    // Gestione filtri video
    const filterButtons = document.querySelectorAll('.tab-btn');
    const videoCards = document.querySelectorAll('.video-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Rimuovi active da tutti i bottoni
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Aggiungi active al bottone cliccato
            button.classList.add('active');

            const category = button.dataset.category;

            // Filtra i video
            videoCards.forEach(card => {
                if (category === 'all' || card.dataset.category === category) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Gestione caricamento altri video
    const loadMoreBtn = document.querySelector('.load-more');
    let currentPage = 1;

    loadMoreBtn.addEventListener('click', async () => {
        try {
            // Simula il caricamento di nuovi video
            const newVideos = [
                {
                    id: 'Pu3g7kUxdOU',
                    title: 'SN2 2023 - Highlights',
                    date: '25 Giu 2023',
                    category: 'highlights'
                },
                // Aggiungi altri video qui
            ];

            // Aggiungi i nuovi video alla griglia
            newVideos.forEach(video => {
                const videoCard = createVideoCard(video);
                document.querySelector('.video-grid').appendChild(videoCard);
            });

            // Nascondi il bottone se non ci sono più video
            if (currentPage >= 3) { // Esempio: massimo 3 pagine
                loadMoreBtn.style.display = 'none';
            }

            currentPage++;
        } catch (error) {
            console.error('Errore nel caricamento dei video:', error);
        }
    });

    // Funzione per creare una card video
    function createVideoCard(video) {
        const card = document.createElement('div');
        card.className = 'video-card';
        card.dataset.category = video.category;
        
        card.innerHTML = `
            <div class="video-wrapper">
                <iframe 
                    src="https://www.youtube.com/embed/${video.id}" 
                    title="${video.title}"
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            </div>
            <div class="video-info">
                <h3>${video.title}</h3>
                <p class="video-meta">
                    <span><i class="fas fa-calendar"></i> ${video.date}</span>
                    <span><i class="fas fa-tag"></i> ${video.category}</span>
                </p>
            </div>
        `;

        return card;
    }
}); 