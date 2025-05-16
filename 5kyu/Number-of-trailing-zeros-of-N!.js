function zeros(n) {
  let count = 0;

  for (let i = 5; n / i >= 1; i *= 5) {
    count += Math.floor(n / i);
  }
  
  return count;
}

console.log(zeros(0))
console.log(zeros(5))
console.log(zeros(6))
console.log(zeros(30))
console.log(zeros(1000))