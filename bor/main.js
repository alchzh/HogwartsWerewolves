var page = 1;


$(document).ready(function() {
    $('#down').click(moveDown);
    $('#up').click(moveUp);
});

function moveDown() {
    if (page < $('ul li').length){
        page += 1;
        $('html,body').animate({
           scrollTop: $('ul li:nth-child(2)').position().top
        },500);
    };
};

function moveUp() {
    if (page > 1){
        page -= 1;
        $('html,body').animate({
           scrollTop: $('ul li:nth-child(' + page.toString() + ')').offset().top
        },500);
    }; 
};
