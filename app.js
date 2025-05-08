// ===== ЛАЙК =====
let like = document.querySelector('.like');
let likesText = document.querySelector('.likes');
let liked = false;

like.addEventListener('click', () => {
    let currentLikes = parseInt(likesText.innerText.replace(/[^0-9]/g, ''));

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

    likesText.innerText = currentLikes.toLocaleString() + ' likes';
});


// ===== КОММЕНТАРИИ =====
const commentInput = document.querySelector('.addComments .text');
const submitBtn = document.querySelector('.addComments .submitBtn');
const commentList = document.querySelector('.commentList');
const commentsHeader = document.querySelector('.comments');
const currentUser = 'Fayzullayeva Omina'; // Заменить на динамическое имя при необходимости

// Показывать кнопку только если есть ввод
commentInput.addEventListener('input', () => {
    if (commentInput.value.trim() !== '') {
        submitBtn.style.display = 'inline-block';
    } else {
        submitBtn.style.display = 'none';
    }
});

// Получить текущее количество комментариев
function getCommentCount() {
    const match = commentsHeader.innerText.match(/\d+/);
    return match ? parseInt(match[0], 10) : 0;
}

// Обработка добавления комментария
submitBtn.addEventListener('click', () => {
    const text = commentInput.value.trim();
    if (!text) return;

    // Создаём новый элемент
    const commentItem = document.createElement('li');
    commentItem.innerHTML = `<b>${currentUser}</b> ${text}`;
    commentList.prepend(commentItem);

    // Очистка поля ввода
    commentInput.value = '';
    submitBtn.style.display = 'none';

    // Обновляем счётчик комментариев
    const currentCount = getCommentCount();
    const newCount = currentCount + 1;
    commentsHeader.innerText = `View all ${newCount.toLocaleString()} comments`;
});

// Функция для случайного генератора рейтинга от 0 до 5
function generateRandomRating() {
    return Math.floor(Math.random() * 6); // Возвращает число от 0 до 5
}

// Применим рейтинг к звездами
function setRating(rating) {
    const stars = document.querySelectorAll('.rating .star');
    const ratingText = document.querySelector('.rating-text');
    
    // Очищаем все звезды
    stars.forEach((star, index) => {
        if (index < rating) {
            star.style.color = 'darkgoldenrod'; // Цвет для активных звезд
        } else {
            star.style.color = 'gold'; // Цвет для неактивных
        }
    });

    // Обновляем текст рейтинга
    ratingText.textContent = `${rating}/5`;
}

// Генерируем случайный рейтинг и устанавливаем его
const randomRating = generateRandomRating();
setRating(randomRating);