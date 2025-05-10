function pigIt(str){
  return str.split(' ').map(e => e.match(/[\p{P}]/gu) ? e : e.slice(1, e.length) + e[0] + 'ay').join(' ')
}

// function pigIt(str){
//   return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
// }

console.log(pigIt('Pig latin is cool'))
console.log(pigIt('This is my string'))
console.log(pigIt('Hello world !'))