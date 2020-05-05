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

    $('.menu-btn').on('click', function () {
        if ($('.side-menu').hasClass('show')) {
            $('.side-menu').removeClass('show');
        } else {
            $('.side-menu').addClass('show');
        }

        $('.close-menu').on('click', function () {
            $('.side-menu').removeClass('show');
        });
    });

    $('.need-item').on('mouseenter', function () {
        $(this).find('.need-text p').slideDown();
        $(this).on('mouseleave', function () {
            $(this).find('.need-text p').slideUp();
        });
    });

    let paginationLeftPos = "20px";
    let paginationOpacity = 0;
    let checkPaginationClick = 0;

    $(".pagination-page-number").click(function () {
        $(".pagination-page-number").removeClass("active");
        $(this).addClass("active");
        paginationLeftPos = $(this).prop("offsetLeft") + "px";
        paginationOpacity = 1;
        checkPaginationClick = 1;

        $(".pagination-hover-overlay").css({
            left: paginationLeftPos,
            backgroundColor: "#02B3FA",
            opacity: paginationOpacity
        });

        $(this).css({
            color: "#fff"
        });

    });

    $(".pagination-page-number").hover(
        function () {
            paginationOpacity = 1;
            $(".pagination-hover-overlay").css({
                backgroundColor: "#02B3FA",
                left: $(this).prop("offsetLeft") + "px",
                opacity: paginationOpacity
            });


            $(".pagination-page-number.active").css({
                color: "#333d45"
            });


            $(this).css({
                color: "#fff"
            });

        },
        function () {
            if (checkPaginationClick) {
                paginationOpacity = 1;
            } else {
                paginationOpacity = 0;
            }

            $(".pagination-hover-overlay").css({
                backgroundColor: "#02B3FA",
                opacity: paginationOpacity,
                left: paginationLeftPos
            });


            $(this).css({
                color: "#333d45"
            });


            $(".pagination-page-number.active").css({
                color: "#fff"
            });

        });
    
    // inialize animate WOW Js
    new WOW().init();

    // lazy loads elements with default selector as '.lozad'
    const observer = lozad(); 
    observer.observe();
});