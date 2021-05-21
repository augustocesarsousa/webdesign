function Carousel(config){
    this.container = (typeof config.container === "string") ? 
    document.querySelector(config.container) : config.container;

    this.item = (typeof config.item === "string") ? 
    this.container.querySelectorAll(config.item) : config.item;

    this.btnPrev = (typeof config.btnPrev === "string") ? 
    this.container.querySelector(config.btnPrev) : config.btnPrev;

    this.btnNext = (typeof config.btnNext === "string") ? 
    this.container.querySelector(config.btnNext) : config.btnNext;

    var _this = this;
    var _currentSlide = 0;

    init();

    function init(){
        var _show = _this.container.querySelectorAll(".show");

        Array.prototype.forEach.call(_show, function(sh){
            sh.classList.remove("show");
        })

        _this.item[0].classList.add("show");
        _this.btnPrev.removeAttribute("style");
        _this.btnNext.removeAttribute("style");

        addListeners();
    }

    function addListeners(){
        _this.btnPrev.addEventListener("click", showPrevSlide);
        _this.btnNext.addEventListener("click", showNextSlide);
    }

    function showPrevSlide(){
        _currentSlide--;
        showSlide();
    }

    function showNextSlide(){
        _currentSlide--;
        showSlide();
    }

    function showSlide(){
        var qtd = _this.item.length;
        var slide = _currentSlide % qtd;
        slide = Math.abs(slide);

        _this.container.querySelector(".show").classList.remove("show");
        _this.item[slide].classList.add("show");
    }
}