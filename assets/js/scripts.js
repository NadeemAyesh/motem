/*global $, jQuery, console, alert, prompt */
$(document).ready(function () {
    "use strict";
    
    // Add slideDown animation to Bootstrap dropdown when expanding.
    $('.dropdown').on('show.bs.dropdown', function() {
        $(this).find('.dropdown-menu').first().stop(true, true).fadeIn();
    });

    // Add slideUp animation to Bootstrap dropdown when collapsing.
    $('.dropdown').on('hide.bs.dropdown', function() {
        $(this).find('.dropdown-menu').first().stop(true, true).fadeOut();
    });

    // testimonials Slider
    $('.testi-slider .owl-carousel').owlCarousel({
        rtl: true,
        loop: true,
        autoplay: true,
        margin: 15,
        responsiveClass: true,
        nav: false,
        dots: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
            },
            991: {
                items: 3,
            }
        }
    });

    $('.downToggle').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top }, 800);
    });
    
    // inialize animate WOW Js
    new WOW().init();

    // lazy loads elements with default selector as '.lozad'
    const observer = lozad(); 
    observer.observe();
});