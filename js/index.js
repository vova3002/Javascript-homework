// Створити розмітку з формою, що містить список (select) з трьома варіантами вибору: "Кава", "Чай" та "Сік". При виборі кожного варіанту виводити відповідне повідомлення в блок на сторінці.

const drink = prompt("Кава, Чай та Сік")

switch (drink) {
  case "Кава" :
    console.log("Ви вибрали Каву")
  break;
  case "Сік" :
    console.log("Ви вибрали Сік")
  break;
  case "Чай" :
    console.log("Ви вибрали Чай");
  default:
    console.log("Ви вибрали щось інше")
    break;
}
// 1 ^
// 2 v

const day = prompt("Ведіть день тижня")

switch(day) {
  case "Понеділок" :
    console.log(`${day} Це є будний день`)
  break
  case "Вівторок" :
    console.log(`${day} Це є будний день`)
  break
  case "Середа" :
    console.log(`${day} Це є будний день`)
  break
  case "Четверг" :
    console.log(`${day} Це є будний день`)
  break
  case "П'ятниця" :
    console.log(`${day} Це є будний/вихідний день`)
  break
  case "Субота" :
    console.log(`${day} Це є вихідний день`)
  break
  case "Неділя" :
    console.log(`${day} Це є вихідний день`)
  break
  default:
    console.log('Такого дня не існує.')
}

// 2 ^
// 3 v

const numberMonths = prompt('Ведіть номер місяця')

switch(numberMonths) {
  case "1" :
    console.log('зима')
  break
  case "2" :
    console.log('зима')
  break
  case "3" :
    console.log('це весна')
  break
  case "4" :
    console.log('це весна')
  break
  case "5" :
    console.log('це весна')
  break
  case "6" :
    console.log('це літо')
  break
  case "7" :
    console.log('це літо')
  break
  case "8" :
    console.log('це літо')
  break
  case "9" :
    console.log('це осінь')
  break
  case "10" :
    console.log('це осінь')
  break
  case "11" :
    console.log('це осінь')
  break
  case "12" :
    console.log('це зима')
  break
  default:
    console.log('Такого номера місяця немає')
  break
}

// 3 ^
// 4 v

const daysMonths = prompt('Ведіть номер місяця дізнатися яку кількість днів вони мають.')

switch(daysMonths) {
  case "1" :
    console.log('січень має 31 день')
  break
  case "2" :
    console.log('лютий має 28-29 днів')
  break
  case "3" :
    console.log('березень має 31 день')
  break
  case "4" :
    console.log('квітень має 30 днів')
  break
  case "5" :
    console.log('травень має 31 днів')
  break
  case "6" :
    console.log('червень має 30 днів')
  break
  case "7" :
    console.log('липень має 31 день')
  break
  case "8" :
    console.log('серпень має 31 день')
  break
  case "9" :
    console.log('вересень має 30 день')
  break
  case "10" :
    console.log('Жовтень має 31 день')
  break
  case "11" :
    console.log('листопад має 30 днів')
  break
  case "12" :
    console.log('грудень 31 день')
  break
  default:
    console.log('Такого номера місяця немає')
  break
}

// 4 ^
// 5 v

const color = prompt('Ведіть кольор')

switch(color) {
  case "red" :
    console.log('Стоп')
  break
  case "yellow" :
    console.log('Чекати')
  break
  case 'green' :
    console.log('Йти')
}

// 5 ^
// 6 v

const symbol = prompt('Ведіть якийсь знак (Буть те обережні ділити якесь число на нуль)')
const number = Number(prompt('Ведіть якийсь номер (Буть те обережні ділити якесь число на нуль)'))
const number2 = Number(prompt('Ведіть якийсь номер (Буть те обережні ділити якесь число на нуль'))

switch(symbol) {
  case '/' :
    console.log(number / number2)
  break
  case '-' :
    console.log(number - number2)
  break
  case '+' :
    console.log(number + number2)
  break
  case '*' :
    console.log(number * number2)
  break
}

// 6 ^