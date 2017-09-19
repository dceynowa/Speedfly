(function ($) {
    $(window).on('load', function () {
        $('.loader-content').fadeOut();
        $('.loader').delay(350).fadeOut('slow');
        $('body').delay(350).css({'overflow': 'visible'});
    });
})(jQuery)