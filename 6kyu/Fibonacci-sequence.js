function tribonacci(signature, n) {
  if (n <= signature.length) {
    return signature.slice(0, n);
  } else {
    signature.push(signature.reduce((a, b) => a + b, 0));

    while (signature.length < n) {
      signature.push(
        signature[signature.length - 1] +
          signature[signature.length - 2] +
          signature[signature.length - 3]
      );
    }

    return signature;
  }
}

// function tribonacci(signature,n){
//   for (var i = 0; i < n-3; i++) { // iterate n times
//     signature.push(signature[i] + signature[i+1] + signature[i+2]); // add last 3 array items and push to trib
//   }
//   return signature.slice(0, n); //return trib - length of n
// }

console.log(tribonacci([1, 1, 1], 10));
console.log(tribonacci([0, 0, 1], 10));
console.log(tribonacci([0, 1, 1], 10));
console.log(tribonacci([1, 0, 0], 10));
console.log(tribonacci([0, 0, 0], 10));
console.log(tribonacci([1, 2, 3], 10));
console.log(tribonacci([3, 2, 1], 10));
console.log(tribonacci([1, 1, 1], 1));
