const animation_blocks = document.querySelectorAll('.animation_block');
const header_title = document.querySelector('.header_title');

function EleinViewport(ele) {
  let rect = ele.getBoundingClientRect();
  let viewHeight = window.innerHeight;
  if (
    (rect.bottom >= viewHeight && rect.top <= viewHeight) ||
    (rect.top <= 0 && rect.bottom >= 0) ||
    (rect.top >= 0 && rect.bottom <= viewHeight)) {
    return true;
  }
  return false;

};

function showOnScroll() {
  animation_blocks.forEach(function (animation_block) {
    console.log(animation_block);
  });
}

window.addEventListener('scroll', () => {
  if (header_title.getBoundingClientRect().bottom <= 0) {
    header_title.classList.add('left_to_right');
  }
  animation_blocks.forEach(function (animation_block) {
    if (EleinViewport(animation_block)) {
      animation_block.classList.add('active');
    }
    else {
      animation_block.classList.remove('active');
    }
  });
})


