let dropBtns = document.querySelectorAll('.dropBtn');
let wrap = document.querySelector('.hd_nav_left');
let dropDowns = document.querySelectorAll('.dropDown');

wrap.addEventListener('click', e => {
  const id = e.target.dataset.id;
  if (id) {
    dropDowns.forEach(dropDown => {
      dropDown.classList.remove('showUp');
    });
    const listId = document.getElementById(id);

    listId.classList.add('showUp');
  }
})


;