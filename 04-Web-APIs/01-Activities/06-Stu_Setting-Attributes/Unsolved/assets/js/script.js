var site1El = document.querySelector(".site1");
var site2El = document.querySelector(".site2");
var site3El = document.querySelector(".site3");

// let sites_h4 = ducument.querySelectorAll('.sites_h4')

site1El.children[0].textContent = "Site 1";
site1El.children[1].setAttribute("href", "https://google.com");
site1El.children[1].children[0].setAttribute("src", "assets/images/image_1.jpg");
site1El.children[1].children[0].setAttribute("alt", "man working");
site1El.children[1].children[0].setAttribute("style", "padding:10px;");

site2El.children[0].textContent = "Site 2";
site2El.children[1].setAttribute("href", "https://twitter.com");
site2El.children[1].children[0].setAttribute("src", "assets/images/image_2.jpg");
site2El.children[1].children[0].setAttribute("alt", "group brainstorm");
site2El.children[1].children[0].setAttribute("style", "padding:10px;");

site3El.children[0].textContent = "Site 3";
site3El.children[1].setAttribute("href", "https://instagram.com");
site3El.children[1].children[0].setAttribute("src", "assets/images/image_3.jpg");
site3El.children[1].children[0].setAttribute("alt", "women working");
site3El.children[1].children[0].setAttribute("style", "padding:10px;");

// Write Your Code Below
// It's done when the text of each <h4> is set to blue, the font size is 30px, and the text is bold.

// It's done when the padding to the left of the title is set to 10px and the margin is set to 0.

let h4Tag = document.querySelectorAll('h4')

for (i = 0; i < h4Tag.length; i++) {
    // h4Tag[i].style.color = 'blue'
    // h4Tag[i].style.fontSize = '30px'
    // h4Tag[i].style.margin = 0
    // h4Tag[i].style.fontWeight = 700
    // h4Tag[i].style.paddingLeft = '10px'
    h4Tag[i].setAttribute('style', 'color: blue; font-size: 30px; font-weight: 700; padding-Left: 10px; margin: 0')
}