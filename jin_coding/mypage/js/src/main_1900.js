(function($){

	var ft = $('.fixed_text');



 var win = $(window);

 win.on('scroll',function(e){

  var thisTop = $(this).scrollTop();

  ft.text(thisTop);

 });

//  ----------------------------------------

 var slideBox = $('.slide_box');

 win.on('scroll',function(e){
	 var thisTop = $(this).scrollTop();
	 
	 if(thisTop < 1021){
		slideBox.css({'position':'absolute','top':1121+'px','left':251+'px' });
	 }else if(thisTop < 3060){
		slideBox.css({'position':'fixed','top':97+'px','left':251+'px'});
	 }else{
		slideBox.css({'position':'absolute','top':3163+'px','left':251+'px' });
	 }




 	//if(thisTop >= 1041){
 	//	slideBox.css({'position':'fixed','top':97+'px','left':251+'px'});
 	//}else if(thisTop <= 2068){
 	//	slideBox.css({'position':'absolute','top':3163+'px','left':251+'px' });
 	//}else{
	//	slideBox.css({'position':'absolute','top':1121+'px','left':251+'px' });
	// }
 });



})(jQuery);