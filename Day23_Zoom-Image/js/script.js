const image_items = document.querySelectorAll('.image_item');
const result = document.querySelector('.result');
const scale = 2;

image_items.forEach(image_item => {
  // Make result move with mouse when hover on image
  image_item.addEventListener('mousemove', (e) => {
    result.classList.remove('hide');
    const { top, left, width, height } = image_item.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    console.log(x, y);
    const x_percent = x / width * 100;
    const y_percent = y / height * 100;
    result.style.backgroundPosition = `${x_percent}% ${y_percent}%`;
    result.style.backgroundSize = `${width * scale}px ${height * scale}px`;

    let resultRect = result.getBoundingClientRect();
    result.style.top = `${y - resultRect.height / 2}px`;
    result.style.left = `${x + image_item.offsetLeft - resultRect.width / 2}px`;

    result.style.backgroundImage = `url(${image_item.querySelector('img').src})`;
  });

  image_item.addEventListener('mouseleave', () => {
    result.classList.add('hide');
  });

});

