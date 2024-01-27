// const users = [
//   {
//     name: "vova",
//     age: 14
//   },
//   {
//     name: 'misha',
//     age: 15
//   },
//   {
//     name: 'danya',
//     age: 14
//   }
// ]

// const userCheck = users.map(user => user.name)

// console.log(userCheck)
// 1 ^
// 2 V
// Отримати масив об'єктів користувачів за кольором очей (поле eyeColor).

// const userEyeColors = [
//   {
//     name: "vova",
//     age: 14,
//     eyeColor: "Blue"
//   },
//   {
//     name: 'misha',
//     age: 15,
//     eyeColor: "Brown"
//   },
//   {
//     name: 'danya',
//     age: 14,
//     eyeColor: "Blue"
//   }
// ]

// const userCheckEyeColors = userEyeColors.filter(eyeColorFinder => eyeColorFinder.eyeColor === "Blue")

// console.log(userCheckEyeColors)

// 3 v

// const userChecking = [
//   {
//     name: "vova",
//     age: 14,
//     eyeColor: "Blue",
//     gender: "Male"
//   },
//   {
//     name: 'dasha',
//     age: 15,
//     eyeColor: "Brown",
//     gender: "Female"
//   },
//   {
//     name: 'danya',
//     age: 14,
//     eyeColor: "Blue",
//     gender: "Male"
//   }
// ]

// const userGender = userChecking.filter(userGenderFinder => userGenderFinder.gender === "Male")

// console.log(userGender)

// 3 ^
// 4 v

// const userActive = [
//   {
//     name: "vova",
//     age: 14,
//     eyeColor: "Blue",
//     gender: "Male",
//     isActive: "No"
//   },
//   {
//     name: 'dasha',
//     age: 15,
//     eyeColor: "Brown",
//     gender: "Female",
//     isActive: "Yes"
//   },
//   {
//     name: 'danya',
//     age: 14,
//     eyeColor: "Blue",
//     gender: "Male",
//     isActive: "Yes"
//   }
// ]

// const userUnActiveCheck = userActive.filter(userActives => userActives.isActive === "No")
// console.log(userUnActiveCheck)

// 4 ^
// 5 v

// const userEmail = [
//   {
//     name: "vova",
//     age: 14,
//     eyeColor: "Blue",
//     gender: "Male",
//     isActive: "No",
//     email: "ksaew3.email.com"
//   },
//   {
//     name: 'dasha',
//     age: 15,
//     eyeColor: "Brown",
//     gender: "Female",
//     isActive: "Yes",
//   },
//   {
//     name: 'danya',
//     age: 14,
//     eyeColor: "Blue",
//     gender: "Male",
//     isActive: "Yes",
//   }
// ]

// const checkEmail = userEmail.find(userCheckEmail => userCheckEmail.email === "ksaew3.email.com")
// console.log(checkEmail)

// 5 ^
// 6 v

const userAge = [
  {
    name: "vova",
    age: 14,
    eyeColor: "Blue",
    gender: "Male",
    isActive: "No",
    email: "ksaew3.email.com"
  },
  {
    name: 'dasha',
    age: 15,
    eyeColor: "Brown",
    gender: "Female",
    isActive: "Yes",
  },
  {
    name: 'danya',
    age: 17,
    eyeColor: "Blue",
    gender: "Male",
    isActive: "Yes",
  }
]

const ageScale = userAge.filter(ageVerification => ageVerification.age > 13)
console.log(ageScale)

// 6 ^