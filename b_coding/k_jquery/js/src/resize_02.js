// resize_02.js
(function($){
	var win = $(window);
	var headBox = $('#headBox');
	var gnbBox = $('#gnb');
	var gnbMenu = $('#gnbBox');
	var gnbBtn = gnbMenu.find('.gnb_view_btn');
	var gnbList = gnbMenu.find('.gnb_list');

	// 디바이스 환경
	var mob700 = function(){

	};
	var tablet1400 = function(){

	};
	var pcfull = function(){

	};


// ------------------------------
	win.on('resize',function(){
		//버튼클릭
		gnbBox.on('click',[button],function(e){
			e.preventDefault();
			gnbList.stop().slideToggle			
		});h
		var nowWinW = win.width();
		var deviceWidthCheck = winW !== nowWinW;
		if(deviceWidthCheck){
			location.reload();
		}
	});
})(jQuery);