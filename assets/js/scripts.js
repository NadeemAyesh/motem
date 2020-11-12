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
            $('.menu-overlay').fadeOut('slow');
        } else {
            $('.side-menu').addClass('show');
            $('.menu-overlay').fadeIn('slow');
        }

        $('.close-menu, [data-close="menu"], .menu-overlay').on('click', function () {
            $('.side-menu').removeClass('show');
            $('.menu-overlay').fadeOut('slow');
        });
    });

    // $('.need-item').on('mouseenter', function () {
    //     $(this).find('.need-text p').slideDown();
    //     $(this).on('mouseleave', function () {
    //         $(this).find('.need-text p').slideUp();
    //     });
    // });

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
    
    
    //data-tab="#profile"
    $('[data-tab-show="#profile"]').on('click', function () {
        $('.login-register').on('show.bs.modal', function (e) {
            // $('#home').tab('dispose');
            $('#profile-tab').tab('show');

        });
    });

    $('[data-tab-show="#login"]').on('click', function () {
        $('.login-register').on('show.bs.modal', function (e) {
            // $('#home').tab('dispose');
            $('#home-tab').tab('show');

        });
    });

    $('.remove-item').on('click', function (e) {
        e.preventDefault();
        $(this).parent().parent().fadeOut();
    });

    $('.minus-item').on('click', function () {
        var val = parseInt($(this).parent().find('input').val()) ;
        $(this).parent().find('input').val(val -= 1);
    });

    $('.plus-item').on('click', function () {
        var val = parseInt($(this).parent().find('input').val()) ;
        $(this).parent().find('input').val(val += 1);
    });

    if ($('.js-example-basic-single').length > 0) {
        $('.js-example-basic-single').select2();
    }

    if ($('.js-example-basic-single-no-search').length > 0) {
        $('.js-example-basic-single-no-search').select2({ minimumResultsForSearch: -1 });
    }

    
    
    
    // inialize animate WOW Js
    new WOW().init();

    // lazy loads elements with default selector as '.lozad'
    const observer = lozad(); 
    observer.observe();
    $('[data-toggle="tooltip"]').tooltip();

    $('[data-toggle="popover"]').popover();


    $('#pills-tab li a').on('show.bs.tab', function (e) {
        // alert('jih');
        
        console.log(e.target.hash + " #defaultOpen"); 
        $(e.target.hash + " .tablinks:first-child").addClass('active');
        $(e.target.hash + ' .tabcontent').first().addClass('shown')
        // document.getElementById(e.target.hash).style.display = "block";
    });

    $('.example-popover:not(.inmodal)').click(function () {
        $('#backdrop').toggleClass('modal-backdrop in');
    });

    $(document).on('click', '.modal-backdrop', function (event) {
        $('.modal-backdrop').toggleClass('modal-backdrop in');
        // console.log($(event.target))
        // if (!$(event.target).closest('.example-popover').length) {
        //     $('#backdrop').toggleClass('modal-backdrop in');
        // }
    });

    // $('.example-popover').popover('show')

    $(".fab-btn").tooltip('show');
    $('.red-tooltip').on('click', function () {
        $('.fab-select').slideDown();
        $('.close-select').on('click', function () {
            $('.fab-select').slideUp();
        })
    })
});


function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.remove('shown');
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).classList.add('shown');
    evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
// document.getElementById("defaultOpen1").click();
