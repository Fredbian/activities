const a = process.argv[2]
const b = process.argv[3]

if (a === b) {
    console.log(true)
} else {
    console.log(false)
}

console.log(process.argv)
console.log(a)
console.log(b)
