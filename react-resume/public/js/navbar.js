$(document).ready(function() {
    $(".menu-icon").on("click", function() {
        $("nav ul").toggleClass("showing");
    });
});

$(window).on("scroll", function() {
    if($(window).scrollTop()) {
        $('nav').addClass('black');
        $('nav').addClass('white');
    }
    else {
        $('nav').removeClass('black');
        $('nav').removeClass('white');
    }
});

$(document).ready(function() {
    $('nav li a').on('click', function(){
        $("nav ul").toggleClass("showing");
    });
});
