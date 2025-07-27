$(document).ready(function () {
  $(".job-list > li").each(function () {
    const $li = $(this);
    const $div = $li.find("div");
    const $p = $div.find("p");
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
      console.log(index);
      $p.removeClass("active");
      $p.eq(index).addClass("active");
      $itemTitle.text(textArr[index]);
      if (firstRun && $p.length > 5) {
        // 다음엔 0부터 시작하게
        index = 0;
        firstRun = false;
      } else {
        // 이후엔 순차적으로 증가        console
        index = (index + 1) % $p.length;
      }
    }, 2000);
  });
});
