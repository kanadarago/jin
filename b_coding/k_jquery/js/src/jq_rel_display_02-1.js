
(function($){
	var vb = $('#viewBox');

	for(var i=0; i<5; i++){
		vb.append('<p><span>'+i+'</span></p>');
	}

	var p = vb.find('p');

	p.css({'width':'100px',
         'margin':'10px',
         'backgroundColor':'#a5c',
         'color':'#fff',
				 'float':'left'});
				 
  p.on('click',function(){
		$(this).animate({'backgroundColor':'#7af'},
		                 function(){
											 $(this).css({'border':'5px solid #333'});
										 });
	});
})(jQuery);