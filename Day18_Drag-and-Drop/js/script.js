const dragable = document.querySelector('.dragable');
const boxes = document.querySelectorAll('.box');

boxes.forEach((box) => {
  box.addEventListener('dragover', dragOver);
  box.addEventListener('drop', dragDrop);
})

function dragOver(e) {
  e.preventDefault();
  this.appendChild(dragable);
}

function dragDrop() {
  this.appendChild(dragable);
}