const fs = require("fs")
let input = fs.readFileSync("input", "utf8").split("\n")
input.pop()
// console.log(input)
// console.log(input.length)
// console.log(input[0], input[input.length - 1])
let numbers = []
let total = 0
for (const line of input) {
    let numbersFor = line.replace(/\D/g, "").split("")
    let first = numbersFor[0]
    let last = numbersFor[numbersFor.length - 1]
    let sum = first + last
    // console.log(n, sum)
    numbers.push(Number(sum))
}
numbers.forEach(
    (element) => {
        total = total + element
    }
)
console.log(total)