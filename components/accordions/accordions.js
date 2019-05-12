class Accordion {
    constructor(element) {
        this.accordionGroup = $(element);
        this.accordions = this.accordionGroup.contents('.accordion');
        this.accordionSections = this.accordionGroup.find('section');

        this.accordions.click((e) => {
            this.accordionSections.slideUp();        
            $(e.target).parent().contents('section').slideToggle();
        });
    }

    

}

function initiateAccordions(){
    //Eventually allow for preshow option
    $('.accordion section').slideUp();    

    Array.from($('.accordion-group')).forEach((item) => { new Accordion(item) });

}
