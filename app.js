let like = document.querySelector('.like');
let likesText = document.querySelector('.likes');
let liked = false;

like.addEventListener('click', () => {
    let currentLikes = parseInt(likesText.innerText.replace(/[^0-9]/g, '')); // 5489

    if (!liked) {
        currentLikes += 1;
        like.classList.remove('bx-heart');
        like.classList.add('bxs-heart');
        like.style.color = 'red';
        liked = true;
    } else {
        currentLikes -= 1;
        like.classList.remove('bxs-heart');
        like.classList.add('bx-heart');
        like.style.color = '';
        liked = false;
    }

    // Форматируем число с запятой и обновляем текст
    likesText.innerText = currentLikes.toLocaleString() + ' likes';
});
