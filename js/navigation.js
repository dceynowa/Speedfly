(function ($) {
    "use strict"; // Start of use strict

    // Collapse the navbar when main-page is scrolled
    function collapseOnMainPage() {
        $(window).scroll(function () {
            if ($("#mainNav").offset().top > 100) {
                $("#mainNav").addClass("navbar-shrink");

                if (( window ).innerWidth < 992) {
                    $('.menu-logo').css({
                        'display': 'none'
                    });
                } else {
                    $('.menu-logo').css({
                        'display': 'inline'
                    });
                    $('.navbar-collapse').css({
                        'background': 'transparent'
                    });
                }
            } else {
                $("#mainNav").removeClass("navbar-shrink");
                $('.menu-logo').css({
                    'display': 'none'
                });
                if (( window ).innerWidth >= 992) {
                    $('.navbar-collapse').css({
                        'background': '#fff'
                    });
                }
            }
        });
    }

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top - 54)
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function () {
        $('.navbar-collapse').collapse('hide');
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#mainNav',
        offset: 54
    });

    //set position navbar on big screen
    if (( window ).outerWidth >= 992) {
        $(".menu-container").addClass("container");
    } else {
        $(".menu-container").removeClass("container");
    }

    //add hover dropdown menu
    $('ul.navbar-nav li.dropdown').hover(function () {
        $(this).find('.dropdown-menu').stop(true, true).fadeIn(200);
    }, function () {
        $(this).find('.dropdown-menu').stop(true, true).fadeOut(200);
    });

    // navigation in different pages
    if ($('body').hasClass('main-page')) {
        collapseOnMainPage();
    } else {
        if (!$('#mainNav').hasClass('navbar-shrink')) {
            $('#mainNav').addClass('navbar-shrink')
        }
        $('.menu-logo').css({
            'display': 'inline'
        });
        // change anchor in menu logo
        $('.navbar-brand').attr('href', 'index.html')
    }


})(jQuery); // End of use strict
