const image = document.querySelector('.image');
const url = document.querySelector('#url');

url.addEventListener("change", function(e) {
  let image_url = URL.createObjectURL(e.target.files[0]);
  image.src = image_url;
})