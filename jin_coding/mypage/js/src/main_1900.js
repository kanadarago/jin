(function($){

	var ft = $('.fixed_text');



 var win = $(window);

 win.on('scroll',function(e){

  var thisTop = $(this).scrollTop();

  // ft.text(thisTop);

 });

//  슬라이드 고정----------------------------------------

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

// 슬라이드 흘러가게하기------------------------------------------------------

win.on('scroll',function(e){
	var thisTop = $(this).scrollTop();
	ft.text(thisTop);
	var n=0;
	if(1100>=thisTop){
		slideBg.css({'marginLeft': 0+'px'});
	}else if(thisTop<=3095){
		var marg = n+thisTop-1100;
		slideBg.css({'marginLeft': -marg+'px'});
	}else if(thisTop<=5844){
		slideBg.css({'marginLeft': -1995+'px'});
	}
});

// 슬라이드 나타나게 하기 -------------------------
var slideArea = $('.slide_area');
var slideLine = $('.slide_line');
var slideA = $('.slide_a');
var slideA02 = $('.slide_a_02');

win.on('scroll',function(e){
	var thisTop = $(this).scrollTop();
	
	if(thisTop >= 700){
		slideA.fadeIn();
	}else if(thisTop < 700){
		slideA.fadeOut();
	}
});

win.on('scroll',function(e){
	var thisTop = $(this).scrollTop();
	
	if(thisTop >= 3400){
		slideA02.fadeIn();
	}else if(thisTop < 3400){
		slideA02.fadeOut();
	}
});

// jin 글자 써지게하기-----------------------
var win   = $(window);
var winH  = win.outerHeight();
var imgArea = $('.jin_box');
var stT01_Img = imgArea.find('img');
var spT01Offset = imgArea.offset().top;

stT01_Img.css({position:'absolute',top:0, left:0, width:'100%', height:'auto'});

var imgP = [];
for(var k=0; k < 39; k++){		imgP[k] = -177 * k;	}

var l=0;
var Go= {};
var Got = true;

// var SetOne = function (){
// 	if(Git){
// 		Git = false;
// 		Gi = setInterval(function(){
// 					l += 1;
// 					stT01_Img.css({top:imgP[l]});
// 					if(l > 39) { clearInterval(Gi); }
// 					}, 40);				
// 	}
// };

// SetOne();

var SetI = function (){
	if(Got){
		Got = false;
		Go = setInterval(function(){
					l += 1;
					stT01_Img.css({top:imgP[l]});
					if(l > 39) { clearInterval(Go); }
					}, 40);				
	}
};

SetI();

// win.on('scroll', function(e){
// 	var st = $(this).scrollTop();
// 	if(st + (winH/2) >= spT01Offset){
// 		SetI();
// 	}else if(st < winH/2){
// 		clearInterval(Go);
// 		l=0;
// 		stT01_Img.css({top:imgP[l]});
// 		Got = true;
// 	}
// });

})(jQuery);