// this.innerHTML current button er instance and oi button er value contain kore
for (var i = 0; i < document.querySelectorAll(".button").length; i++) {
    document.querySelectorAll(".button")[i].addEventListener("click", function() {
        document.getElementById("paragraph").innerHTML = this.innerHTML;        
    });
}