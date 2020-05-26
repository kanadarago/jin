(function($){
	var wrap = $('#wrap');
	var headBox = $('#headBox');

	$(document).on('scroll',function(){
		var docST = $(document).scrollTop(); // 스크롤의 위치 파악

		if(docST > 230){
			headBox.stop().animate({'backgroundColor':'#333'},300);
		}else{
			headBox.stop().animate({'backgroundColor':'transparent'},300);
		}
	});

	var scrollBtn = $('.top_btn');
	var topBtn = scrollBtn.find('button');
	
	$(document).on('scroll',function(){
		var docST = $(document).scrollTop();

		if(docST > 300){
			scrollBtn.stop().fadeIn(300);
		}else{
			scrollBtn.stop().fadeOut(300);
		}
	});

	 topBtn.on('click',function(e){
	 	e.preventDefault();
		 $('html, body').animate({scrollTop: 0});
	 });
	

})(jQuery);