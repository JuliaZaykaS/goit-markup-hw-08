const refs = {
  controlsList: document.querySelector('[data-controls="controls"]'),
//   panelsList: document.querySelector('[data-panels="panels"]'),
  panel: document.querySelectorAll("[data-panel]"),
  control: document.querySelectorAll("[data-control]"),
};

[...refs.panel].forEach((el) => {
  el.classList.add("active-card");
});

refs.controlsList.addEventListener("click", onBtnFilterClick);

function onBtnFilterClick(e) {
  if (e.target === e.currentTarget) return;

  const currentTargetFilterBtn =
    refs.controlsList.querySelector(".filter-button");

  if (currentTargetFilterBtn) {
    currentTargetFilterBtn.classList.remove("filter-button");
  }

  e.target.classList.add("filter-button");

  [...refs.panel].forEach((el) => {
    if (el.classList.contains("hidden-card")) {
      el.classList.remove("hidden-card");
      el.classList.add("active-card");
    }
  });

  if (e.target.dataset.control === "all") {
    [...refs.panel].forEach((el) => {
      el.classList.add("active-card");
      el.classList.remove("hidden-card");
    });
  } else {
    [...refs.panel]
      .filter((elem) => {
        if (e.target.dataset.control !== elem.dataset.panel) return elem;
      })
      .forEach((elem) => {
        elem.classList.add("hidden-card");
        elem.classList.remove("active-card");
      });
  }
}
