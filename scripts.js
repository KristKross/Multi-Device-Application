// background parallax
document.addEventListener("scroll", function() {
    var scrollPosition = window.scrollY;
    document.body.style.backgroundPosition = "center " + (-scrollPosition / 2) + "px";
});

// modal trailer pop-up
document.addEventListener('DOMContentLoaded', function () {
    var openButton = document.getElementById('open-trailer');
    var closeButton = document.getElementById('close-trailer');
    var trailerContainer = document.querySelector('.trailer-container');
    var overlay = document.querySelector('.overlay');
    var trailerVideo = document.getElementById('trailer-video');

    openButton.addEventListener('click', function () {
        overlay.style.display = 'block';
        trailerContainer.classList.add('show');
    });

    closeButton.addEventListener('click', function () {
        trailerVideo.pause();
        trailerVideo.currentTime = 0;
        trailerContainer.classList.remove('show');
        overlay.style.display = 'none';
    });
});

// modal buy pop-up
document.addEventListener('DOMContentLoaded', function () {
    var openButton1 = document.getElementById('open-buy-1');
    var openButton2 = document.getElementById('open-buy-2');
    var openButton3 = document.getElementById('open-buy-3');
    var closeButton = document.getElementById('close-buy');
    var buyContainer = document.querySelector('.buy-container');
    var overlay = document.querySelector('.overlay');

    openButton1.addEventListener('click', function () {
        overlay.style.display = 'block';
        buyContainer.classList.add('show');
    });
    
    openButton2.addEventListener('click', function () {
        overlay.style.display = 'block';
        buyContainer.classList.add('show');
    });

    openButton3.addEventListener('click', function () {
        overlay.style.display = 'block';
        buyContainer.classList.add('show');
    });

    closeButton.addEventListener('click', function () {
        buyContainer.classList.remove('show');
        overlay.style.display = 'none';
    });
});