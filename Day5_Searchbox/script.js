search_box = document.getElementById("search_box");
search_btn = document.getElementById("search_btn");

search_btn.addEventListener("click",()=>{
  search_box.classList.toggle("open");
})