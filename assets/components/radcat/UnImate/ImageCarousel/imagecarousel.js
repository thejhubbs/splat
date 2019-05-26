class ImageCarousel {
    constructor(attr) {
        this.element = $(attr);
        this.slideElements = this.element.children('.slide');
        this.slides = Array.from(this.slideElements).forEach((item) => {return new ImageCarouselSlide(item)});
        this.previousArrow = this;
        this.nextArrow = this;
    }
}

class ImageCarouselSlide {
    constructor(attr) {
        this.element = $(attr);
        this.showing = this.element.data('active');
        if(!this.showing) { this.element.hide(); }
    }
}

function initiateImageCarousel() { 
    Array.from($('.carousel')).forEach((item) => { new ImageCarousel(item) });
}