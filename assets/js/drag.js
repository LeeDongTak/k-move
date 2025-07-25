$.fn.scrollMove = function () {
  var controlDown = false;
  var pointer = {
    pageY: 0,
    pageX: 0,
    scrollTop: 0,
    scrollLeft: 0,
  };
  // 마우스 이벤트
  $(this).on("mousedown", function (e) {
    e.preventDefault();
    controlDown = true;
    pointer.pageX = e.pageX;
    pointer.pageY = e.pageY;
    pointer.scrollTop = $(this).scrollTop();
    pointer.scrollLeft = $(this).scrollLeft();
  });
  $(this).on("mousemove", function (e) {
    if (controlDown) {
      var newPageX = e.pageX;
      var newPageY = e.pageY;
      $(this).scrollLeft(pointer.scrollLeft - newPageX + pointer.pageX);
      $(this).scrollTop(pointer.scrollTop - newPageY + pointer.pageY);
    }
  });
  $(this).on("mouseup", function (e) {
    controlDown = false;
  });
  $(window).on("mouseup", function (e) {
    controlDown = false;
  });
};

// 스크롤 이벤트 실행
$(".section3-article2-card-wrap").scrollMove();
