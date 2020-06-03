(function($){
var btn = $('.card').children('a');
var btnImg = btn.find('img');
var btnSrc = btnImg.attr('src')
var btnAlt = btnImg.attr('alt')

btn.on('mouseenter',function(){
	btn.children('img').attr({'src':'../img/funiture_2.png','alt':'신발이미지2'});
});

btn.on('mouseleave',function(){
	//btn.children('img').attr({'src':'../img/funiture.jpg','alt':'신발이미지1'});
	btn.children('img').attr({'src':btnSrc,'alt':btnAlt});
});

})(jQuery);