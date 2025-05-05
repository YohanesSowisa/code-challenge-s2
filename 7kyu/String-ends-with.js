function solution(str, ending){
  return str.slice((str.length - ending.length), str.length) === ending
}

// function solution(str, ending){
//   return str.endsWith(ending);
// }

console.log(solution('Flying', 'ing')) // TRUE
console.log(solution('Flying', 'ng')) // TRUE
console.log(solution('Flown', 'ing')) // FALSE