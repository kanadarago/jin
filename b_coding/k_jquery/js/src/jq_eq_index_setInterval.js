// jq_eq_index_setInterval.js

(function($){

	var indi = $('.indicator');
	var indiLi = indi.find('li');
	var indiLink = indiLi.children('a');
	var addView  = $('.add_view_wrap');
	var timed    = 500;

	var indiNarr = $('.indi_narr');
	var indiNarrLi = indiNarr.find('li');

	var adViewMv = function(i){
		var mtPer = -1 * 100;
		// --------------------------
		addView.stop().animate({'marginLeft':myPer + '%'}, timed);
		// ---------------------------
		// $(this).parent('li').addClass('action');
		indiLi.removeClass('action');
		indiLi.eq(i).addClass('action');
		// indiLi.eq(i).siblings('li').addClass('action');
		// ------------------------------
		indiNarrLi.removeClass('action');
		indiNarrLi.eq(i).addClass('action');
		// indiNarrLi.eq(i).siblings().removeClass('action');
	};

	indiLink.on('focus', function(e){
		e.preventDefault();
		var i = $(this).parent('li').index();
		adViewMv(i);
// ===============================================================

	indiNarrLi.on('click', function(e){
		e.preventDefault();
		var i = $(this).index();
		adViewMv(i);
	});

	setInterval(function(){
		?.animate{},5000;
	});

})(jQuery);