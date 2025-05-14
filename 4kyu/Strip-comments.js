function solution(text, markers) {
  return text.split('\n').map(line => {
    for (let marker of markers) {
      let index = line.indexOf(marker)

      if (index !== -1) {
        line = line.slice(0, index)
      }
    }
    return line.trimEnd()
  }).join('\n')
}

console.log(solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"]))

// apples, pears # and bananas
// grapes
// bananas !apples