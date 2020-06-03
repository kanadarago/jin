// jq_selector.js

// jquery 선택자
/**
* js의 선택자는 매우 복잡하게 만들어져 있기에 처음 접하기엔 거리감이 있어,
* css 선택자와 유사한 형태로 만들어져 있기에 접근하기 쉬운 라이브러리
* css 선택자에 $(' ') 형태만 감싸주면 동일하게 선택됨
*/

/*
$('h1').css({'width':'500px','height':'100px',backgroundColor:'#01f'});
$('h1 a').css({'display':'block','width':'400px','backgroundColor':'#fa0'});
$('h1 > a').css({'color':'#fff','textAlign':'center','margin':'auto'});
$('a[href="#"]').css({'padding':'0.5rem','textShadow':'0.2rem 0.2rem 0.2rem #000'});
*/

/**jquery 선택자
 * type선택자(tag를 직접 선택)
   ---->  $('html, body') , $('h1,h2,h3,h4,h5,h6')
 * 자식선택자
   ---->  $('ul>li') , $('ul').children('li')
 * 자손선택자
   ---->  $('ul li') , $('ul').find('li')
   
 * id/class 선택자
   ----> $('#box'), $('.box')
   
 * 형제선택자
 * ---->  $('dt+dd') , $('dt').next('dd')
 * ---->  $('dt~dd') , $('dt').nextAll('dd')
 * ---------------------
 * 이전형제              -----> $('dd').perv('dt')
    형에 해당하는 형제들   -----> $('dd').prevAll('dt')
    자신을 제외한 형제모두 -----> $('dt').siblings('dd')
 * --------------------------
 * 
 * 부모선택자
    바로위의 선택자 
     -----> $('#box').parent('div')
    조상격부모
     -----> $('#box').parents()       //부모격에 해당하는 모든
     -----> $('#box').parentsUntil()  //부모격에서 해당하는 요소 중 하나
 * nth 선택자(css에 일부 존재)  
  -----> $('li:nth-child(3)')    , $('li:nth(2)')
  -----> $('li:nth-of-type(3)')  , $('li:nth(2)')
  -----> $('li').eq(2)// 실제로 많이 쓰이는건 이거
	-----> $('li').odd() , $('li').even() //홀수냐 짝수냐 차이
	
 * 속성선택자
	-----> $('a[href="#"]')
	
 ===============================================
 * 해당위치를 파악하는 기능
		$('li').eq(0)   :li의 요소의 순번을 직접 지정
		$('li').index() :li의 순번을 확인하는 기능 
 
 * 이벤트가 발생되는(주체가되는) 요소
   $(this) 

 */


(function($){
	//자식선택자/자손선택자
	 $("ul").children("li").css({"color":"#77f"});
	 $("ul>li span").css({"fontSize":"1.5rem","fontWeight":"bold"});
	 var myCss = {"fontSize":"1.5rem","fontWeight":"bold"};
	 var myUl = $( 'ul' );
	 var myLi = myUl.children('li').find('span');
	// $("ul").children("li").find("span").css(myCss);
	// myLi.css(myCss);

	// $("ul>li span").odd(2).css({"fontSize": "0.2rem"});

	// $('ul>li span').index(2)
	// $("ul>li span").even(2).css({color:"red"});
	// $("ul>li span").eq(4).css({fontSize: "2.2rem",color:"blue"});
	// $('.four').css({fontWeight:"1000",color:"yellow"});
	//======================================================
	 
	$('.three').prev('li').css({"border":"1px solid #35f"});
	$('.three').prevAll('li').css({"backgroundColor":"#ccc"});
	$('.three').next('li').css({"border":"1px solid #f35"});
	$('.three').nextAll('li').css({"backgroundColor":"#aca"});

	$('.other_01').siblings().css({"marginBottom":"2rem"});

	$('.four').parentsUntil('body').css({"padding":"2rem",
	                         "backgroundColor":"#333",
													 "borderRadius":"3rem",
													 "border":"2px solid #fff"
													});
	
	var fourI = $('.four').parent().index();
	// console.log(fourI)
	// console.log( $('li').length );
	
	$('li').eq(fourI + 1).children('span').css({"textShadow":"0.2rem 0.2rem 0.2rem #faa"});
//eq는 주로 index라는 아이와 순서값을 파악해서 함께 사용하는 경우가 많음 
})(jQuery);