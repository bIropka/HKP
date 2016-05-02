$(document).ready(function() {

    /* slider popular articles*/
    $('.slider-popular-articles').slick({
        vertical: true,
        verticalSwiping: true,
        slidesToShow: 4,
        appendArrows: '.control-popular-articles',
        prevArrow: '.control-popular-articles .control-left',
        nextArrow: '.control-popular-articles .control-right',
        autoplay: 5000
    });
    /* the end of popular articles controls */

    /* slider 'banners'*/
    $('.slider-banners').slick({
        appendArrows: '.control-slider-banners',
        prevArrow: '.control-slider-banners .control-left',
        nextArrow: '.control-slider-banners .control-right',
        autoplay: 5000

    });
    /* the end of the slider 'banners' */

});

