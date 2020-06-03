// mousemotion.js
(function($){

	var mouseXYCheck = $('.mouse_xy');
	var mX = $('.m_x').find('span');
	var mY = $('.m_y').find('span');
	var mObject = $('.mouse_object');
	var winHalfWidth = $(window).outerWidth() / 2;
	var winHalfHeight = $(window).outerHeight() / 2;

	var x = 0;
	var y = 0;

	// clientX , clientY : 브라우저 페이지 기준 - 스크롤 x
	// pageX , pageY     : 브라우저 페이지 기준 - 스크롤 o
	// offsetX , offsetY : 이벤트 대상객체
	// screenX , screenY : 모니터 스크린 기준

	mouseXYCheck.on('mousemove',function(e){
		e.preventDefault();
		// console.log(e.clientX,e.clientY);
		// console.log(e.pageX,e.pageY);
		// console.log(e.offsetX,e.offsetY);
		// console.log(e.screenX,e.screenY);
		x = ( e.pageX - winHalfWidth ) / 30;
		y = -( e.pageY - winHalfHeight ) / 50;

		mObject.css({
			transform:'translate('+ x + '%,' + y +'%)\
			           rotateX('+ y*5 +'deg) rotateY('+ x*3 +'deg)'
		});
		
		// client 사용시 css의 z 인덱스값을 뒤로 밀어서 클릭이 안되게 하니 튀는 현상이 없어짐
		// 박스에 마우스가 올라갓을때 튀었음
		// page 사용시 튀는게 사라짐

		mX.text(x);
		mY.text(y);
	})

})(jQuery);