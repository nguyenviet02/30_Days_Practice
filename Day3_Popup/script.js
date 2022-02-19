const open = document.getElementById("open");
const container = document.getElementById("container");
const close_button = document.getElementById("close-button");
const close_icon = document.getElementById("close-icon");

open.addEventListener("click", () => {
  container.classList.add('active');
})

close_icon.addEventListener("click", () => {
  container.classList.remove('active');
})

close_button.addEventListener("click", () => {
  container.classList.remove('active');
})











