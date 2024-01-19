// const user = {
//   mood: "happy",
//   hobby: "videoGame",
//   premium: "premium",
//   changer() {
//     this.hobby = "skydiving"
//     this.premium = "false"
//   }
// }

// const keys = Object.keys(user)

// for (const key of keys) {
//   alert(`${key}: ${keys}`)
// };

// console.log(keys)

// 1
// 2
// Напиши функцію countProps(obj), яка рахує кількість властивостей в об'єкті. Функція повертає число — кількість властивостей.

// const countProps = (obj) => {
// const arrayTurner = Object.keys(obj)
// return arrayTurner.length
// }

// const object = {
//   day: "bright",
//   weather: "hot",
//   working: true
// }

// countProps(object)
// console.log(countProps(object))

// console.log(array)
// 2
// 3 v
// Напиши функцію findBestEmployee(employees), яка приймає об'єкт співробітників і повертає ім'я найпродуктивнішого (який виконав більше всіх задач). Співробітники і кількість виконаних завдань містяться як властивості об'єкта в форматі "ім'я":"кількість задач".

// const findBestEmployee = (employees) => {
//   const converter = Object.values(employees)
//   let bestEmployeer = 0
//   converter.forEach((employeer) => {
//     if(employeer > bestEmployeer) {
//       bestEmployeer = employeer
//     }
//     return bestEmployeer
//   })
//   return bestEmployeer
// }

// const workerList = {
//   danya: 5,
//   vova: 2,
//   michael: 7
// }

// findBestEmployee(workerList)
// console.log(findBestEmployee(workerList))

// 3 ^
// 4 v
// Напиши функцію countTotalSalary(employees) приймаючу об'єкт зарплат. Функція рахує загальну суму зарплати працівників і повертає її. Кожне поле об'єкта, переданого в функцію, має вигляд "ім'я":"зарплата".

// const countTotalSalary = (employees) => {
//   const workerArray = Object.values(employees)
//   let collectSalary = 0;
//   for (let i = 0; i < workerArray.length; i += 1) {
//     collectSalary += workerArray[i]
//   }
//   return collectSalary
// }

// const salaryList = {
//   worker1: 10000,
//   worker2: 4000,
//   worker3: 7000
// }

// countTotalSalary(salaryList)
// console.log(countTotalSalary(salaryList))

// // 4 ^
// // 5 v
// // Напиши функцію getAllPropValues(arr, prop), яка отримує масив об'єктів і ім'я властивості. Повертає масив значень певної властивості prop з кожного об'єкта в масиві.

// const getAllPropValues = (arr, prop) => {
//   for (const fruit of arr) {
//     if(fruit.fruitName === prop) {
//       const arrayKeys = Object.keys(fruit)
//       console.log(arrayKeys)
//       return arrayKeys
//     }
//   }
// }

// const fruitsArray = [
//   {
//     fruitName: "Lemon",
//     price: 20,
//   },
//   {
//     fruitName: "Apple",
//     price: 25,
//   },
//   {
//     fruitName: "Watermelon",
//     price: 40
//   }
// ]

// getAllPropValues(fruitsArray, "Apple")

// 5 ^
// 6 v
// Напиши функцію calculateTotalPrice(allProdcuts, productName), яка отримує масив об'єктів та ім'я продукту (значення властивості name). Повертає загальну вартість продукту (ціна * кількість).
// let total = 0;
// const calculateTotalPrice = (allProdcuts, productName) => {
//   for (let i = 0; i < allProdcuts.length; i += 1) {
//     if(allProdcuts[i].productName === productName) {
//      total = allProdcuts[i].price + total
//     }
//   }
//   return total
// }

// const allProdcutsArray = [
//   {
//     productName: "apple", 
//     price: 28
//   },
//   {
//     productName: "bread",
//     price: 34
//   },
//   {
//     productName: "meat",
//     price: 45
//   },
//   {
//     productName: "apple",
//     price: 32
//   }
// ]
// calculateTotalPrice(allProdcutsArray, "apple")
// console.log(calculateTotalPrice(total))

// // 6 ^
// // 7 v

const account = {
  balance: 20000,
  historyOfTransitions: [{ amount: 100 }, { amount: 1200 }, { amount: 900 }, { amount: 400 }],
  calcHistoryAmount: function () {
    return this.historyOfTransitions.reduce((acc, next) => {
      return  acc + next.amount
    }, 0)
  },
  checkBalance: function() {
    return this.balance - this.calcHistoryAmount()
  }
}

const check = account.checkBalance()
console.log('check', check)
// 7 ^