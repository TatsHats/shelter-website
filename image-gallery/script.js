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