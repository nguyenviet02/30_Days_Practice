const key = document.querySelector(".key p:last-child");
const Location = document.querySelector(".location p:last-child");
const which = document.querySelector(".which p:last-child");
const code = document.querySelector(".code p:last-child");
const main_result = document.querySelector(".main_result");
const box = document.querySelector(".box");
const noti = document.querySelector(".noti")

document.addEventListener("keydown", e => {
  let keyName = e.key;
  if (e.which === 32) {
    keyName = "Space";
  }
  else {
    keyName = e.key;
  }
  box.classList.remove("hide");
  noti.classList.add("hide");
  key.innerText = keyName;
  Location.innerText = e.location;
  which.innerText = e.which;
  code.innerText = e.code;
  main_result.innerText = e.which;

})



