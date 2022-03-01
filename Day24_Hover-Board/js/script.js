const rows = 10;
const cols = 20;

const square_container = document.querySelector('.square_container');


const app = {
  createBoard: function (rows, cols) {
    for (let i = 0; i < rows * cols; i++) {
      const square = document.createElement('div');
      square.classList.add('square');
      square_container.appendChild(square);
    }
  },

  createHover: function () {
    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
      square.addEventListener('mouseover', (e) => {
        const randomColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
        square.style.backgroundColor = randomColor;
        square.style.setProperty("-webkit-filter", `drop-shadow(0px 0px 5px ${randomColor})`);
        setTimeout(() => {
          square.style.backgroundColor = '#1d1d1d';
          square.style.removeProperty("-webkit-filter", `drop-shadow(0px 0px 10px ${randomColor})`);
        }, 1500);
      })

    })
  },


  run: function () {
    this.createBoard(rows, cols);
    this.createHover();
  }

};

app.run();
