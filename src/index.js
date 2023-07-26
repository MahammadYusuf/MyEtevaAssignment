let List1 = ['Arjun', 'Adwait', 'Swapnil', 'Amit', 'Vishal', 'Adnan']
let List2 = ['Adwait', 'Laxman', 'Amit', 'Adnan', 'Nitin', 'Gaurav']
let firstcase = []
let secondcase = []
let thirdcase = []
for (let i of List1) {
  if (!List2.includes(i)) {
    firstcase.push(i)
  } else {
    thirdcase.push(i)
  }
}
for (let j of List2) {
  if (!List1.includes(j)) {
    secondcase.push(j)
  }
}
console.log(firstcase)
console.log(secondcase)
console.log(thirdcase)
