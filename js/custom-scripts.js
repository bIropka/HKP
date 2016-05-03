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

    /* members photo animation */
    $('.photo-member').hover(
        function(){
            if($(window).width() > 1024) {
                $(this).find('.hidden-layer').stop().slideToggle(400);
            }
        }
    );

    $('.photo-member').click(function() {
            if($(window).width() < 1024) {
                $('.hidden-layer').stop().slideUp(400);
                $(this).find('.hidden-layer').stop().slideDown(400);
            }
        }
    );
    /* the end of the members photo animation */

});

