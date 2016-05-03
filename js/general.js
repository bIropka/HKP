/**
 * Created by Anna on 12.11.2015.
 */
$(document).ready(function() {
    $(".search-submit, .search").hover(
        function () {
            if($(window).width() > 1024) {
                $(".search").css({"width": "230", "padding": "0 10px", "opacity": "1"});
                $('.search-submit').css({"background-color": "#FF6633", "border-color": "white"});
            }
        },
        function () {
            if($(window).width() > 1024) {
                $(".search").css({"width": "0", "padding": "0", "opacity": "0"});
                $('.search-submit').css({"background-color": "rgba(0,0,0,0)", "border-color": "rgba(0,0,0,0)"});
            }
        }
    );

    $('section').horizon({swipe: false});

    //block position

    function topPos() {
        var windowWidth = $(window).width();
        var topPosition = ($(window).height() - $('.container').height() + 55) / 2;
        var leftPosition = (windowWidth - $('.container').width()) / 2;
        var leftPosFooter = (windowWidth - $('.main-footer').width()) / 2;
        $('.container').css({"top": topPosition,"left": leftPosition});
        $('.main-footer').css('left', leftPosFooter);

    };
    topPos();
    $( window ).resize(topPos);


    //flexslider
    (function() {
        // store the slider in a local variable
        var $window = $(window),
            flexslider;
        // tiny helper function to add breakpoints
        function getGridSize() {
            return (window.innerWidth < 600) ? 3 :
                (window.innerWidth < 900) ? 3 : 3;
        }
        $window.load(function() {
            $('.flexslider').flexslider({
                animation: "slide",
                animationLoop: false,
                itemWidth: 250,
                itemMargin: 0,
                slideshow: true,
                minItems: getGridSize(), // use function to pull in initial value
                maxItems: getGridSize() // use function to pull in initial value
            });
        });
    }());

    //flex-preview-slider
    $('.flex-preview-slider').flexslider();

    //person-information
    (function($){
        $(window).load(function(){
            $(".contentscroll").mCustomScrollbar({
                axis:"y", // vertical and horizontal scrollbar
                setWidth: '234',
                setHeight: '222',
                scrollbarPosition: "outside",
                scrollType: "stepped",
                scrollInertia: 0,
                mouseWheel: true
            });
        });
    })(jQuery);

    $('#person-list li').click(function(){
        var person = $('#person-list li').index(this);
        personNum = parseInt(person+1);
        $('.text-about').hide();
        var personBlock =  ".visible-personData-" + personNum;
        $(personBlock).show();
        $('#person-list li').removeClass('active-person');
        $(this).addClass('active-person');
    });

    //registration
    $('#page-reg span').click(function() {
        var k = $(this).parent();
        var i =  k.attr("class");
        if (i == 'active-li') {
            var dNumber = $(this).attr("data");
            dnNumber = parseInt(dNumber);
            switch (dnNumber) {
                case 0:  firstForm();
                    break;
                case 1:  nextFormReg();

                    break;
                case 2:  showRegFormNext();
                    break;
            }
        }

    });

    $('.info').click(function() {
        var dNumber = $(this).attr("data");
        dnNumber = parseInt(dNumber);
        var numberBlock =  ".info-block-" + dnNumber;
        if ($(numberBlock).hasClass('left-position') ) {
            $('.info-block').removeClass('left-position');
        } else if ( $('.info-block').hasClass('left-position')) {
            $('.info-block').removeClass('left-position');
            $(numberBlock).addClass('left-position');
        } else {
            $('.info-block').removeClass('left-position');
            $(numberBlock).addClass('left-position');
        }
    });


    $('.send-registration').click(function() {
        $('#section-section5').css('background','#26B355');
        $('.registration').css('display','none');
        $('.registration-finish').css('display','block');
    });


});
//registration
var navReg = document.getElementById('page-reg').getElementsByTagName('li');
function firstForm() {
    $('.form-block-1').css('left','0');
    $('.form-block-2, .form-block-3, .form-block-4').css('left','240px');
}
function nextFormReg() {
    $('.form-block-1').css('left','-251px');
    $('.form-block-2').css('left','0');
    $('.form-block-3, .form-block-4').css('left','251px');
    if ($(navReg[1]).hasClass('active-li'))  {
    } else {
        $(navReg[1]).addClass('active-li');
    }
}
function showRegFormNext() {
    $('.form-block-1, .form-block-2').css('left', '-251px');
    $('.form-block-3').css('left', '0');
    $('.form-block-4').css('left','251px');
    $(navReg[2]).addClass('active-li');
}
function showRegFormLust() {
    $('.form-block-1, .form-block-2, .form-block-3').css('left', '-251px');
    $('.form-block-4').css('left','0');
    $('.info-block').removeClass('left-position')
}

//menuScroll
function myscrollslider(i) {
    var scrollTopage = $('#section-section'+i).position().left;
    $('body,html').animate({'scrollLeft': scrollTopage}, 800);
    return false;
}