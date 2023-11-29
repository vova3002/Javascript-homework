// // Напиши функцію logItems(array), яка отримує масив і використовує цикл for, який для кожного елемента масиву буде виводити в консоль повідомлення в форматі [номер елемента] - [значення елемента].
// const logItems = [100, 200, 300, 400, 500];
// for(let i = 0; i < logItems.length; i += 1) {
//   console.log(`${i} ${logItems[i]}`);
// };

// 1 ^
// 2 v
// Напиши скрипт підрахунку вартості гравіювання прикрас. Для цього створи функцію calculateEngravingPrice(message, pricePerWord) приймаючу рядок (в рядку будуть тільки слова і прогалини) і ціну гравіювання одного слова, і повертає ціну гравіювання всіх слів в рядку.
// function calculateEngravingPrice(message, pricePerWord) {
//   const array = message.split(" ")
//   let quantityWords = array.length
//   const totalPrice = quantityWords * pricePerWord
//   console.log(totalPrice)
// };
// calculateEngravingPrice('Hello vova', 100)
// 2 ^
// 3 v

// function findLongestWord(string) {
// const arrayWords = string.split(' ')
// let longestWord = arrayWords[0]
// for(let i = 0; i < arrayWords.length; i += 1) {
//   arrayWords[i].length
//   if(longestWord.length < arrayWords[i].length) {
//     longestWord = arrayWords[i]
//   }
// }
// return longestWord
// }
// console.log(findLongestWord("This is the greatest message ever"))
// console.log(findLongestWord("Vova is learning javascript"))

// 3 ^
// 4 v

// function formatString(string) {
//   const stringLength = string.length
//   if (stringLength < 40) {
//     return string
//   } else {
//     console.log(string.slice(0, 40))
//   }
// }
// formatString('Learning javascript so I can make websites on google');

// 4 ^
// 5 v

// function checkForSpam(message) {
// const messageCheck = message.split(' ')
// if(messageCheck.includes("spam" || "sale")) {
//   alert("There's a forbidden message on your text")
// } else {
//   alert("There's no forbidden message on your text")
// }
// }
// checkForSpam("School is always spamming too much homework")

// 5 ^
// 6 v

function sendNumber() {
  const askArray = []
  let askNumber
  do{
    askNumber = prompt("Введіть число")
    askArray.push(askNumber)
  } while(askNumber !== null)
  return askArray
}
console.log(sendNumber())
// 6 ^
// 7 v

// 7 ^