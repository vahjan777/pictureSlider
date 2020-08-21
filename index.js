const bigPicture = document.getElementById("bigPicture"),
    firstPicture = document.getElementById("firstPicture"),
    secondPicture = document.getElementById("secondPicture"),
    thirdPicture = document.getElementById("thirdPicture"),
    fourthPicture = document.getElementById("fourthPicture"),
    fifthPicture = document.getElementById("fifthPicture");

let i = 0,
    j = 1,
    k = 2,
    f = 3,
    m = 4;

let images = ["1", "2", "3", "4", "5"];

let pictureSlider = setInterval(switchPicture, 3000);

function switchPicture() {

    i++;
    j++;
    k++;
    f++;
    m++;

    if(i >= images.length) {
        i = 0;
    }
    if(j >= images.length) {
        j = 0;
    }
    if(k >= images.length) {
        k = 0;
    }
    if(f >= images.length) {
        f = 0;
    }
    if(m >= images.length) {
        m = 0;
    }

    loadPicture();
}
function loadPicture() {
    bigPicture.src = "pictures/" + images[k] + ".jpg";
    firstPicture.src = "pictures/" + images[i] + ".jpg";
    secondPicture.src = "pictures/" + images[j] + ".jpg";
    thirdPicture.src = "pictures/" + images[k] + ".jpg";
    fourthPicture.src = "pictures/" + images[f] + ".jpg";
    fifthPicture.src = "pictures/" + images[m] + ".jpg";
}


function previousOrNextBtn(value) {
    switch(value) {
        case "next":
            i++;
            j++;
            k++;
            f++;
            m++;
            if(i >= images.length) {
                i = 0;
            }
            if(j >= images.length) {
                j = 0;
            }
            if(k >= images.length) {
                k = 0;
            }
            if(f >= images.length) {
                f = 0;
            }
            if(m >= images.length) {
                m = 0;
            }
            break;
        case "previous":
            i--;
            j--;
            k--;
            f--;
            m--;
            if(i < 0) {
                i = 4;
            }
            if(j < 0) {
                j = 4;
            }
            if(k < 0) {
                k = 4;
            }
            if(f < 0) {
                f = 4;
            }
            if(m < 0) {
                m = 4;
            }
            break
    }
    loadPicture();
    restartInterval();
}

function restartInterval() {
    clearInterval(pictureSlider);
    pictureSlider = setInterval(switchPicture, 3000);
}