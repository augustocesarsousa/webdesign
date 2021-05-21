(function(){
    var $body = document.querySelector('body');
    $body.classList.remove("no-js");
    $body.classList.add("js");

    var menu = new Menu({
        container: ".header-nav",
        toggleBtn: ".header-btnMenu",
        widthEnable: 1024
    });

    var carousel = new Carousel({
        container: ".laptopSlider .slideShow",
        item: "figure",
        btnPrev: ".prev",
        btnNext: ".next"
    });

    var quote = new Carousel({
        container: ".quote-content .quote-slideShow",
        item: "figure",
        btnPrev: ".prev",
        btnNext: ".next"
    });
})();