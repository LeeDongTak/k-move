$(document).ready(function () {
  $(".job-list > li").each(function () {
    const $li = $(this);
    const $imgs = $li.find("img");
    const $itemTitle = $li.find(".item-title");

    // 첫 번째 index는 1로 시작
    let index = 1;
    let firstRun = true;
    const textArr = [
      "영업/ 마케팅/ 고객관리",
      "회계/행정/사무/인사",
      "제조/생산관리",
      "무역/물류/유통",
      "IT/ 디지털",
    ];
    setInterval(() => {
      $imgs.removeClass("active");
      $imgs.eq(index).addClass("active");
      $itemTitle.text(textArr[index]);
      if (firstRun && $imgs.length > 5) {
        // 다음엔 0부터 시작하게
        index = 0;
        firstRun = false;
      } else {
        // 이후엔 순차적으로 증가
        index = (index + 1) % $imgs.length;
      }
    }, 2000);
  });
});
