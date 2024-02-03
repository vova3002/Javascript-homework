// const names = [
//   {
//     name: "vova",
//     balance: 50000,
//   },
//   {
//     name: "misha",
//     balance: 200000,
//   },
//   {
//     name: "danya",
//     balance: 10000,
//   },
//   {
//     name: "timur",
//     balance: 9000,
//   }
// ]

// const searcher = names.reduce((acc, collectionNames) => {
//   acc += collectionNames.balance
//   console.log(collectionNames)
//   return acc
// }, 0)
// console.log(searcher)

// const nameObj = [
//   {
//     name: "vova",
//     friend: "misha",
//   },
//   {
//     name: "misha",
//     friend: "vova",
//   },
//   {
//     name: "danya",
//     friend: "misha",
//   },
//   {
//     name: "timur",
//     friend: "pasha",
//   }
// ]

// const combFriends = nameObj.reduce((acc, user) => {
//   if(user.friend === "misha") {
//     acc.push(user)
//   }
//   return acc
// }, [])

// console.log(combFriends)

// const nameObj = [
//   {
//     name: "vova",
//     friends: 8,
//   },
//   {
//     name: "misha",
//     friends: 5,
//   },
//   {
//     name: "danya",
//     friends: 10,
//   },
//   {
//     name: "timur",
//     friends: 2,
//   }
// ]

// const sortFriends = nameObj.sort((user, friendSort) => {
//   return user.friends - friendSort.friends
// })
// console.log(sortFriends)
// 4 v

const nameSkiller = [
  {
    name: "vova",
    skills: "gamer"
  },
  {
    name: "misha",
    skills: "gamer"
  },
  {
    name: "danya",
    skills: "coder"
  },
  {
    name: "timur",
    skills: "editor"
  }
]

const sortSkills = nameSkiller.sort((user, skillPro) => {
  return user.skills - skillPro.skills
})
console.log(sortSkills)
