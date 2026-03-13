$(document).ready(function () {
  $(window).on("scroll", function () {
    var top = $(window).scrollTop();
    $("nav").toggleClass("aaa", top > 180);
  });
});
