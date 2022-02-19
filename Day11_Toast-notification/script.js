const successBtn = document.querySelector(".btn_success");
const errorBtn = document.querySelector(".btn_error");
const warningBtn = document.querySelector(".btn_warning");
const toast_container = document.querySelector(".toast_container");

successBtn.addEventListener("click", () => {
  let success = document.createElement("div");
  success.classList.add("success_toast", "toast");
  success.innerHTML = '<i class="fas fa-check-circle"></i><span>This is a success message</span>'
  toast_container.appendChild(success);
  setTimeout(() => {
    toast_container.removeChild(success);
  }, 5000);
})
errorBtn.addEventListener("click", () => {
  let error = document.createElement("div");
  error.classList.add("error_toast", "toast");
  error.innerHTML = '<i class="fas fa-check-circle"></i><span>This is a error message</span>'
  toast_container.appendChild(error);
  setTimeout(() => {
    toast_container.removeChild(error);
  }, 5000);
})
warningBtn.addEventListener("click", () => {
  let warning = document.createElement("div");
  warning.classList.add("warning_toast", "toast");
  warning.innerHTML = '<i class="fas fa-check-circle"></i><span>This is a warning message</span>'
  toast_container.appendChild(warning);
  setTimeout(() => {
    toast_container.removeChild(warning);
  }, 5000);
})

