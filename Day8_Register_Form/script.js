//TODO: Xử lí kiểm tra đồng bộ 
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordConfirmation = document.getElementById('password_confirm');
const btn = document.getElementById('btn');
var list_username = [];
var list_email = [];
var list = [username, email, password, passwordConfirmation];

function showError(input) {
  input.parentNode.lastElementChild.classList.add('active');
  input.parentNode.firstElementChild.classList.add('active');
}
function showSuccess(input) {
  input.parentNode.lastElementChild.classList.remove('active');
  input.parentNode.firstElementChild.classList.remove('active');
}

function checkEmpty(arr) {
  let Full = true;
  arr.forEach(input => {
    if (input.value == '') {
      showError(input);
      Full = false;
    }
    else {
      showSuccess(input);
    }
  });
  return Full;
}

function checkUsernameUsed(username) {
  if (list_username.includes(username.value)) {
    alert('Username already used');
    showError(username);
    return false;
  }
  else {
    showSuccess(username);
    return true;
  }
}
function checkEmailUsed(email) {
  
}


function validateEmail(email) {
  const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (list_email.includes(email.value)) {
    alert('Email is already used !');
    showError(email);
    return false;
  }
  else {
    if (email.value.match(regexEmail)){
      showSuccess(email);
      return true;    
    }
    else{
      alert('Email is not true !');
      showError(email);
      return false;
    }
  }
}

//The password should contain at least one digit, at least one lower case, and at least one upper case and at least 8 characters
function validatePassword(password) {
  var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,}$/;
  if (!regex.test(password.value)) {
    showError(password);
    return false;
  } else {
    showSuccess(password);
    return true;
  }
}

function checkpass() {
  if (password.value != passwordConfirmation.value){
    showError(passwordConfirmation);
    return false;
  }
  else{
    showSuccess(passwordConfirmation);
    return true;
  }
}



btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (checkEmpty(list) && validateEmail(email) && checkUsernameUsed(username) && validatePassword(password) && checkpass(passwordConfirmation)) {
    list_email.push(email.value);
    list_username.push(username.value);
    alert("Successful !");
  }
  else {
    alert("Error");
  }
})
