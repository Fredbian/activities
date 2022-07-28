function Algo() { }

Algo.prototype.reverse = function (str) {
  // TODO: Your code here
  return str.split('').reverse().join('')
};

Algo.prototype.isPalindrome = function (str) {
  // TODO: Your code here
  return this.reverse(str) === str
  // const len = str.length;
  // for (let i = 0; i < len / 2; i++) {
  //   if (str[i] !== str[len - 1 - i]) {
  //     return false;
  //   }
  // }
  // return true;
}

Algo.prototype.capitalize = function (str) {
  // TODO: Your code here 
  const words = str.split(' ');
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substring(1);
  };
  return words.join(' ')
}

module.exports = Algo;
