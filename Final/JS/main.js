function scrollToSection() {
    window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
    });
}

var audio = new Audio('../Contents/audio/narrator.mp3');

function scrollToBottom() {
    const totalHeight = document.body.scrollHeight - window.innerHeight;

    function scroll() {
        if (window.scrollY < totalHeight) {
            console.log(window.scrollY + " " + window.innerHeight + " " + totalHeight);
            audio.play();
            window.scrollBy(0, 1);
            setTimeout(() => {
                scroll();
            }, 1);
            // requestAnimationFrame(scroll);
        }
        else {
            audio.pause();
        }
    }

    scroll();
}


var narrator = document.getElementById('narrator');


narrator.addEventListener('click', function () {
    setTimeout(() => {
        scrollToSection('narrator');
    }, 200);

    setTimeout(() => {
        scrollToBottom();
    }, 2000);
});

var slider = document.querySelectorAll(".carousel-indicators button");
var counter = 0;

for (var i = 0; i < 3; i++) {
    console.log(slider[i]);
}

console.log(slider[0].getAttribute("class") == "active");

document.addEventListener("keydown", function (event) {
    console.log(event.key);

    if (event.key == "ArrowRight") {
        console.log(slider[counter].getAttribute("class"));
        slider[counter].removeAttribute("class");
        slider[counter].removeAttribute("aria-current");
        
        console.log(slider[counter].getAttribute("class"));
        counter++;
        if (counter > 2) {
            counter = 0;
        }
        slider[counter].setAttribute("class", "active");
        slider[counter].setAttribute("aria-current", "true");
        console.log(slider[counter].getAttribute("class"));
    }

    else if (event.key == "ArrowLeft") {
        slider[counter].removeAttribute("class");
        slider[counter].removeAttribute("aria-current");
        counter--;
        if (counter < 0) {
            counter = 2;
        }
        slider[counter].setAttribute("class", "active");
        slider[counter].setAttribute("aria-current", "true");
    }
});