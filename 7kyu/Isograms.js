function isIsogram(str) {
  const karakterSet = new Set();

  for (let char of str.toLowerCase()) {
    if (karakterSet.has(char)) {
      return false;
    }
    karakterSet.add(char);
  }

  return true;
}

// function isIsogram(str){
// 	return new Set(str.toLowerCase()).size === str.length
// }

// function isIsogram(str){
//   return !str.match(/([a-z]).*\1/i);
// }

console.log(isIsogram("Dermatoglyphics"));
console.log(isIsogram("aba"));
console.log(isIsogram("moOse"));
