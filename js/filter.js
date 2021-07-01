const refs = {
    controlsList: document.querySelector('[data-controls="controls"]'),
    panelsList: document.querySelector('[data-panels="panels"]'),
    panel: document.querySelectorAll('[data-panel]'),
    control: document.querySelectorAll('[data-control]'),
};

console.log(refs.controlsList);
console.dir(refs.controlsList);
console.log(refs.panelsList);
console.dir(refs.panel);
// console.log(refs.panel.dataset.panel);



refs.controlsList.addEventListener('click', onBtnFilterClick);

function onBtnFilterClick(e) {

    if (e.target === e.currentTarget) return;

    const currentTargetFilterBtn = refs.controlsList.querySelector('.filter-button');
    if (currentTargetFilterBtn) {
        currentTargetFilterBtn.classList.remove('filter-button');
    }

    e.target.classList.add('filter-button');
   console.log(e.target.dataset.control);

    const panelArray = [...refs.panel].map((el) => {
    // console.log(el);
    return el.dataset.panel;
    });
    const controlArray = [...refs.control].map((el) => {
        return el.dataset.control;
    })
console.log(controlArray);
   const filteredPanels = panelArray.filter((elem) => {
       if (e.target.dataset.control === elem) {
           console.log(elem);
       }
       return elem;
   })
    console.log(panelArray);
    console.log(filteredPanels);



}
