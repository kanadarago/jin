// join.js

(function($){
	var mobileArea = $('#mobileArea');
	var contry = [
		'대학민국 +82',
		'가나 +233',
		'가봉 +241',
		'가이아나 +592',
		'감비아 +220',
		'과테말라 +502',
		'괌 +1671',
		'그레나다 +1473',
		'그리스 +30',
		'기니 +224',
	];
	var contryText = '<option></option>';
	var valueResult;

	for(var i=0; i<contry.length; i++){
		mobileArea.append(contryText);
		mobileArea.find('option').eq(i).text(contry[i]);
		valueResult = contry[i].split('+')[1];
		// split은 쪼갠다는 뜻, ('+')를 기준으로 쪼개서 나라 / 숫자 로 쪼개짐
		// 즉 split을 한 값음 [나라,숫자] 로 배열이됨 거기서 0이 나라 1이 숫자
		// 이 값을 아래 속성 value에 대입하면 숫자만 value값이 됨
		mobileArea.find('option').eq(i).attr({value:valueResult});
		// attr은 속성을 뜻함 즉 옵션 i번째의 속성 value를 지칭하는것
	}

})(jQuery);