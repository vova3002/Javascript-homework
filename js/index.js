// const categories = document.querySelectorAll("ul")
// const item = document.querySelectorAll("#animals.li")
// console.log(`У списку ${categories.length} категорії.`)

// const categoriesTitle = ['Тварини', 'Продукти', 'Технологія']
// categories.forEach((category, index) => {
//   console.log(`Категорія: ${categoriesTitle[index]}`)
//   console.log(`Кількість елементів: ${category.getElementsByTagName('li').length}`)
// })

// const creatureTitle = document.createElement("h2")
// const productTitle = document.createElement("h2")
// const technicTitle = document.createElement("h2")

// for(const i = 0; i < item.length; i += 1) {
//   const a = item + i
//   console.log(a)
// }
// 1 ^
// 2 v

// const products = document.querySelector("ul")

// const ingredients = [
//   'Картопля',
//   'Гриби',
//   'Часник',
//   'Помідори',
//   'Зелень',
//   'Приправи',
//  ];

// const product1 = document.createElement("li");
// product1.textContent = `${ingredients[0]}`
// products.append(product1)

// const product2 = document.createElement("li");
// product2.textContent = `${ingredients[1]}`
// products.append(product2)

// const product3 = document.createElement("li");
// product3.textContent = `${ingredients[2]}`
// products.append(product3)

// const product4 = document.createElement("li");
// product4.textContent = `${ingredients[3]}`
// products.append(product4)

// const product5 = document.createElement("li");
// product5.textContent = `${ingredients[4]}`
// products.append(product5)

// const product6 = document.createElement("li");
// product6.textContent = `${ingredients[5]}`
// products.append(product6)

// 2 ^
// 3 v

// const gallery = document.querySelector("#gallery")

// const images = [
//   {
//    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//    alt: 'White and Black Long Fur Cat',
//   },
//   {
//    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
//   },
//   {
//    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//    alt: 'Group of Horses Running',
//   }
//  ];

//  images.forEach(({ url, alt }) => {
//   const img = document.createElement("img")
//   img.src = url
//   img.alt = alt
//   const item = document.createElement('li')
//   item.classList.add('image_item')
//   item.appendChild(img)
//   gallery.appendChild(item)
//  })

// 4 v

// Лічильник складається зі спана і кнопок, які повинні збільшувати і зменшувати значення лічильника на 1.
// Створи змінну counterValue в якій буде зберігається поточне значення лічильника.
// Створи функції increment і decrement для збільшення і зменшення значення лічильника.
// Додай слухачі кліків на кнопки, виклики функцій та оновлення інтерфейсу

// let counterValue = 0
// const increment = document.querySelector("#increment")
// const decrement = document.querySelector("#decrement")
// const counter = document.getElementById('value')


// increment.addEventListener("click", (e) => {
//   counterValue += 1
//   counter.textContent = counterValue
// })

// decrement.addEventListener("click", (e) => {
//   counterValue -= 1
//   counter.textContent = counterValue
// })
