function findEvenIndex(arr) {
  let total = arr.reduce((a, b) => a + b, 0)
  let leftSum = 0

  for (let i = 0; i < arr.length; i++){ 3
    let rightSum = total - leftSum - arr[i]
    if (leftSum === rightSum) return i
    leftSum += arr[i]
  }

  return -1
}

// const sum = (a, from, to) => a.slice(from, to).reduce((a, b) => a + b, 0)
// const findEvenIndex = a => a.findIndex((el, i) => sum(a, 0, i) === sum(a, i + 1));

console.log(findEvenIndex([1,2,3,4,3,2,1])) // 3
console.log(findEvenIndex([1,100,50,-51,1,1])) // 1
console.log(findEvenIndex([1,2,3,4,5,6])) // -1
console.log(findEvenIndex([20,10,30,10,10,15,35])) // 3