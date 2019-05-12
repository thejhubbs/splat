class Accordion {
    constructor(element) {
        this.accordionGroup = $(element);
        this.accordions = Array.from(this.accordionGroup.contents('.accordion'));
        this.accordionTabs = [];
        this.accordions.forEach( (item) => {
            this.accordionTabs.push( new AccordionTab(item, this) ) 
        });
    }

    hideAll(){
        this.accordionTabs.forEach((item) => {
            item.toggleHide();
            item.print();
        });
    }
}

class AccordionTab {
    constructor(element, parent){
        this.parent = parent;
        this.accordion = $(element);
        this.heading = this.accordion.contents('h3');
        this.section = this.accordion.children('section');
        this.showing = this.accordion.data('show');

        if (!this.showing) { this.section.hide(); }
        this.print();

        this.heading.click((e) => {
            var toggle = !this.showing
            this.parent.hideAll();
            this.showing = toggle;
            this.print();
        });
    }

    print() {
        if(this.showing == true) { this.section.slideDown(); }
        else { this.section.slideUp(); }
    }

    toggleHide() {
        this.showing = false;
    }

}

function initiateAccordions(){
     

    Array.from($('.accordion-group')).forEach((item) => { new Accordion(item) });

}
