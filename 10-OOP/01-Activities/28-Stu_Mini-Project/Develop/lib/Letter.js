class Letter {
   constructor(letter) {
      this.visible = !/[a-z1-9]/i.test(letter)
      this.letter = letter
   }
   
   getLetter() {
      return this.letter
   }
   
   toString() {
      if (this.visible === true) {
         return this.letter
      }
      return '_'
   }

   guess(letterGuess) {
      if (letterGuess.toUpperCase() === this.letter.toUpperCase()) {
         this.visible = true
         return true
      }

      return false
   }

}



module.exports = Letter;
