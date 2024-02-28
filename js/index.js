const openMenuBtn = document.getElementById('open-modal')
const closeMenuBtn = document.getElementById('close-modal')
const backdropModal = document.querySelector('.js-backdrop')
const body = document.querySelector('body')


openMenuBtn.addEventListener("click", (event) => {
  body.classList.add("show-modal");
})
closeMenuBtn.addEventListener("click", (event) => {
  body.classList.remove("show-modal")
})

backdropModal.addEventListener("click", (event) => {
  body.classList.remove("show-modal")
  console.log(backdropModal)
})
// 1 ^
// 2 v

const redColor = document.getElementById('red')
const whiteColor = document.getElementById('white')
const greenColor = document.getElementById('green')
const formColor = document.getElementById('form')

redColor.addEventListener('focus', (e) => {
formColor.style.backgroundColor = "red"
})
whiteColor.addEventListener('focus', (e) => {
formColor.style.backgroundColor = "white"
})
greenColor.addEventListener('focus', (e) => {
formColor.style.backgroundColor = "green"
})

// 2 ^
// 3 v

const text = document.getElementById('name-output')
const nameInputer = document.getElementById('name-input')

nameInputer.addEventListener('input', (e) => {
  text.textContent = (nameInputer.value)
})

// 4 v
const input = document.getElementById("validation-input")

input.addEventListener('input', (e) => {
  if(input.value.length < input.getAttribute("data-length")) {
    input.classList = ('valid')
    console.log(input)
  } else {
    input.classList = ('invalid')
    console.log(input)
  }
})

// 5 v

const fontSize = document.getElementById("font-size-control");
const textMagic = document.getElementById("text");

fontSize.addEventListener("input", (e) => {
  textMagic.style.fontSize = fontSize.value + "px"
  console.log(textMagic)
})