//show slider on screen over 992px
(window.outerWidth <= 991   ) ?
    $('.header-slider').hide()
     :
    $('.header-slider').show();


//show header-mobile on screen below 992px
(window.outerWidth > 991) ?
    $('.header-mobile').hide()
    :
    $('.header-mobile').show();