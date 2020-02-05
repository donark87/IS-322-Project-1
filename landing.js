
var i = 0;
var images = [];

images [0] = 'Image1.jpg';
images [1] = 'Image2.jpg';
images [2] = 'Image3.jpg';

function slideChange() {

    document.getElementById("slide").src = images[i];


    if(i < images.length - 1) {
        i++;

    } else {
        i = 0;
    }
   setTimeout("slideChange()", 2000);

}

window.onload = slideChange;