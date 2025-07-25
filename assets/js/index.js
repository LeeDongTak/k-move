const section6CardList = document.querySelector(".section6 > ul");

section6CardList.addEventListener("mouseover", (event) => {
  const clickedElement = event.target;
  const card = clickedElement.closest("li");

  if (card && section6CardList.contains(card)) {
    const allCards = section6CardList.querySelectorAll("li");

    allCards.forEach((c) => {
      c.classList.remove("active");
      const h6 = c.querySelector("h6");
      if (h6) {
        h6.classList.remove("Heading-3-bold");
        h6.classList.add("Heading-4-bold");
      }
    });

    card.classList.add("active");

    const h6 = card.querySelector("h6");
    if (h6) {
      h6.classList.remove("Heading-4-bold");
      h6.classList.add("Heading-3-bold");
    }
  }
});

const section7CardList = document.querySelector(".section7 > .article3 > ul");

section7CardList.addEventListener("click", (event) => {
  const clickedElement = event.target;
  const card = clickedElement.closest("li");

  if (card && section7CardList.contains(card)) {
    const isActive = clickedElement.closest(".active");

    if (!isActive) {
      card.classList.add("active");
    } else {
      card.classList.remove("active");
    }
  }
});
