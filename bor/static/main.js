/*global $ */
"use strict";

var scroll = true;

function update(page) {
    if (page === 1) {
        $('#up').hide();
    } else {
        $('#up').show();
    }
    if (page === 10) {
        $('#down').hide();
    } else {
        $('#down').show();
    }
}

function moveToPage(page, instant) {
    if (page <= $('ul li').length) {
        $('html,body').animate({
            scrollTop: $('ul li:nth-child(' + page.toString() + ')').offset().top
        }, instant ? 1 : 500, "swing", function () {
            window.location.hash = page.toString();
        });
    }
    update(page);
}


$(document).ready(function () {
    var hash = parseInt(window.location.hash.substring(1));
    var currentPage = hash > 0 && hash < 11 ? hash : 1;
    function up () {
        if (currentPage > 1) {
            currentPage -= 1;
            moveToPage(currentPage);
        }
    }
    function down() {
        if (currentPage < $('ul li').length) {
            currentPage += 1;
            moveToPage(currentPage);
        }
    }
    moveToPage(currentPage, true);
    $('#down').click(down);
    $('#up').click(up);
    $(document).keydown(function(e){
        switch (e.which) {
            case 38: up();
            case 40: down();
        }
    });
});