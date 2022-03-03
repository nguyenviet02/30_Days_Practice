
const container = document.querySelector('.container');
const box_number = 20;
let startX, scrollX;
let isMouseDown = false;

function pad(number) {
  if (number < 10) {
    return '0' + number;
  }
  return number;
}

//* Create boxes
for (let i = 0; i < box_number; i++) {
  let box = document.createElement('div');
  box.classList.add('box');
  box.innerText = pad(i + 1);
  document.querySelector('.container').appendChild(box);
}

container.addEventListener("mousedown", function (e) {
  startX = e.pageX - container.offsetLeft - 25;
  scrollX = container.scrollLeft;
  isMouseDown = true;
})

container.addEventListener("mouseup", function () {
  isMouseDown = false;
})

container.addEventListener("mouseleave", function () {
  isMouseDown = false;
})

container.addEventListener("mousemove", function (e) {
  if (!isMouseDown) return;
  e.preventDefault();
  let x = e.pageX - container.offsetLeft - 25;
  let walk = (x - startX) * 3;
  container.scrollLeft = scrollX - walk;
})

