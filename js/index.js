// const gallery = document.querySelector('.gallery')
// document.body.addEventListener("keydown", (e) => {
//   if(e.key === 'ArrowLeft'){
//     gallery.scrollLeft += 5
//   } else if(e.key === 'ArrowRight'){
//     gallery.scrollLeft -= 5
//   }
// })
const boxes = document.getElementById("boxes")
const createBoxesAmount = (amount) => {
for(let i = 0; i < amount; i++){
  boxes.innerHTML += `<div style="width:${30 + i * 10}px; height:${30 + i * 10}px; background-color:rgb(${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}"></div>`
}
}

const destroyBoxes = () => {
boxes.innerHTML = ""
}
const numberInput = document.querySelector(`#controls > input[type="number"]`)