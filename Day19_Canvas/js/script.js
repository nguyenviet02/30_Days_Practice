const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
const color_bar = document.querySelector('#color_bar');
const eraser = document.querySelector('.eraser_box')
const decrease_size_box = document.querySelector('.decrease_size_box');
const increase_size_box = document.querySelector('.increase_size_box');
const size_box = document.querySelector('.size_box');
const clear_btn = document.querySelector('.clear_box');
const save_box = document.querySelector('.save_box');


//* Variables
let size = 10;
let min_size = 5;
let max_size = 50;
let painting = false;
let color = '#000000';


// Handle Events

//* Change color
color_bar.addEventListener('change', (e) => {
  color = color_bar.value;
})
color_bar.addEventListener('click', (e) => {
  color = color_bar.value;
})

//* Eraser
eraser.addEventListener('click', (e) => {
  color = '#ffffff';
})

//* Change size
decrease_size_box.addEventListener('click', (e) => {
  if (size > min_size) {
    size -= 5;
    size_box.innerHTML = size;
  }
})
increase_size_box.addEventListener('click', (e) => {
  if (size < max_size) {
    size += 5;
    size_box.innerHTML = size;
  }
})

//* Clear canvas
clear_btn.addEventListener('click', (e) => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
})

//* Save image
save_box.addEventListener('click', (e) => {
  save_box.href = canvas.toDataURL('image/png');
});

//* Painting
canvas.addEventListener('mousedown', (e) => {
  painting = true;
  draw(e);
});
canvas.addEventListener("mouseup", (e) => {
  painting = false;
  ctx.beginPath();
})
function draw(e) {
  if (!painting) return;
  ctx.lineWidth = size;
  ctx.lineCap = 'round';

  ctx.strokeStyle = color;
  ctx.lineTo(e.pageX - canvas.offsetLeft, e.pageY - canvas.offsetTop);
  ctx.stroke();
}



canvas.addEventListener("mousemove", draw);