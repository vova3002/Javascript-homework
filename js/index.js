// class Account {
//   constructor(objectLog){
//     this.login = objectLog.login;
//     this.email = objectLog.email;
//   }
// }

// // console.log(Account.prototype.getInfo); // function

// const mango = new Account({
//  login: 'Mangozedog',
//  email: 'mango@dog.woof',
// });

// // mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

// const poly = new Account({
//  login: 'Poly',
//  email: 'poly@mail.com',
// });

// // poly.getInfo(); // Login: Poly, Email: poly@mail.com
// console.log(mango)
// console.log(poly)
// 1

// 2 

// class User {
//   constructor(object){
//     this.name = object.name;
//     this.age = object.age;
//     this.followers = object.followers;
//   }
// }

// const mango = new User({
//   name: 'Mango',
//   age: 2,
//   followers: 20,
//  });
 
// //  mango.getInfo(); // User Mango is 2 years old and has 20 followers
 
//  const poly = new User({
//   name: 'Poly',
//   age: 3,
//   followers: 17,
//  });
 
// //  poly.getInfo(); // User Poly is 3 years old and has 17 followers
// console.log(mango)
// console.log(poly)

// 3

// class Storage {
//   constructor(ObjectStorage){
//     this.storage = ObjectStorage;
//   }
// }

// const storage = new Storage([
//   'Нанітоіди',
//   'Пролонгер',
//   'Залізні жупи',
//   'Антигравітатор',
//  ]);
 
//  const items = storage.getItems();
//  console.table(items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор" ]
 
//  storage.addItem('Дроїд');
//  console.table(storage.items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор", "Дроїд" ]
 
//  storage.removeItem('Пролонгер');
//  console.table(storage.items); // [ "Нанітоіди", "Залізні жупи", "Антигравітатор", "Дроїд" ]
// console.log(storage)

// 4

// class StringBuilder{
//   constructor(ObjectBuilder) {
//     this.worker = ObjectBuilder
//   }
// }

// const builder = new StringBuilder('.');

// builder.append('^');
// console.log(builder.value); // '.^'

// builder.prepend('^');
// console.log(builder.value); // '^.^'

// builder.pad('=');
// console.log(builder.value); // '=^.^='
// console.log(builder)

class Car {
  static getSpecs(car){
    console.log(car.maxSpeed, car.speed, car.isOn, car.distance, car.price)
  }
  /*
   * Додай статичний метод `getSpecs(car)`,
   * який приймає об'єкт-машину як параметр і виводить
   * в консоль значення властивостей maxSpeed, speed, isOn, distance и price.
   */
 
  /*
   * Конструктор отримує об'єкт налаштувань.
   *
   * Додай властивості майбутнього екземпляра класу:
   * speed - поточна швидкість, початкова 0
   * price - ціна автомобіля
   * maxSpeed - максимальна швидкість
   * isOn - заведений автомобіль, значення true або false. Спочатку false
   * distance - загальний кілометраж, спочатку 0
   */
  constructor(carSpeed, carPrice, carMaxSpeed, carIsOn, carDistance) {
    this.speed = carSpeed;
    this.price = carPrice;
    this.maxSpeed = carMaxSpeed;
    this.IsOn = carIsOn;
    this.distance = carDistance;
  }
 
  /*
   * Додай геттер і сеттер для властивості price,
   * який буде працювати з властивістю ціни автомобіля.
   */
   get priceCheck() {
    return this.price
  }

  set priceCheck(carPrice){
    this.price = carPrice
  }
 
  /*
   * Додай код для того, щоб завести автомобіль
   * Записує у властивість isOn значення true
   */
  turnOn() {
    this.IsOn = true
  }
 
  /*
   * Додай код для того, щоб заглушити автомобіль
   * Записує у властивість isOn значення false,
   * і скидає поточну швидкість в 0
   */
  turnOff() {
    this.IsOn = false
    this.speed = 0
  }
 
  /*
   * Додає до властивості speed отримане значення,
   * за умови, що результуюча швидкість
   * не більше, ніж значення властивості maxSpeed
   */
  accelerate(value) {
    if(this.speed + value <= this.maxSpeed) {
      this.speed += value
    }
  }
 
  /*
   * Забирає від властивості speed отримане значення,
   * за умови, що результуюча швидкість не менше нуля
   */
  decelerate(value) {
    if(this.speed - value >= 0) {
      this.speed -= value
    }
  }
 
  /*
   * Додає в поле distance кілометраж (hours * speed),
   * але тільки в тому випадку, якщо машина заведена!
   */
  drive(hours) {
    if(this.turnOn){
      this.distance = this.speed * hours
    }
  }
 }
 
 const mustang = new Car({price: 2000,speed: 50 ,maxSpeed: 200, distance: 50 });
 
 mustang.turnOn();
 mustang.accelerate(50);
 mustang.drive(2);
 
 Car.getSpecs(mustang);
 // maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000
 
 mustang.decelerate(20);
 mustang.drive(1);
 mustang.turnOff();
 
 Car.getSpecs(mustang);
 // maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000
 
 console.log(mustang.price); // 2000
 mustang.price = 4000;
 console.log(mustang.price); // 4000
