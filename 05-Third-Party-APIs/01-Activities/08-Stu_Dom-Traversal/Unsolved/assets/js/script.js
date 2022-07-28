// Assemble: Create/select DOM elements
var rootEl = $('#root');
let itemA1 = $('.item-a1')
let itemA3 = $('.item-a3')


// TODO: Starting from the root element, `rootEl`, make all the background color for each box white.
$(document).ready (function () {
    $('li').css('background', 'white')
    itemA1.text(`O`)
    itemA3.text(`O`)
})

// TODO: Starting from `rootEl`, create the jQuery statement that will add "O" to block the "X" from winning
