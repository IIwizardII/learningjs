// document.querySelector("input[name=myInput]").addEventListener("change", function (event) {
//     console.log(event);
//     console.log(event.type);
//     console.log(event.target);
//     console.log(event.target.className);
//     console.log(event.target.value);
//     console.log(event.target.name);
    
// });

// check box e event listener use korsi
Array.from(document.querySelectorAll("input")).map((item) => {
    item.addEventListener("change", function (e) {
        if (e.target.checked) {
            console.log("checked", e.target.value);
        }
    })
});

