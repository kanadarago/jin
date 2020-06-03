// jq_display.js

(function($){

	var dpBox = $('.display_box');
	var btn = $('.btn').children('button');
	console.log( btn.length );

	dpBox.css({'display':'none'});

	/*
	$('a').on('click',function(evt){
		evt.preventDefault();
	});
  preventDefault():선택자내부 요소에 링크/버튼 등의 요소가 존재하면, 각자 요소에
                   따른 기능을 수행하게 된다. 이때 이러한 기능을 사전에 동작하지
  								 못하게 하기위해 쓰이는 메소드.
  */							 
	// display:block
	btn.eq(0).on('click',function(e){
		e.preventDefault();

		dpBox.css({'display':'block'});
	});

	// display:none
	btn.eq(1).on('click',function(e){
		e.preventDefault();

		dpBox.css({'display':'none'});
	});
	// display:my_toggle
	btn.eq(2).on('click',function(e){
		e.preventDefault();
		var dpv= dpBox.css('display');
		
		if(dpv === 'block'){
			dpBox.css({'display':'none'});
		}else{
			dpBox.css({'display':'block'});
		}
	});
// ============================================================

	//show
	btn.eq(3).on('click',function(e){
		e.preventDefault();
		dpBox.show();
	});
	//hide
	btn.eq(4).on('click',function(e){
		e.preventDefault();
		dpBox.hide();
	});
	
	//toggle
	btn.eq(5).on('click',function(e){
		dpBox.toggle(500);
	});
//=================================================================
  btn.eq(6).on('click',function(e){
		e.preventDefault();
		dpBox.stop().fadeIn(1000);
	});
	btn.eq(7).on('click',function(e){
		e.preventDefault();
		dpBox.stop().fadeOut();
	});
	btn.eq(8).on('click',function(e){
		e.preventDefault();
		dpBox.stop().fadeToggle(500);
	});
	//애니메이션 기능이 있는 건 .stop()을 붙여주면 마지막 클릭만 기억하고 남은 애니메이션은 날려버림.

	//==========================================================
	btn.eq(9).on('click',function(e){
		e.preventDefault();
		dpBox.stop().slideDown();
	});
	btn.eq(10).on('click',function(e){
		e.preventDefault();
		dpBox.stop().slideUp();
	});
	btn.eq(11).on('click',function(e){
		e.preventDefault();
		dpBox.stop().slideToggle(200);
	});
//==========================================
btn.eq(12).on('click', function(e){
	e.preventDefault();
	dpBox.addClass('action');
});
btn.eq(13).on('click', function(e){
	e.preventDefault();
	dpBox.removeClass('action');
});


btn.eq(14).on('click', function(e){
	e.preventDefault();
	// var dpA = dpBox.attr('class');
	// var dps = dpA.split(' ');
	// console.log(dps);
	// if(dps[1] == 'action')
	
	var dpAc = dpBox.hasClass('action');  // class이름('action')의 유무를 판단
	if(dpAc === false){
		dpBox.addClass('action');
	}else{
		dpBox.removeClass('action');
	}

});

})(jQuery);