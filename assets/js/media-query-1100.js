function updateResponsiveClass() {
  const isMobile = window.matchMedia("(max-width: 1100px)").matches;

  // 1. 배너 설명
  document.querySelectorAll(".banner-description").forEach((dom) => {
    if (isMobile) {
      dom.classList.remove("Body_L");
      dom.classList.add("Body_M");
    } else {
      dom.classList.remove("Body_M");
      dom.classList.add("Body_L");
    }
  });

  // 2. 직업 제목
  document
    .querySelectorAll(".job-list > .focus > .item-title")
    .forEach((dom) => {
      if (isMobile) {
        dom.classList.remove("Button");
        dom.classList.add("job-text");
      } else {
        dom.classList.remove("job-text");
        dom.classList.add("Button");
      }
    });

  // 3. 18기 모집 버튼
  document.querySelectorAll(".banner-button").forEach((dom) => {
    if (isMobile) {
      dom.classList.remove("Button");
      dom.classList.add("Body_M");
    } else {
      dom.classList.remove("Body_M");
      dom.classList.add("Button");
    }
  });

  // 4. section3 article1 카드 번호
  document.querySelectorAll(".section3-article1-card-num").forEach((dom) => {
    if (isMobile) {
      dom.classList.remove("Heading-4-bold");
      dom.classList.add("Button");
    } else {
      dom.classList.remove("Button");
      dom.classList.add("Heading-4-bold");
    }
  });

  // 5. section3 article1 카드 번호
  document.querySelectorAll(".section3-article1-card-button").forEach((dom) => {
    if (isMobile) {
      dom.classList.remove("Button");
      dom.classList.add("section3-article1-card-button-text");
    } else {
      dom.classList.remove("section3-article1-card-button-text");
      dom.classList.add("Button");
    }
  });

  // 6. section3 article1 리스트 제목
  document
    .querySelectorAll(".section3-article1-list-item-head")
    .forEach((dom) => {
      if (isMobile) {
        dom.classList.remove("Heading-4-bold");
        dom.classList.add("Body_L");
      } else {
        dom.classList.remove("Body_L");
        dom.classList.add("Heading-4-bold");
      }
    });

  // 7. section3 article2 카드 제목
  document.querySelectorAll(".section3-article2-card-title").forEach((dom) => {
    if (isMobile) {
      dom.classList.remove("Heading-4-bold");
      dom.classList.add("Body_L");
    } else {
      dom.classList.remove("Body_L");
      dom.classList.add("Heading-4-bold");
    }
  });

  // 8. section4 제목
  document.querySelectorAll(".section4 > h2").forEach((dom) => {
    if (isMobile) {
      dom.classList.remove("Heading-2-bold");
      dom.classList.add("Heading-4-bold");
    } else {
      dom.classList.remove("Heading-4-bold");
      dom.classList.add("Heading-2-bold");
    }
  });

  // 9. section4 카드 아이템 제목
  document
    .querySelectorAll(".section4-list-item-text-box > h5")
    .forEach((dom) => {
      if (isMobile) {
        dom.classList.remove("Heading-3-bold");
        dom.classList.add("section4-list-item-text-box-text");
      } else {
        dom.classList.remove("section4-list-item-text-box-text");
        dom.classList.add("Heading-3-bold");
      }
    });

  // 10. section5 카드 번호
  document.querySelectorAll(".section5-article-card-num").forEach((dom) => {
    if (isMobile) {
      dom.classList.remove("Heading-4-bold");
      dom.classList.add("Button");
    } else {
      dom.classList.remove("Button");
      dom.classList.add("Heading-4-bold");
    }
  });

  // 11. section6 카드 제목
  document.querySelectorAll(".section6-card-title").forEach((dom) => {
    if (isMobile) {
      dom.classList.remove("Heading-4-bold");
      dom.classList.add("Heading-3-bold");
    } else {
      dom.classList.remove("Heading-3-bold");
      dom.classList.add("Heading-4-bold");
    }
  });

  // 12. section7 제목
  document
    .querySelectorAll(".section7-article2-title-medium")
    .forEach((dom) => {
      if (isMobile) {
        dom.classList.remove("Heading-2-medium");
        dom.classList.add("Heading-4-bold");
      } else {
        dom.classList.remove("Heading-4-bold");
        dom.classList.add("Heading-2-medium");
      }
    });

  // 13. footer section1 text
  document
    .querySelectorAll(".footer-section1 > div > ul > li")
    .forEach((dom) => {
      if (isMobile) {
        dom.classList.remove("Body_M");
        dom.classList.add("Body_S");
      } else {
        dom.classList.remove("Body_S");
        dom.classList.add("Body_M");
      }
    });

  // 14. footer section2 text
  document.querySelectorAll(".footer-section2 > div").forEach((dom) => {
    if (isMobile) {
      dom.classList.remove("Body_M");
      dom.classList.add("Body_S");
    } else {
      dom.classList.remove("Body_S");
      dom.classList.add("Body_M");
    }
  });

  document.querySelectorAll(".section2-logo-list-item > img").forEach((img) => {
    const applyResponsiveWidth = () => {
      if (isMobile) {
        img.style.width = img.naturalWidth * 0.6 + "px";
      } else {
        img.style.width = img.naturalWidth + "px";
      }
    };

    if (img.complete) {
      // 이미 로드된 이미지
      applyResponsiveWidth();
    } else {
      // 아직 로드 안 된 경우
      img.onload = applyResponsiveWidth;
    }
  });
}

// 처음 실행
updateResponsiveClass();

// 창 크기 변경될 때도 반응
let resizeTimeout;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(updateResponsiveClass, 100);
});
