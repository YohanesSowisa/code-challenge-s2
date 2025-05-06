// function openOrSenior(data){
//   let category = []
  
//   for (let i = 0; i < data.length; i++) {
//     if (data[i][0] >= 55 && data[i][1] > 7) {
//       category.push('Senior')
//     } else {
//       category.push('Open')
//     }
//   }

//   return category
// }

function openOrSenior(data){
  return data.map(e => e[0] >= 55 && e[1] > 7 ? 'Senior' : 'Open')
}

console.log(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]))