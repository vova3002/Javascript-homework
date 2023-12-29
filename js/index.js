// const buttonJS = document.querySelector("button")
// buttonJS.addEventListener("click", () => {
//   alert("Hello World!")
// } );

// 1 ^
// 2 v

// const input = document.querySelector("input");
// const text = docuemnt.querySelector(".text1");
// const textEnd = document.querySelector(".text2");
// const button = document.querySelector("button");

// const guessTheNumber = Number(prompt("Вгадайте число від 1 - 100"));

// const guessNum = function(guesser) {
//   let generatedNumbers = Math.random() * (100 - 1) + 1
//   generatedNumbers = Math.round(generatedNumbers)
//   if(guesser === generatedNumbers) {
//     alert("Ви вгадали число!")
//   }
//   else {
//     alert("Ви не вгадали число.")
//   }
// }
// guessNum(guessTheNumber)

// 2 ^
// 3 v
// let counter = 0;

// const buttonCheck = document.querySelector('.button3')
// buttonCheck.addEventListener('click',()=> {
//    counter += 1;
// })
// console.log(counter);

// 3 ^
// 4 v

// const applyCallbackToEachElement = (arr, callback) => {
//   const resultForeach = []
//   arr.forEach(element => resultForeach.push(callback(element)))
//   const resultMap = arr.map(element => callback(element))

//   console.log('resultForeach', resultForeach)
//   console.log('resultMap', resultMap)

//   return arr.foreach(element => callback(element))
// }

// const arr = [1, 2, 3, 4, 5];

// const squareCallback = (elem) => elem * elem

// const result = applyCallbackToEachElement(arr, squareCallback);
// console.log(result)

// 4 ^
// 5 v
// const calculateDiscountPrice = (price, discount, callback) => {
//   const discounter = price - price * (discount / 100)
//   callback(discounter)
// }

// let showDiscountPrice = (discountPrice) => {
//   console.log(`Discounted price: ${discountPrice}`)
// }

// calculateDiscountPrice(100, 10, showDiscountPrice);


// 5 ^