
( function( $ ) {
$(window).scroll(function() {
  $(".slideanim").each(function(){
    var pos = $(this).offset().top;

    var winTop = $(window).scrollTop();
    if (pos < winTop + 600) {
      $(this).addClass("slide");
    }
  });
});
})( jQuery );

( function( $ ) {
$(window).scroll(function() {
  $(".sL").each(function(){
    var pos = $(this).offset().top;

    var winTop = $(window).scrollTop();
    if (pos < winTop + 600) {
      $(this).addClass("slideL");
    }
  });
});
})( jQuery );


( function( $ ) {
$(window).scroll(function() {
  $(".sP").each(function(){
    var pos = $(this).offset().top;

    var winTop = $(window).scrollTop();
    if (pos < winTop + 600) {
      $(this).addClass("slideP");
    }
  });
});
})( jQuery );