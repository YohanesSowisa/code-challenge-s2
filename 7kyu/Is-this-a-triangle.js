function isTriangle(a, b, c) {
  return ((a + b > c) && (a + c > b) && (b + c > a))&& (a && b && c > 0)
}

console.log(isTriangle(1, 2, 2))
console.log(isTriangle(7, 2, 2))