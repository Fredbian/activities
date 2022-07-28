let win = 0
let loss = 0
let draw = 0
let array = ['R', 'P', 'S']


function game () {

let customerInput = prompt(`Please enter "R", "P" or "S"`)
   
let i = Math.floor(Math.random() * array.length)
let randomPick = array[i]
alert(`Computer choose ${randomPick}`)

 if (customerInput === 'R' && randomPick === 'P') { 
    alert(`You loss`)
    loss++  
} else if (customerInput === 'R' && randomPick === 'S') {
    alert(`You win`)
    win++
} else if (customerInput === 'P' && randomPick === 'S') {
    alert(`You loss`)
    loss++
} else if (customerInput === 'P' && randomPick === 'R') {
    alert(`You win`)
    win++
} else if (customerInput === 'S' && randomPick === 'R') {
    alert(`You loss`)
    loss++
} else if (customerInput === 'S' && randomPick === 'P') {
    alert(`You win`)
    win++
} else {
    alert(`Draw`)
    draw++ 
}

alert(`
win = ${win} 
loss = ${loss}
draw = ${draw}
`)

let playAgain = confirm(`Play again?`)
if (playAgain === 'true') {
   return fn()
}

}


// let playAgain = confirm(`Play again?`)
// if (playAgain === true) {
//     return customerInput
// }