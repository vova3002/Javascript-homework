let bankAccount = {
  ownerName: "Vova",
  accountNumber: 782,
  balance: 10000,
  deposit() {
    const askNum = Number(prompt("Введіть кількість грошей ви хочете поповнути банківський аккайунт."))
    this.balance += askNum
    return this.balance
  },
  withdraw(){
    const askTakeNum = Number(prompt("Введіть кількість грошей ви хочете забрати з банківського аккайунту."))
    this.balance -= askTakeNum
    return this.balance
  }
}

console.log(bankAccount.deposit())
console.log(bankAccount.withdraw())

// 1 ^
// 2 v
const currentTemperature = prompt("Введіть вашу температуру.")
let weather = {
  temperature: currentTemperature,
  determinWeather() {
    if(this.temperature < 0) {
      return "true"
    } else {
      return "false"
    }
  },
  humidity: 50,
  windSpeed: 12,
}

console.log(weather.determinWeather())

// 2 ^
// 3 v

let user = {
  name: "vova",
  email: "real.volodymir@gmail.com",
  password: 12945,
  login() {
    const emailTest = prompt("Увійдіть свою пошту")
    if(this.email === emailTest) {
      alert("Ви увійшли!")
    } else {
      alert("Ви не увійшли.")
    }
  }
}

console.log(user.login())

// 3 ^
// 4 v

let movie = {
  title: "Wonka",
  director: "Paul King",
  year: 2023,
  rating () {
    let rateThisFilm = Number(prompt("Чи вам це ї фільм сподобався? Від 10 - 1"))
    if(rateThisFilm > 7) {
      return "true"
    }else {
      return "false"
    }
  }
}

console.log(movie.rating())

// 4 ^