const REGEXP = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z0-9]{6,}$/

console.log(REGEXP.test('fjd3IR9'))
console.log(REGEXP.test('fjd3 IR9'))
console.log(REGEXP.test('FJD3IR9'))
console.log(REGEXP.test('abcdE0'))