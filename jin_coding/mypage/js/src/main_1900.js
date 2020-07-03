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
	 
	 if(thisTop < 1162){
		slideBox.css({'position':'absolute','top':1160+'px','left':251+'px' });
		// slideBg.css({'marginLeft': 0+'px'});
	 }else if(thisTop < 3162){
		slideBox.css({'position':'fixed','top':0+'px','left':251+'px'});
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
		slideBg.css({'marginLeft': -marg*2+'px'});
	}else if(thisTop<=5844){
		slideBg.css({'marginLeft': -4000+'px'});
	}
});

var slideBox02 = $('.slide_box_02');
var slideBg02 = $('.slide_bg_02');

win.on('scroll',function(e){
	var thisTop = $(this).scrollTop();
	ft.text(thisTop);
	var k=0;
	if(3800>=thisTop){
		slideBg02.css({'marginLeft': 0+'px'});
	}else if(thisTop<=4300){
		var marg = k+thisTop-3800;
		slideBg02.css({'marginLeft': -marg/1.4+'px'});
	}else if(thisTop<=5844){
		slideBg02.css({'marginLeft': -357.1428+'px'});
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
		slideA.slideDown(1000);
	}else if(thisTop < 700){
		slideA.fadeOut();
	}
});

win.on('scroll',function(e){
	var thisTop = $(this).scrollTop();
	
	if(thisTop >= 3400){
		slideA02.slideDown(1400);
	}else if(thisTop < 3400){
		slideA02.slideUp();
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

// 배경 데코 글자 나타나게 하기 ---------------

var uiDeco1 =$('.ui_deco_01');
var uiDeco2 =$('.ui_deco_02');
var uiDeco3 =$('.ui_deco_03');
var uiDeco4 =$('.ui_deco_04');

var edDeco01 = $('.ed_deco_01');
var edDeco02 = $('.ed_deco_02');

var webDeco01 = $('.web_deco_01');
var webDeco02 = $('.web_deco_02');
var webDeco03 = $('.web_deco_03');

win.on('scroll',function(e){
	var thisTop = $(this).scrollTop();
	if(thisTop < 600){
		uiDeco1.fadeOut();
	}else if(thisTop > 800){
		uiDeco1.fadeOut();
	}else{
		uiDeco1.fadeIn();
	};

	if(thisTop < 1100){
		uiDeco2.fadeOut();
		uiDeco4.fadeOut();
	}else if(thisTop > 1300){
		uiDeco2.fadeOut();
		uiDeco4.fadeOut();
	}else{
		uiDeco2.fadeIn();
		uiDeco4.fadeIn();
	};
	
	if(thisTop < 1300){
		uiDeco3.fadeOut();
	}else if(thisTop > 1500){
		uiDeco3.fadeOut();
	}else{
		uiDeco3.fadeIn();
	};

	if(thisTop < 2000){
		edDeco01.fadeOut();
	}else if(thisTop > 2200){
		edDeco01.fadeOut();
	}else{
		edDeco01.fadeIn();
	};

	if(thisTop < 2100){
		edDeco02.fadeOut();
	}else if(thisTop > 2300){
		edDeco02.fadeOut();
	}else{
		edDeco02.fadeIn();
	};

	if(thisTop < 3000){
		webDeco01.fadeOut();
	}else if(thisTop > 3200){
		webDeco01.fadeOut();
	}else{
		webDeco01.fadeIn();
	};

	if(thisTop < 3300){
		webDeco02.fadeOut();
	}else if(thisTop > 3500){
		webDeco02.fadeOut();
	}else{
		webDeco02.fadeIn();
	};

	if(thisTop < 3500){
		webDeco03.fadeOut();
	}else if(thisTop > 3700){
		webDeco03.fadeOut();
	}else{
		webDeco03.fadeIn();
	};
});

})(jQuery);