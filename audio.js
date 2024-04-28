for (var i = 0; i < document.querySelectorAll(".button").length; i++) {
    document.querySelectorAll(".button")[i].addEventListener("click", function() {
        
        new Audio("audio/" + (this.innerHTML).toString() + ".mp3").play();

        var selectedButton = document.querySelector("." + this.innerHTML);
        selectedButton.classList.add("button_effect");
        // schedular function
        setTimeout(function() {
            selectedButton.classList.remove("button_effect");
        }, 1000);
    });
}

// keyboard chepe kaj hosse
document.addEventListener("keypress", function(event) { // ei envet variable e jinis pati ase
    new Audio("audio/" + (event.key).toString() + ".mp3").play(); // j key press korsi oita event.key e stored

    var selectedButton = document.querySelector("." + event.key);
    selectedButton.classList.add("button_effect");
    // schedular function
    setTimeout(function() {
        selectedButton.classList.remove("button_effect");
    }, 1000);

});