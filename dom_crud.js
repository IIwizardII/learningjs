// DOM = document object model
// object hosse tags
// dom tree

// creating new element
// also tag er moddhe ki value jabe sheitaw banaite hoi 
// cause eta node exprect kore parameter hishebe
// then ei new created element html er kono 
// ekta object er moddhe append krte hobe
// ei khetre new child parent er sheshe er dik add hoi
var mydiv = document.getElementById("temp_div");
var heading3 = document.createElement("h1");
var text = document.createTextNode("heading 3");

heading3.appendChild(text);
mydiv.appendChild(heading3);

// removes child
mydiv.removeChild(document.getElementsByTagName("h1")[0]);

var heading4 = document.createElement("h1");
var headingText = document.createTextNode("heading 4");

heading4.appendChild(headingText);
// eita diye parent er starting e child add kora jai
mydiv.insertBefore(heading4, document.getElementsByTagName("h1")[0]);



mydiv.classList // ei div e ki ki class ase access kore
mydiv.classList.add("class-name"); // new class add kore
console.log(mydiv.classList);
mydiv.classList.remove("class-name"); // certain class remove kore dei

// console.log(mydiv.classList);

// issue with the below code
// In this case, you're trying to chain the appendChild methods, 
// but it doesn't work as expected. The appendChild method returns 
// the appended child, not the parent element. So, the 
// document.createElement("h1").appendChild(...) part returns the text node
// document.getElementById("temp_div").appendChild(
//     document.createElement("h1").appendChild(
//         document.createTextNode("heading 4")
//     )
// );
