const cards = document.querySelectorAll('.card');
const circles = document.querySelectorAll('.circle');

cards.forEach(card => {
    card.addEventListener('click', () => {
        const circleId = card.getAttribute('data-circle');
        const circle = document.getElementById(circleId);

        if (!card.classList.contains('active')) {
            cards.forEach(c => c.classList.remove('active'));
            circles.forEach(c => c.classList.remove('active'));

            card.classList.add('active');
            circle.classList.add('active');
        }
    });
});

// Изначально показываем только первый круг
const firstCircle = document.getElementById('circle1');
firstCircle.classList.add('active');




//slider
const slider = document.querySelector('[data-slider]');
const slides = document.querySelectorAll('.main__new-works__slider-item');
const identifiers = document.querySelectorAll('.main__new-works__identifier');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active', 'prev'); // Убираем классы active и prev у всех слайдов
        if (i === index) {
            slide.classList.add('active'); // Добавляем класс active для текущего слайда
        } else if (i === (index - 1 + slides.length) % slides.length) {
            slide.classList.add('prev'); // Добавляем класс prev для предыдущего слайда
        }
    });
    
    // Обновляем активный идентификатор
    identifiers.forEach((identifier, i) => {
        identifier.classList.toggle('active', i === index);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

// Инициализация
showSlide(currentSlide);

// Обработчики событий для кнопок
document.querySelector('[data-action="next"]').addEventListener('click', nextSlide);
document.querySelector('[data-action="prev"]').addEventListener('click', prevSlide);

// Обработчики событий для идентификаторов
identifiers.forEach(identifier => {
    identifier.addEventListener('click', () => {
        const index = parseInt(identifier.getAttribute('data-slide')) - 1; // Получаем индекс
        currentSlide = index;
        showSlide(currentSlide);
    });
});

























