//Nav bar

$('document').ready(function () {
    scrollLinks();
    neatImageOverlay();

});

function neatImageOverlay() {
    var neatImages = document.getElementsByClassName('neat-img-overlay');
    for (let i = 0; i < neatImages.length; i++) {
        //Accout for the differences in div display sizes
        var ratio = neatImages[i].offsetWidth / neatImages[i].offsetHeight;

        //The image, width and heights.
        var img = neatImages[i].querySelector('img')
        var imgW = img.width, imgH = img.height;

        //Multiply against the ratio to be sure to factor for it
        if (imgW > imgH * ratio) { img.setAttribute("style", 'height:100%'); }
        else { img.setAttribute("style", 'width:100%'); }
    }
}


 //Adds a smooth scroll feature to the top menu.
    //              SCROLL
    //LINKS must have SCROLL class and HREF with id of DIV below
function scrollLinks() {
    //SOURCE: https://howchoo.com/g/yjfjmty1zjb/how-to-animate-scroll-in-jquery
    //Takes the distance between current position & target position for a normalized scroll rate
    function getDuration(target) {
        //Set rate from .2 - 2 for drastic speed differences.
        var currentTop = $(window).scrollTop(), rate = 0.5, distance;
        distance = Math.abs(currentTop - target);
        return distance * rate;
    }

    $(".scroll").on('click', function () {
        var section = $(this).attr('href');
        var position = $(section).offset().top;
        $("HTML, BODY").animate({ scrollTop: position }, getDuration(position));
    });
}