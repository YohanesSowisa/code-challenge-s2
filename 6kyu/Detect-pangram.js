function isPangram(string){
  string = string.toLowerCase().match(/[a-z]/gi)
  return new Set(string).size === 26
}

console.log(isPangram('The quick brown fox jumps over the lazy dog.'))