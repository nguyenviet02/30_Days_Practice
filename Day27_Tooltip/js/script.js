const media_items = document.querySelectorAll('.media_item');


function onHover(ele) {
  ele.classList.add("active");
  let bgc = ele.getAttribute("bgcolor");
  ele.querySelector("i").style.backgroundColor = bgc;
  ele.querySelector(".tooltip").style.backgroundColor = bgc;
}

media_items.forEach(media_item => {
  media_item.onmouseover = function () {
    onHover(this);
  }
  media_item.onmouseout = function () {
    this.classList.remove("active");
    this.querySelector("i").style.backgroundColor = "#fff";
  }
})