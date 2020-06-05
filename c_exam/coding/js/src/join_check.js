// join_check
(function($){
	var ac = $('#allCheck');
	var termsService;

	var ts = $('#termsService');
  var tp = $('#termsPrivacy');
  var tl = $('#termsLocation');
  var ta = $('#termsAlert');

	var tsTerms = ts.nextAll('.terms').eq(0);
	var tpTerms = tp.nextAll('.terms').eq(0);
	var tlTerms = tl.nextAll('.terms').eq(0);
	var taTerms = ta.nextAll('.terms').eq(0);

	// $.ajax({
	// 	url:'../terms/termsService.html',
	// 	dataType:'text',
	// 	async:false,
	// 	success: function(data){
	// 		termsService = data;
	// 		return termsService;
	// 	}
	// });

	// ts.append(termsService);

	tsTerms.load('../terms/termsService.html');
	tpTerms.load('../terms/termsService.html');
	tlTerms.load('../terms/termsService.html');
	taTerms.load('../terms/termsService.html');
	// ===================================================================
	var inputCheckList = [ts,tp,tl,ta];

	ac.on('click',function(e){
		// e.preventDefault();
		// 값을 보는것이기 때문에 콜론 붙여야함
		var acAttr = ac.is(':checked');
		if(acAttr){
			ac.attr({'checked':true});
			//ac.attr({'checked':'checked'});
			ts.attr({'checked':true});
      tp.attr({'checked':true});
      tl.attr({'checked':true});
      ta.attr({'checked':true});
		}else{
			ac.attr({'checked':false});
			//ac.removeAttr('checked');
			ts.attr({'checked':false});
			tp.attr({'checked':false});
			tl.attr({'checked':false});
			ta.attr({'checked':false});
		}
		console.log(acAttr);
	});

	$('input[type="checkbox"]').on('click',function(){
		// console.log($(this));
		var nowCk = $(this).is(':checked');
		if(nowCk === false){
			ac.attr({'checked':false});
		}
	})

})(jQuery);