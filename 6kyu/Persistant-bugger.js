function persistence(num) {
  let count = 0

  while (num >= 10) {
    num = num.toString().split('').map(e => +e).reduce((a, b) => a * b)
    count++
  }

  return count
}

console.log(persistence(39)); // 3
console.log(persistence(25)); // 2
console.log(persistence(999)); // 4
console.log(persistence(4)); // 0
