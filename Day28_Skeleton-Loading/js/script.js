const loading_Elements = document.querySelectorAll('.loading');

const hide_Elements = document.querySelectorAll('.hide');

function renderEle() {
  loading_Elements.forEach(element => {
    element.classList.remove('loading');
  });
  hide_Elements.forEach(element => {
    element.classList.remove('hide');
  });
}

setTimeout(() => {
  renderEle();
}, 3000);