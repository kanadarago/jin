(function($){

	var ft = $('.fixed_text');



 var win = $(window);

 win.on('scroll',function(e){

  var thisTop = $(this).scrollTop();

  ft.text(thisTop);

 });

//  ----------------------------------------

 var slideBox = $('.slide_box');
 var slideBg = $('.slide_bg');

 win.on('scroll',function(e){
	 var thisTop = $(this).scrollTop();
	 
	 if(thisTop < 1100){
		slideBox.css({'position':'absolute','top':1160+'px','left':251+'px' });
		// slideBg.css({'marginLeft': 0+'px'});
	 }else if(thisTop < 3100){
		slideBox.css({'position':'fixed','top':60+'px','left':251+'px'});
		// slideBg.stop().animate({'marginLeft': -2289+'px'});
	 }else{
		slideBox.css({'position':'absolute','top':3160+'px','left':251+'px' });
		// slideBgstop().animate({'marginLeft': -2289+'px'});
	 }
 });

// ------------------------------------------------------

win.on('scroll',function(e){
	var thisTop = $(this).scrollTop();
	var n=0;
	if(1100>thisTop){
		slideBg.stop().animate({'marginLeft': 0+'px'});
	}else if(thisTop<=3100){
		var marg = n+thisTop-2001;
		slideBg.stop().animate({'marginLeft': -marg+'px'});
	}else if(thisTop<=5844){
		slideBg.stop().animate({'marginLeft': -1289+'px'});
	}
});


})(jQuery);