// Write code to return the largest number in the given array

var maxNum = function(arr) {
    
    for ( i = 1; i < arr.length; i++) {
        let max = 0
        if (arr[i] > max) {
            max = arr[i]
        } 
        return max
    }
};
