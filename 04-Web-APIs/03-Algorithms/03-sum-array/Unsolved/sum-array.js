// Write code to add all the numbers in `arr` and return the total



// var sumArray = function(arr) {
//     let sum = 0
//     for (i = 0; i <= arr.length; i++) {
//         sum += arr[i]
//     }
//     return sum
// };

var sumArray = function(arr) {
    var result = 0;
  
    for (var i = 0; i < arr.length; i++) {
      var currentNumber = arr[i];
      result += currentNumber;
    }
  
    return result;
  };
  