$(window).scroll(function () {
  var $scrollTop = $(this).scrollTop();
  if ($scrollTop > 900) {
    $(".fixed-button").css({ opacity: 1, visibility: "visible" }, 300);
  } else {
    $(".fixed-button").css({ opacity: 0, visibility: "hidden" }, 300);
  }
});
