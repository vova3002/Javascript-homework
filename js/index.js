// Завдання 1 v
let openModal = document.querySelector('.button');

const jsBackdrop = document.querySelector('.backdrop');

openModal.addEventListener('click', toggleModel)
function toggleModel() {
  jsBackdrop.classList.toggle('is-hidden')
}

const closeModal = document.querySelector('.button-close');

closeModal.addEventListener('click', toggleModel);
// Завдання 1 ^
// Завдання 2 v

const colorRed = document.querySelector('.red');

colorRed.addEventListener('click', () => {
  colorRed.body.document.style.backgroundColor = 'red';
})

const colorWhite = document.querySelector('.white');

const colorGreen = document.querySelector('.green');

// Завдання 2 ^