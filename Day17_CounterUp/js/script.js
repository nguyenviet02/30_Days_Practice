const fb_counter = document.querySelector(".fb_counter");
const ytb_counter = document.querySelector(".ytb_counter");
const tiktok_counter = document.querySelector(".tiktok_counter");

function Counter(ele, number) {
  let num = 0;
  let step = 200;
  var count_number = ele.querySelector(".counter_block-number");
  const myInterval = setInterval(() => {
    count_number.innerText = num;
    num += Math.floor(number / step);
    console.log(num);
    if (num >= number) {
      clearInterval(myInterval);
      count_number.innerText = number;
    }
  }, 1);
}

Counter(fb_counter, 3100);
Counter(ytb_counter, 4300);
Counter(tiktok_counter, 5700);