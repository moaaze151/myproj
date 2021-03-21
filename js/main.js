/*global $, alert,console */
// $(document).ready(function{
// })

$(function () {
    
    'use strict';
    
    // Adjust header Height
    var windowH = $(window).height();
    $('header, .overlay').height(windowH);
    $(window).resize(function(){
        $('header, .overlay').height(windowH);
    });
    
    // add hover color #1abc9c on navbar element
    $('.navbar-light .navbar-nav .nav-item a').click(function () {
        // $('.active').removeClass('active');
        // $(this).addClass('active');
        $(this).parent().addClass('active').siblings().removeClass('active');
    });
    
    // traversing sections
    $('.nav-item a').click(function(){
        $('html, body').animate({
            scrollTop: $($(this).data('value')).offset().top - 10 ,
        },300)
    });

    $(window).on(function(){
        $('.overlay-images').height($('.parent-overlay img').height());
    });


    (function autoSlider() {
        
        $(".slidering .active").each(function() {

            if (!$(this).is(':last-child')) {

                $(this).delay(3000).fadeOut(1000,function(){

                    $(this).removeClass('active').next().addClass('active').fadeIn();
                    autoSlider();
                });

            }else{
                $(this).delay(3000).fadeOut(1000,function(){
                    $(this).removeClass('active');
                    $('.slidering div').eq(0).addClass('active').fadeIn();
                    autoSlider();
                })

            }
        })
    }());

    // staaaaaaaaart shuffel
    $('.shuffel ul li').on('click', function(){

        $(this).addClass('active').siblings().removeClass('active');

        $('img.shuf-op').removeClass('shuf-op');

        $($(this).data('shuffel')).addClass('shuf-op');
        
    }); 

    // // Trigger niceScrool
    // $("html").niceScroll({
    //     cursorcolor: '1abc9e'
    // });
});


