$(document).ready(function(){
	  $(window).scroll(function(){
	   var top = $(window).scrollTop();
	   var find_class_small = $.contains('#nav', '.aaa');
	 
	   if(top > 180 && find_class_small == false) {
	    $('nav').addClass('aaa');
	   }
	   else {
	    $('nav').removeClass('aaa');
	   }
	 
	  });
	});