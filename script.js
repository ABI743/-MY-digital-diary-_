document.addEventListener('DOMContentLoaded', function() {
    const cover = document.getElementById('cover');
    const pages = document.getElementById('pages');

    cover.addEventListener('click', function() {
        cover.classList.add('opened');
        setTimeout(() => {
            pages.classList.add('opened');
        }, 1000);
    });
});
