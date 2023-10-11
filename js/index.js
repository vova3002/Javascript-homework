let num = 0;

while (num < 11) {
  console.log(num);
  num += 1;
}
// 1 ^
// 2 v

const num2 = 2
for (let i = 0; i <= 20; i += 1) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// 2 ^
// 3 v

for (let a = 1; a <= 10; a += 1) {
  console.log(`${a} * 7 = ${a * 7}`);
}

// 3 ^
// 4 v

const mass = ["Apple", "Orange", "Pear", "Banana", "Cherry"];

for (let i = 0; i < mass.length; i += 1) {
  console.log(mass[i]);
}

// 4 ^
// 5 v

for (let c = 1; c <= 10; c += 1) {
  if (c === 7) {
    break;
  } else {
    console.log(c);
  }
}

// 5 ^
// 6 v

let n = prompt('Введіть число');

for (let f = 1; f <= n; f += 1) {
  if (f === n) {
    break;
  } else {
    console.log(f);
  }
}

// 6 ^
// 7 v

for (let g = 1; g <= 20; g += 1) {
  if (g === 3) {
    break;
  } else {
    console.log(g)
  }
}

// 7 ^