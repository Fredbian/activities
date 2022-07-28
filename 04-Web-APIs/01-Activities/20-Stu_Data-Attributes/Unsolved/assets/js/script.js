var container = document.querySelector(".container");

container.addEventListener("click", function(event) {
  
  var element = event.target;
  
  // TODO: Complete function
  if (element.matches("div")) {
   
    // check if box is empty
    const isEmpty = element.textContent === "";

    // if not empty then hide
    if(!isEmpty){
      // set textContent of box to empty
      element.textContent = "";
    }else{

      // else (box is currently empty)
    
      // get the custom data attr -- number
      const number = element.getAttribute('data-number')
      // set the number to textCOnetent
      element.textContent = number;
    }



  }
})
