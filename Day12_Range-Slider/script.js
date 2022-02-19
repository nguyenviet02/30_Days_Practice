const slider = document.querySelector(".slider");
const range_slider = document.querySelector(".range_slider");
const body = document.querySelector("body");
const title = document.querySelector(".title");
range_slider.addEventListener("mousemove", function(e) {
  let x = Math.round(e.offsetX/6);
  console.log(x);
  slider.style.width = x + "%";
  body.style.backgroundColor = `rgba(0, 0, 0, ${x / 100})`;
  if (x == 0){
    slider.querySelector("span").innerText = "";
  }
  else{
    slider.querySelector("span").innerText = x + "%";
  }
})