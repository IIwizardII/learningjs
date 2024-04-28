// events
// canplay, play, playing, pause, progress, ended, volumechange, waiting 


// const video = document.querySelector("video");

// video.addEventListener("volumechange", function(){
//     console.log("vol change");
// });


// events 
// load, unload
// scroll
// resize
// toggle

// window.addEventListener("unload", function(){
//     console.log("asdasd");
// });


// actual window resize korle value show kore. inspect resize korle kisu hoi na
window.addEventListener("resize", function() {
    const width = window.outerWidth;
    const height = window.outerHeight;
    console.log(`height: ${height}, width: ${width}`);

});

document.querySelector("details").addEventListener("toggle", function(e){
    console.log(e.target.open);
})