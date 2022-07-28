var shoppingFormEl = $('#shopping-form');
var shoppingListEl = $('#shopping-list');
let shoppingInput = $('#shopping-input')
let inputVal = ''

// TODO: Create a function to handle the form submission event that captures the form's `<input>` value and prints it to the `shoppingListEl` as a `<li>`
 function input (event) {
    event.preventDefault()
    inputVal = shoppingInput.val()
    shoppingListEl.append(`<li>${inputVal}</li>`)
    shoppingInput.val('')
}
// TODO: Add an event listener to the `shoppingFormEl` to handle submission
shoppingFormEl.on('submit', input)