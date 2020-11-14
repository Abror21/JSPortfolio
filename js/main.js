
function insert(num) {
  document.form.input.value = document.form.input.value + num
}
function clean() {
  document.form.input.value = ''
}
function back() {
  document.form.input.value = document.form.input.value.substring(0, document.form.input.value.length - 1)
}
function equal() {
  document.form.input.value = eval(document.form.input.value)
}


const panelHeaders = document.querySelectorAll('.panel_header');

panelHeaders.forEach(panelHeader => {

  if (panelHeader.classList.contains('active')) {
    panelHeader.nextElementSibling.style.maxHeight = panelHeader.nextElementSibling.scrollHeight + 'px';
  }

  panelHeader.addEventListener('click', () => {
    const currentlyActivePanelHeader = document.querySelector('.panel_header.active');
    if (currentlyActivePanelHeader && currentlyActivePanelHeader !== panelHeader) {
      currentlyActivePanelHeader.classList.remove('active');
      currentlyActivePanelHeader.nextElementSibling.style.maxHeight = 0;
    }

    panelHeader.classList.toggle('active');
    if (panelHeader.classList.contains('active')) {
      panelHeader.nextElementSibling.style.maxHeight = panelHeader.nextElementSibling.scrollHeight + 'px';
    } else {
      panelHeader.nextElementSibling.style.maxHeight = 0;
    }
  })
});
// //////////////////////////////////////////////////////////////////////////
const menu = document.querySelector('.burger');
const menuClose = document.querySelector('.menu_close');
const menuList = document.querySelector('.nav');
const links = document.querySelectorAll('.nav ul li a');


menu.addEventListener('click', ()=> {
  menuList.classList.add('active')
})
menuClose.addEventListener('click', ()=> {
  menuList.classList.remove('active')
})
links.addEventListener('click', ()=> {
  menuList.classList.remove('active')
})