/*global $ */
"use scrict";

function moveToPage(page, instant) {
    if (page < $('ul li').length + 1) {
        $('html,body').animate({
            scrollTop: $('ul li:nth-child(' + page.toString() + ')').offset().top
        }, instant ? 0 : 500, "swing", function () {
            window.location.hash = page.toString();
        });
    }
}

$(document).ready(function () {
    var hash = parseInt(window.location.hash.substring(1));
    var currentPage = hash > 0 && hash < 11 ? hash : 1;
    moveToPage(currentPage, true);
    $('#down').click(function () {
        if (currentPage < $('ul li').length) {
            currentPage += 1;
            moveToPage(currentPage);
        }
    });
    
    $('#up').click(function () {
        if (currentPage > 1) {
            currentPage -= 1;
            moveToPage(currentPage);
        }
    });
});