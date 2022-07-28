let start = document.querySelector('.start')
let timerText = document.querySelector('.timerText')
let letters = document.querySelectorAll('.letters')


let i = 0
// start btn click timer run
start.addEventListener('click', function () {
    i = 20 
    timer = setInterval (function () {        
        i--
        timerText.innerHTML = i
        if (i <= 0) {
            clearInterval(timer)
        }
    }, 1000)
})

// main game
// input maxlength
for (i = 0; i < letters.length; i++) {
    letters[i].maxLength = 1
}


