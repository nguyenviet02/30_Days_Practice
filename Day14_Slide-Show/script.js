const prev = document.querySelector(".fa-caret-left");
const next = document.querySelector(".fa-caret-right");
const main_img = document.querySelector(".main_gallary");
const list_img = document.querySelectorAll(".gallary_item");
let current_Index = 3;

getSelected(current_Index)
function getSelected(current_Index) {
  list_img.forEach(img => {
    img.classList.remove("choose");
  });
  main_img.src = list_img[current_Index].src;
  list_img[current_Index].classList.add("choose");
}

for (let i = 0; i < list_img.length; i++) {
  list_img[i].addEventListener("click", ()=> {
    current_Index = i;
    getSelected(i);
  })
}

prev.addEventListener("click", () => {
  current_Index -=1;
  if (current_Index < 0) {
    current_Index = list_img.length-1;
    getSelected(current_Index)
  }
  else {
    getSelected(current_Index)
  }
})

next.addEventListener("click", () => {
  current_Index +=1;
  if (current_Index > list_img.length-1) {
    current_Index = 0;
    getSelected(current_Index)
  }
  else {
    getSelected(current_Index)
  }
})
