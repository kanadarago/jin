스톱의 기본값은 stop(false,false)

https://api.jquery.com/stop/

**(clearQueue**  ,  **jumpToEnd)**



clearQueue는 true라고 써주면 stop의 기본 기능이엇던 동작될동안 시행되는 다음 동작을 지워주는 기능이 사라짐 즉, 내가 10번 클릭을 하면 클릭 10번의 반응값이 사라지는게 없고 전부 실행됨



jumpToEnd는 true라고 써주면 원래 3초 걸리는 기능이 연타시 1초만에 그냥 끝내버림 즉 이번 기능이 끝나기 전에 다른게 실행되면 건너뛰어버림. (수행시점을 기준으로)



속성 세개를 사용할수있음 



.stop( [queue] [, clearQueue ] [, jumpToEnd ])

**queue**는 애니메이트 기능이 다수 있을때 취소할 기능을 선택할 수 있음





easing  여기서 보고 쓸수 있음

https://easings.net/