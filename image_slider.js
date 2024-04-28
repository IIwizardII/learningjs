previousButton = document.getElementById("previous-button");
nextButton = document.getElementById("next-button");

image_list = [
    "images/img1.jpg",
    "images/img2.jpg",
    "images/img3.jpg",
    "images/img4.jpg",
    "images/img5.jpg",
]

var imageIndex = 0;
var imgTag = document.querySelector("img");

function handlePrevious() {
    imageIndex--;

    if (imageIndex < 0) {
        imageIndex = image_list.length - 1;
        imgTag.src = image_list[imageIndex];
    } else { 
        imgTag.src = image_list[imageIndex];
    }
}

function handleNext() {
    imageIndex++;

    if (imageIndex >= image_list.length) {
        imageIndex = 0;
        imgTag.src = image_list[imageIndex];
    } else {
        imgTag.src = image_list[imageIndex];
    }
}

previousButton.addEventListener("click", handlePrevious);
nextButton.addEventListener("click", handleNext);