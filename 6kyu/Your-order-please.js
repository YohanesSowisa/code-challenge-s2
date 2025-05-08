function order(words){
  if (!words) return words

  return words.split(' ').sort((a, b) => {
    const numA = a.match(/\d/)[0]
    const numB = b.match(/\d/)[0]

    return numA - numB
  })
  .join(' ')
}

console.log(order('is2 Thi1s T4est 3a'))
console.log(order('4of Fo1r pe6ople g3ood th5e the2'))
console.log(order(''))