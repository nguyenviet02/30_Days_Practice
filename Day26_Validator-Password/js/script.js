const pass_input = document.querySelector("#password");
const btn_toggle = document.querySelector(".btn-toggle");
const pass_show = document.querySelector(".fa-eye");
const pass_hide = document.querySelector(".fa-eye-slash");
const lower_case = document.querySelector(".lower-case");
const upper_case = document.querySelector(".upper-case");
const number = document.querySelector(".number");
const special_char = document.querySelector(".special-char");
const length = document.querySelector(".length");
const btn_submit = document.querySelector(".btn-submit");


function isValid(element) {
  element.querySelector(".fa-times").classList.add("hide");
  element.querySelector(".fa-check").classList.remove("hide");
}

function isInValid(element) {
  element.querySelector(".fa-times").classList.remove("hide");
  element.querySelector(".fa-check").classList.add("hide");
}

function checkLowerCase(string) {
  if (/[a-z]/.test(string)) {
    isValid(lower_case);
    return true;
  }
  else {
    isInValid(lower_case);
    return false;
  }
}

function checkUpperCase(string) {
  if (/[A-Z]/.test(string)) {
    isValid(upper_case);
    return true;
  }
  else {
    isInValid(upper_case);
    return false;
  }
}

function checkNumber(string) {
  if (/\d/.test(string)) {
    isValid(number);
    return true;
  }
  else {
    isInValid(number);
    return false;
  }
}
function checkSpecialChar(string) {
  if (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(string)) {
    isValid(special_char);
    return true;
  }
  else {
    isInValid(special_char);
    return false;
  }
}

function checkLength(string) {
  if (string.length >= 8) {
    isValid(length);
    return true;
  }
  else {
    isInValid(length);
    return false;
  }
}

btn_toggle.onclick = function () {
  if (pass_input.type == "password") {
    pass_input.type = "text";
    pass_show.classList.remove("hide");
    pass_hide.classList.add("hide");
  }
  else {
    pass_input.type = "password";
    pass_show.classList.add("hide");
    pass_hide.classList.remove("hide");
  }
};

pass_input.oninput = function () {
  let pass = pass_input.value;
  checkLowerCase(pass);
  checkUpperCase(pass);
  checkNumber(pass);
  checkSpecialChar(pass);
  checkLength(pass);
};

btn_submit.onclick = function (e) {
  e.preventDefault();
  let pass = pass_input.value;
  if (checkLowerCase(pass) && checkUpperCase(pass) && checkNumber(pass) && checkSpecialChar(pass) && checkLength(pass)) {
    alert("Password is valid");
  }
  else {
    alert("Password is invalid");
  }
};