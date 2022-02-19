const search = document.querySelector("#search");
const product_list = document.querySelector(".product_list");
let list_Product = [];
getData();
search.addEventListener("input", ()=>{filterProduct(search.value)});


async function getData() {
  let res = await fetch("https://fakestoreapi.com/products");
  let data = await res.json();
  product_list.innerHTML = "";
  data.forEach(product => {
    let product_item = document.createElement("div");
    product_item.classList.add("product");
    list_Product.push(product_item);
    product_item.innerHTML =
      `<img src="${product.image}" alt="" class="product_img">
    <div class="product_info">
        <p class="product_name">${product.title}</p>
        <p class="product_price">${product.price}</p>
    </div>`;
    product_list.appendChild(product_item);
  });
}

function filterProduct(text) {
  list_Product.forEach(item => {
    if (item.innerText.toLowerCase().includes(text.toLowerCase())) {
      item.classList.remove('hide')
    } else {
      item.classList.add('hide')
    }
  });
}
