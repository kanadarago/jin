join check 가입창 만들기 메모0605





/* display none을 하면 존재자체를 없애버리기 때문에 체크는되지만 인식이 안될 수 있음. 

그래서 우리가 하는 hidden 클래스 처럼 안보이게만 해줘야함

그냥 클래스 히든을 줘도 괜찮음 */

input[type="checkbox"] {

 position: absolute; z-index: -1; top: 0; left: 0; overflow: hidden;

}

/* 포커스를 강제로 넣을 수 있음 인풋에 줬기때문에 포커스+엔터시 클릭도 가능 */

input[type="checkBox"]:focus+.check_area>label{

 outline:2px dotted #00c850;

}

/* input[type="checkBox"]은 속성선택자, 체크박스의 타입을 가진것을 고르는것 */

/* input[type^="t"]라고 하면 ^는 시작이란 뜻이라 t로 시작하는걸 말하고 */

/* input[type$="t"]라고 하면 $는 끝이란 뜻이라 t로 끝나는걸 말한다 */

/* a[href*="/"]라고 하면 *는 모든을 뜻하기 때문에 /가 들어가는 모든것을 지칭하는것 */

/* a + .check 라고 쓰면 a의 형제인 클래스 check를 뜻한다 */

/* 안에 있는은 띄워서 쓰고 자식은 > 로 형제는 +로 */







.check_area {

 width: 100%; height:auto; min-width: 26px;

 font-size: 1rem; color:#333; font-weight: bold;

 word-break:keep-all;

}

/* word-break: keep-all;은 단어위주로 줄바꿈 */





*

.require_check .check_area > label:after { content:"(필수)"; font-size: 0.8rem; color: #070;}

.option_check .check_area > label:after { content:"(선택)"; font-size: 0.8rem; color: #777;}

 이렇게 쓰면 본문에는 필수,선택을 안써도 됨. css에서 글자를 추가하는 것

 */



.require_check .check_area strong{font-weight: normal; font-size: 0.8rem; color: #00c850;}

.option_check .check_area strong{font-weight: normal; font-size: 0.8rem; color: #8e8e8e;}





#### js



// 값을 보는것이기 때문에 콜론 붙여야함

  var acAttr = ac.is(':checked');

  if(acAttr){

   ac.attr({'checked':true});

   ac.addClass( 'check' );