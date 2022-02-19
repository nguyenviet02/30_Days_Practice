const images = document.querySelectorAll(".image_list .image img")
const gallery = document.querySelector(".gallery");
const image_show = document.querySelector(".image_show");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const close = document.querySelector(".close")
let currentIndex = 0;

images.forEach((img, index) => {
  img.addEventListener("click", ()=>{
    currentIndex = index;
    showGallery();
  })
});

function showGallery(){
  if(currentIndex == (images.length-1)){
    next.classList.add("hide");
    console.log("Last");
  }
  else{
    next.classList.remove("hide");
  }
  if (currentIndex == 0){
    prev.classList.add("hide");
    console.log("First");
  }
  else{
    prev.classList.remove("hide");
  }
  gallery.classList.add("show");
  image_show.src = images[currentIndex].src;
}

prev.addEventListener("click", ()=>{
  currentIndex != 0 ? currentIndex-- : undefined;
  showGallery();
})

next.addEventListener("click", () => {
  currentIndex != images.length - 1 ? currentIndex++ : undefined;
  showGallery();
});

close.addEventListener("click", () => {
  gallery.classList.remove("show");
});





