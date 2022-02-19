const inp = document.querySelector("#addTodo");
const btn = document.querySelector("#btn");
const todo_list = document.querySelector(".todo_list");

inp.onblur = function () {
  setTimeout(() => {
    this.focus()
  }, 10);
};
init();
btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (inp.value != "") {
    let todo = {
      text: `${inp.value}`,
      status: "",
    }
    addTodo(todo);
    inp.value = "";
    saveTodo();
  }
})


function addTodo(todo) {
  let li = document.createElement("li");
  li.innerHTML = `<span>${todo.text}</span>
                  <i class='bx bx-trash'></i>`;
  if (todo.status === "completed") {
    li.setAttribute("class", "completed");
  }
  li.addEventListener('click', function () {
		this.classList.toggle('completed');
		saveTodo();
	})

	li.querySelector('i').addEventListener('click', (e) => {
		e.target.parentElement.remove();
		saveTodo();
	})
  todo_list.appendChild(li);
  saveTodo();
}

function saveTodo(){
  let todos = todo_list.querySelectorAll("li");
  let todoList = [];
  todos.forEach((todo) => {
    let text = todo.querySelector("span").innerText;
    let status = todo.getAttribute("class");
    todoList.push({
      text,
      status,
    })
  })
  localStorage.setItem("todo_list", JSON.stringify(todoList));
}


function init(){
  let data = JSON.parse(localStorage.getItem("todo_list"));
  data.forEach(item => {
    addTodo(item);
  });
}


