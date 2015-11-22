$(document).ready(function() {
    $('html body').scrollTop($('.first').offset().top);
    $('#down').click( function() {
        $('html,body').animate({
           scrollTop: $(".second").offset().top
        },500);
    });
    $('#up').click( function() {
        $('html,body').animate({
           scrollTop: $(".first").offset().top
        },500);
    });
});