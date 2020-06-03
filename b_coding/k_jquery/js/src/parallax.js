// parallax.js
(function($){

	var win = $(window);
	var winW = win.innerWidth();
	var winH = win.innerHeight();

	var imgArr = [];
	var introBox = $('#introBox');
	var introDiv = introBox.children('div');

	var divImg = $('.img');
	var i=0;
	for(; i<divImg.length; i++){
		imgArr[i] = divImg.eq(i).offset().top;
	}
	//console.log(imgArr[i]);

	if(winW<640){
		introDiv.remove();
	}

	// win.on('resize', function(){
	// 	winW = win.innerWidth();
	// 	if(win<540){
	// 		introBox.children('div').remove();
	// 	}else{
	// 		location.reload();
	// 	}
	// })

	win.on('resize', function(){
		winW = win.innerWidth();
		(win<540)? introBox.children('div').remove() : location.reload();
	});
	// 삼항연산자로 바꾼것

	win.on('scroll',function(e){
		e.preventDefault();
		var winTop = win.scrollTop();
		var winTop2 = winTop + winH;
		// wintop2는 윈도우 하나값 전부터 움직이게 하기위해서
		// winH를 안빼면 딱 붙어서 움직임 거기에 +윈도우 높이를 한것
		// console.log(winTop);
		// 상단 #introBox-------------------------------------
		introDiv.eq(0).css({backgroundPositionY:winTop/16*16});
		introDiv.eq(1).css({backgroundPositionY:winTop/16*15});
		introDiv.eq(2).css({backgroundPositionY:winTop/16*14});
		introDiv.eq(3).css({backgroundPositionY:winTop/16*13});
		introDiv.eq(4).css({backgroundPositionY:winTop/16*9});
		introDiv.eq(5).css({backgroundPositionY:winTop/16*7});
		introDiv.eq(6).css({backgroundPositionY:winTop/16*6});
		introDiv.eq(7).css({backgroundPositionY:winTop/16*4});
		introDiv.eq(8).css({backgroundPositionY:winTop/16*0});
		// ---------------------------------------------------
		// 중간 기능 처리 #conBox------------------------------
		if(winTop2>imgArr[0]){
			//console.log('!!!!!!!!!!!!----------1');
			divImg.eq(0).css({backgroundPositionY:-(imgArr[0]-winTop2)/20+'%'});
			divImg.eq(0).next('p').css({top:-(imgArr[0]-winTop2)/5});
		}
		if(winTop2>imgArr[1]){
			console.log('!!!!!!!!!!!!----------2');
			divImg.eq(1).css({backgroundPositionY:-(imgArr[1]-winTop2)/20+'%'});
			divImg.eq(1).next('p').css({left:-(imgArr[1]-winTop2)/5});
		}
		if(winTop2>imgArr[2]){
			//console.log('!!!!!!!!!!!!----------3');
			divImg.eq(2).css({backgroundPositionY:-(imgArr[2]-winTop2)/20+'%'});
			divImg.eq(2).next('p').css({right:-(imgArr[2]-winTop2)/5});
		}
		if(winTop2>imgArr[3]){
			//console.log('!!!!!!!!!!!!----------4');
			divImg.eq(3).css({backgroundPositionY:-(imgArr[3]-winTop2)/20+'%'});
			divImg.eq(3).next('p').css({top:-(imgArr[3]-winTop2)/5});
		}
	})


})(jQuery);