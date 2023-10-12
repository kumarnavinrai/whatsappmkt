document.onmousemove = function(event) {
    // console.log('x of mouse is: '+event.pageX);
    // console.log('y of mouse is: '+event.pageY);
}

document.addEventListener("DOMContentLoaded", function(){
    console.log("Docloaded");
});

document.addEventListener("keydown", function(e){
    var keyCode = e.keyCode;
    console.log(keyCode);
    if(keyCode === 74){
        var link = navigator.clipboard.readText().then((text) => {
            console.log(text);
            setTimeout(() => {
                window.location.href = text;
            }, 1000);
        });
    }
}, false);

