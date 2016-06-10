/*global $ */
var currentPage = 1;

function moveToPage(page) {
    "use strict";
    if (page < $('ul li').length + 1) {
        $('html,body').animate({
            scrollTop: $('ul li:nth-child(' + page.toString() + ')').offset().top
        }, 500);
    }
}

$(document).ready(function () {
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