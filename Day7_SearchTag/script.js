const tag_name = document.querySelector("#tag_name");
const tags = document.querySelector(".tags");
const btn = document.querySelector("button");
const clear_tags = document.querySelector(".clear_tags");


var arr = [];
document.addEventListener("keydown", (e) => {
  let name = tag_name.value;
  if (arr.includes(name)) {
    alert("This tag is already used")
    tag_name.value = "";
  }
  else if (e.which === 13 && !arr.includes(name)) {
    arr.push(name);
    let newDiv = document.createElement("div");
    newDiv.innerHTML = "<span>" + name + "</span>" + '<i onclick = "this.parentNode.parentNode.removeChild(this.parentNode)">' + "</i>";
    newDiv.classList.add("tag");
    newDiv.querySelector("i").classList.add("fas", "fa-times");
    tags.appendChild(newDiv);
    tag_name.value = "";
  }
})

clear_tags.addEventListener("click",()=>{
  let tags = document.querySelector(".tags");
  tags.innerHTML = "";
})




