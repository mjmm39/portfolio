

$(document).ready(function(){ //시작

$(".open1").click(function(){
  $(".leftwrap").animate({
    left : "0px"
  });
});
  
$(".close1").click(function(){
  $(".leftwrap").animate({
    left : "-300px"
  });
});

// 모바일 왼쪽 탑 버튼 페이지 이동

$(function(){
  $("a").on("click", function(e){
    e.preventDefault(); // <a>링크 이벤트 차단
  });
}); // <a>링크 이벤트 차단 설정






var menu = $(".gnb > li");
var content = $(".contents > section");

menu.click(function(){
  event.preventDefault();
  var idx = $(this).index();
  var section = content.eq(idx);
  var sectH = section.offset().top;
  $("html , body").stop().animate({scrollTop : sectH});
});



$(window).scroll(function(){
  var location = $(window).scrollTop(); // 스크롤의 현재 위치

  // location값이 sect01 영역 안에 있을때 menu1 을 활성화
  // 영역1 <= location < 영역2  -- 우리가 원하는 조건
  // 영역1 <= location  and  location < 영역2 -- 실제 작성
  // and --->  &&
  // 0 번 부터 시작
  // 제이쿼리 플러그인을 사용해서 고난이도의 동작에 활용
  if(location >= $("#sect01").offset().top && location < $("#sect02").offset().top){
    menu.removeClass("on");
    menu.eq(0).addClass("on")
  }else if(location >= $("#sect02").offset().top && location < $("#sect03").offset().top){
    menu.removeClass("on");
    menu.eq(1).addClass("on")
  }else if(location >= $("#sect03").offset().top && location < $("#sect04").offset().top){
    menu.removeClass("on");
    menu.eq(2).addClass("on")
  }else if(location >= $("#sect04").offset().top){
    menu.removeClass("on");
    menu.eq(3).addClass("on")
  }
  //구문이 반복되어 동작하는 경우 반복문 for , each  반복문의 통해

});`// 상단 nav animate 기능 구현`


var swiper = new Swiper(".mySwiper2", {
  pagination: {
    el: ".swiper-pagination",
  },
});





}); // 끝


