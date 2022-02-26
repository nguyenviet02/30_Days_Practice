const food_images = document.querySelectorAll('.food_image');

const btns = document.querySelectorAll('button');

btns.forEach(btn => {
  btn.addEventListener('click', function () {
    const btnActive = document.querySelector('.active');
    btnActive.classList.remove('active');
    this.classList.add('active');
    food_images.forEach(food_image => {
      if (btn.getAttribute("class").includes("all")){
        food_image.classList.remove("hide");
      }
      else {
        if (btn.getAttribute("class").includes(food_image.getAttribute("food_type"))) {
          food_image.classList.remove("hide");
        }
        else {
          food_image.classList.add("hide");
        }
      }

    });
  })
})
