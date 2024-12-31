document.addEventListener('DOMContentLoaded', function() {
    // Gestione filtri categorie
    const filterButtons = document.querySelectorAll('.filter-btn');
    const newsCards = document.querySelectorAll('.news-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Rimuovi active da tutti i bottoni
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Aggiungi active al bottone cliccato
            button.classList.add('active');

            const category = button.dataset.category;

            newsCards.forEach(card => {
                if (category === 'all' || card.dataset.category === category) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Ricerca news
    const searchInput = document.querySelector('.search-box input');
    const searchButton = document.querySelector('.search-box button');

    function performSearch() {
        const searchTerm = searchInput.value.toLowerCase();

        newsCards.forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            const content = card.querySelector('p').textContent.toLowerCase();

            if (title.includes(searchTerm) || content.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    searchButton.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch();
        }
    });

    // Carica altre news
    const loadMoreBtn = document.querySelector('.load-more');
    let currentPage = 1;

    loadMoreBtn.addEventListener('click', async () => {
        try {
            // Simula il caricamento di altre news
            const response = await fetch(`/api/news?page=${currentPage + 1}`);
            const data = await response.json();

            if (data.news.length > 0) {
                // Aggiungi le nuove news alla griglia
                data.news.forEach(news => {
                    const newsCard = createNewsCard(news);
                    document.querySelector('.articles-grid').appendChild(newsCard);
                });
                currentPage++;
            } else {
                loadMoreBtn.style.display = 'none';
            }
        } catch (error) {
            console.error('Errore nel caricamento delle news:', error);
        }
    });

    function createNewsCard(news) {
        // Crea e restituisce un elemento news-card
        const card = document.createElement('article');
        card.className = 'news-card';
        card.dataset.category = news.category;
        // ... popola il card con i dati della news
        return card;
    }
}); 