//WRITE YOUR CODE BELOW
let customerOrder = {    
    drinkName: 'spring water',
    numberOfSugar: 0,
    isReady: true
}
console.log(customerOrder)
console.log(customerOrder.drinkName)
console.log(customerOrder.numberOfSugar)
if (customerOrder.isReady === true) { 
    console.log(`Ready for pick-up`)
} else { (customerOrder.isReady !== true) 
    console.log(`Still in order queue`)
} 