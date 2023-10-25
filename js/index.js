const friends = ["Mango", "Poly", "Kiwi", "Ajax"]
console.log(friends.join(", "))

// join ^
// for v
let friendsFor = ""
for(let i = 0; i < friends.length; i += 1){
  friendsFor += friends[i] + ", "
}
console.log(friendsFor)

// do 2 ways ^

// // 1 ^
// // 2 v

const cards = [
  'Карточка-1',
  'Карточка-2',
  'Карточка-3',
  'Карточка-4',
  'Карточка-5',
  
]

// 2 ^
// 3 v

const cardToRemove = cards.splice(2, 1)
console.log(cards)

// 3 ^
// 4 v

const cardToAdd = cards.splice(4, 0, "Карточка-6")
console.log(cards)

// 4 ^
// 5 v

const cardToUpdate = cards.splice(1, 1, "Карточка-4")
console.log(cards)

// 5 ^