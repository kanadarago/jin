// mousewheelPage.js
(function($){

	var win = $(window);
	var winH = win.innerHeight();
	$('#wrap').css({height:'auto'});
	$('.page').css({height:winH});

	var n = 0;

	win.on('mousewheel DOMMouseScroll',function(e){
		var evt = e.originalEvent;
		var result;
		(evt.wheelDelta)? result = -evt.wheelDelta : result = evt. ;
	})

})(jQuery);