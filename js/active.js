// Use custom JavaScript here

(function ($) {
    "use strict";

    // Owl carousel slider
    $('.owl-carousel.owl-slider').owlCarousel({
        items: 1,
        loop:true,
        margin:10,
        autoplay: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

    // Owl carousel testimonial
    $('.owl-carousel.owl-testimonial').owlCarousel({
        items: 1,
        loop:true,
        margin:10,
        dots:true,
        autoplay: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

    // counterup call
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    // magnificpopup
    $('.gallery .single-portfolio').magnificPopup({
        delegate: 'a',
        type: 'image'
    });

    $('.portfolio-content .home-two-single-portfolio').magnificPopup({
        delegate: 'a',
        type: 'image'
    });

     // scrollUp
    $.scrollUp({
        scrollText: '<i class=" ion-ios-arrow-thin-up"></i>'
    });

    // Preload
    $(window).on('load', function() {
        $(".preloader-wrapper").fadeOut();
    });

    // scrollspy
    $('body').scrollspy({ target: '#navbar-header' });

    // scrollit
    $.scrollIt();


    // For fixed Nav
    let navbar = $("#navbar-header");

    $(window).on('scroll', function() {
        var scroll = $(window).scrollTop();
        if (scroll < 10) {
            navbar.removeClass('fix-nav');
        } else {
            if (window.innerWidth >= 768) {
                navbar.addClass('fix-nav');
            }
        }
    });

    


    // Home two Owl carousel clients
    $('.owl-carousel.owl-clients').owlCarousel({
        items: 3,
        loop:true,
        margin:10,
        dots:false,
        autoplay: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });
    

})(jQuery);








