function nbYear(p0, percent, aug, p) {
  let count = 0

  while (p0 < p) {
    p0 = Math.floor(p0 + p0 * (percent/100) + aug)
    count++
  }

  return count
}

// function nbYear(p0, percent, aug, p) {
//   for (var years = 0; p0 < p; years++) {
//     p0 = Math.floor(p0 + p0 * percent / 100 + aug);
//   }

//   return years
// }

console.log(nbYear(1500, 5, 100, 5000)) // 15
console.log(nbYear(1000, 2.0, 50, 1214)) // 3