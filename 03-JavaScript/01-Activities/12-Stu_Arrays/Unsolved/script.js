// WRITE YOUR CODE HERE
let names = ['Anna', 'Bobby', 'Cathy', 'David'] 

console.log(names.length)

for (i = 0; i < names.length; i++) {
    console.log(`Welcome to the class ${names[i]}`)
} 

names[0] = 'Annie'

if (names[0] === 'Annie') {
    console.log(`${names[0]} is in class`)
}