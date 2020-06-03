// mouseEvent_mousewheel.js
(function($){

	var colorArr = ['#fa0','#acf','#cfa','#5df','#fac'];
	var n = 0;
	
	var mw =$('.mw');
	mw.css({overflow:'hidden'});
	var mwUl = mw.find('ul');
	var mwLi = mwUl.find('li');
	for(var i=0; i<mwLi.length; i++){
		mwLi.eq(i).css({backgroundColor:colorArr[i]});
	}

	var mouseOk = true;
//파이어폭스는 마우스휠 기능이 없어서 DOMMouseScroll 써줘야함
	mw.on('mousewheel DOMMouseScroll',function(e){
		//console.log(e.type)
		//console.log(e) //콘솔창에 이벤트값 쭈르륵 나옴
		//console.log(e.originalEvent.wheelDelta);
		//console.log(e.originalEvent.detail);
		if(mouseOk){
			mouseOk = false;
			var evt = e.originalEvent;
			var mouseResult;
			if(evt.wheelDelta){
				//mouseResult = 'wheelDelta가 존재한다';
				mouseResult = -evt.wheelDelta;
			}else{
				//mouseResult = 'wheelDelta가 없다';
				mouseResult = evt.detail * 40;
				//휠델타가 없는 곳에 디테일을 주고 값을 맞춰준것
				//휠을 움직일때 나오는 값을 말하는 것
			}
		}
		//console.log(mouseResult);
		if(mouseResult<0 && n>0){
		   n -= 1;
	   }else if(mouseResult>0 && n<colorArr.length){
	   	 n += 1;
	   }
  // mw.text(colorArr[n]);
	// mw.stop().animate({backgroundColor:colorArr[n]},300,function(){
	// 	mouseOk = true;
	// });

	console.log(n);
	mwUl.stop().animate({marginLeft:n*-100+'%'},200,'easeInExpo',function(){
		mouseOk = true;
	})
	});
		//setTimeout(function(){mouseOk = true;},100);});

})(jQuery);