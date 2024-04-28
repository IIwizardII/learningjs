// doesnt work with
// <html>, <head>, <meta>, <title>, <br>, <Style>, <script>, <iframe>, <param>, <base>, <bdo>

document.querySelector(".temp").addEventListener("mousemove", function(e) {
    console.log("x: ", e.clientX, "y: ", e.clientY); // coordinate based on whole window
    console.log("x: ", e.offsetX, "y: ", e.offsetY); // coordinate based on div window

})