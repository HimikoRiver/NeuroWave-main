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
