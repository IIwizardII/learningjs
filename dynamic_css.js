var paragraph = document.getElementById("paragraphID");
var change_style = document.getElementById("change_style");
var reset_style = document.getElementById("reset_style");

function addStyle() {
    
    paragraph.className = '';
    if (paragraph.classList.length === 0) {
        paragraph.classList.add("styled_state");
    }
}

// anonymous function use kore kora hoise. eita normal function er short cut
// ete function er nam dea lage na
reset_style.addEventListener("click", function () {
    if (paragraph.classList.length !== 0) {
        paragraph.className = '';
        paragraph.classList.add("normal_state");
    }
});

change_style.addEventListener("click", addStyle);



