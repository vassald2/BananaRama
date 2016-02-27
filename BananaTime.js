
    var imgs = document.getElementsByTagName("img");
    changeImage();

    function changeImage(e) {
        for (var count = 0; count < imgs.length; count++) {
            imgs[count].src = "http://rs1215.pbsrc.com/albums/cc506/Rockingbro/170422_dancing_banana.gif~c200";
        }
    }
    window.addEventListener("DOMContentLoaded",changeImage);

