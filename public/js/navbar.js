$(window).on("scroll", function () {
  if ($(window).scrollTop()) {
    $("nav").addClass("black");
    $("nav").addClass("white");
  } else {
    $("nav").removeClass("black");
    $("nav").removeClass("white");
  }
});
