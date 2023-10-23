const array = [9, 2, 3];
array[1] = 10
console.log(array)

// // 1 ^
// // 2 v

const array2 = ['name', 'name2', 'name3']
array2.push('name4')
console.log(array2)

// 2 ^
// 3 v

const array3 = [3, 11, 28, 89]
let totalSum = 0

for (let i = 0; i < array3.length; i += 1){
  totalSum = totalSum + array3[i]
}
console.log(totalSum)

// 3 ^
// 4 v

const array4 = [9, 10, 11, 12, 13]
for(let i = 0; i < array4.length; i += 1) {
  alert(`${array4[i]}`)
  console.log(array4)
}

// 4 ^
// 5 v

const array5 = ["mango", "pear", "apple", "tomato", "brocoli"]
for(let i = 0; i < array5.length; i += 1){
  if(array5[i].length > 4){
    alert(`${array5[i]}`)
  }
  console.log(array5)
}

// 5 ^
// 6 v

const array6 = [9, 10, 21, 72, 81, 23, 53, 7, 8, 9, 1210]
let maxNum = array6[0]
for(let i = 0; i < array6.length; i += 1){
  if(array6[i] > maxNum) {
    maxNum = array6[i]
  }
}
console.log(maxNum)

// 6 ^
// 7 v

const array7 = [2, 4, 6, 8, 10, 11, 13, 15, 17, 19]
for(let i = 0; i < array7.length; i += 1){
  if(array7[i] %2 === 0) {
    alert(`${array7[i]}`)
  }
}
console.log(array7)

// 7 