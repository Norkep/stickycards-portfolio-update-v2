const cards = document.querySelectorAll('.card');

const numbers = document.querySelectorAll('.number')

cards.forEach((card, index) => {

    card.style.transform = "translate(0, " + index * 16 + "px)"
})