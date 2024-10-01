window.onload = function() {
    loadInitialImages();
    const searchInput = document.getElementById('searchInput');
    searchInput.focus();
    searchInput.addEventListener('input', function() {
        const clearButton = document.getElementById('clearButton');
        clearButton.style.display = searchInput.value ? 'inline' : 'none';
    });

    document.getElementById('clearButton').addEventListener('click', function() {
        searchInput.value = '';
        searchInput.focus();
        this.style.display = 'none';
    });
};

function loadInitialImages() {
    const initialApiUrl = 'https://api.unsplash.com/photos?orientation=landscape&per_page=6&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo'; // Изменение: Добавлен запрос с ограничением по ориентации и количеству изображений

    fetch(initialApiUrl).then(response => response.json()).then(data => {
        const gallery = document.querySelector('.gallery');
        gallery.innerHTML = '';
        data.forEach(image => {
            const el = document.createElement('img');
            el.src = image.urls.small;
            el.alt = image.alt_description || 'Unsplash image';
            gallery.appendChild(el);
        });
    }).catch(error => console.error('Error:', error));
}

document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault(); // чтобы страница не перезагружалась

    const query = document.getElementById('searchInput').value;
    const orientation = document.querySelector('input[name="orientation"]:checked').value;
    const apiUrl = `https://api.unsplash.com/search/photos?query=${query}&orientation=${orientation}&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo`;

    fetch(apiUrl).then(response => response.json()).then(data => {
        const images = data.results;
        const gallery = document.querySelector('.gallery');
        gallery.innerHTML = ''; // Очищаем галерею
        images.forEach(image => {
            const el = document.createElement('img');
            el.src = image.urls.small;
            el.alt = image.alt_description || 'Unsplash image';
            gallery.appendChild(el);
        });
    })
    .catch(error => console.error('Error:', error));
});