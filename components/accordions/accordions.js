function initiateAccordions(){
    hideAll();    

    $('.accordion').click((e) => {
        hideAll('slide');    
        $(e.target).parent().contents('section').slideToggle();

    });
}

function hideAll(type){
    if(type == 'slide') {
        $('.accordion section').slideUp();   
    }else {
        $('.accordion section').hide();
    }
}