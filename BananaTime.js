function GetImages() {
    var imgs = document.getElementsByTagName("img");
    for (var count = 0; count < imgs.length; count++) {
        imgs.src = "Images/banana.png";
    }
}
if(window.addEventListener){
    window.addEventListener('load',GetImages,false); //W3C
}
else{
    window.attachEvent('onload',GetImages); //IE
}