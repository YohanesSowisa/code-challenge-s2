function twoSum(numbers, target) {
  let map = {} // nyimpan angka yang udah dilewatin

  for (let i = 0; i < numbers.length; i++) {
    let selisih = target - numbers[i]

    if (map.hasOwnProperty(selisih)) {
      return [map[selisih], i] // ketemu pasangan
    }
    
    map[numbers[i]] = i // simpan angka dan index-nya
  }
}

console.log(twoSum([1, 2, 3], 4))