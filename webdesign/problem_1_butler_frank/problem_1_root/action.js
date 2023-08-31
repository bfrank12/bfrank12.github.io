let image = document.querySelector("#image");
let flag = false;


image.addEventListener("click", function() {
    flag = !flag;
    if(flag == true) {
        image.requestFullscreen();
    }
});