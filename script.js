document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.getElementById('image-gallery');
    const cards = Array.from(document.querySelectorAll('.image-card'));

    const imageCounter = document.getElementById('image-counter');
    if (imageCounter) {
        imageCounter.textContent = String(cards.length);
    }

    const totalLikesEl = document.getElementById('total-likes');
    const likeButtons = document.querySelectorAll('.like-btn');
    let totalLikes = 0;

    likeButtons.forEach((btn) => {
        btn.addEventListener('click', () => {
            const countEl = btn.querySelector('.like-count');
            if (!countEl) {
                return;
            }

            let count = Number(countEl.textContent);

            if (btn.classList.contains('liked')) {
                count -= 1;
                totalLikes -= 1;
                btn.classList.remove('liked');
            } else {
                count += 1;
                totalLikes += 1;
                btn.classList.add('liked');
            }

            countEl.textContent = String(count);

            if (totalLikesEl) {
                totalLikesEl.textContent = String(totalLikes);
            }
        });
    });

    const filterButtons = document.querySelectorAll('.filter-btn');

    filterButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const filter = button.dataset.filter;

            filterButtons.forEach((item) => item.classList.remove('active'));
            button.classList.add('active');

            cards.forEach((card) => {
                if (filter === 'all' || card.dataset.category === filter) {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });

    const gridBtn = document.getElementById('grid-view');
    const listBtn = document.getElementById('list-view');

    if (gallery && gridBtn && listBtn) {
        gridBtn.addEventListener('click', () => {
            gallery.classList.remove('list-view');
            gridBtn.classList.add('active');
            listBtn.classList.remove('active');
        });

        listBtn.addEventListener('click', () => {
            gallery.classList.add('list-view');
            listBtn.classList.add('active');
            gridBtn.classList.remove('active');
        });
    }
});
