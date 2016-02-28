window.setInterval(function(){
    var imgs = document.getElementsByTagName("img");
    changeImage();

    function changeImage() {
        for (var count = 0; count < imgs.length; count++) {
            var selector = Math.floor((Math.random() * 2) + 1);
            if(imgs[count].complete!=="true") {
                if (selector === 1)
                    imgs[count].src = "http://www.sherv.net/cm/emo/funny/2/big-dancing-banana-smiley-emoticon.gif";
                else if (selector === 2)
                    imgs[count].src = "http://rs1215.pbsrc.com/albums/cc506/Rockingbro/170422_dancing_banana.gif~c200";
                imgs[count].setAttribute("complete", "true");
            }
        }
    }
},1000);
