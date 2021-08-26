function submitFormFunct(ValidCaptcha) {
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  var pattern = new RegExp(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{6,25}$/); //regrex to check password

  //validation conditions
  if (username == "") {
    usernameInvalid("Email ID Cannot be blank.");
  }
  if(password == ""){
    passwordInvalid("Password cannot be blank.");
  }
  if(document.getElementById('txtCompare').value == ""){
    captchaInvalid("Captcha cannot be blank.");
  }
  if(username.endsWith("@sicsr.ac.in")== false && username != ""){
    usernameInvalid("Invalid Email ID!");
  }
  if(pattern.test(password) == false && password != ""){
    passwordInvalid("Invalid Password!");
  }
  if (ValidCaptcha == false && document.getElementById('txtCompare').value != "") {
    console.log("Captcha incorrect");
    captchaInvalid("Invalid Captcha!");
  }  
  if (ValidCaptcha == true && username.endsWith("@sicsr.ac.in") && pattern.test(password)== true) {
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
    document.getElementById('txtCompare').value = '';
    window.location.href = "homepage1.html";
  }
}

//functions to prompt users for invalid or blank fields.
function usernameInvalid(invalidTextUsername){
  document.getElementById('username').classList.add('invalid');
  document.getElementById('usernameP').style.display = "block";
  document.getElementById('usernameP').innerText = invalidTextUsername;
}
function passwordInvalid(invalidTextPassword){
  document.getElementById('password').classList.add('invalid');
    document.getElementById('passwordP').style.display = "block";
    document.getElementById('passwordP').innerText = invalidTextPassword;
}
function captchaInvalid(invalidTextCaptcha){
  document.getElementById('txtCompare').classList.add('invalid');
    document.getElementById('captchaP').style.display = "block";
    document.getElementById('captchaP').innerText = invalidTextCaptcha;
}

//functions to change style of textfields if right.
function usernameChange(){
    document.getElementById('username').classList.remove('invalid');
    document.getElementById('usernameP').style.display = "none";
}
function passwordChange(){
  document.getElementById('password').classList.remove('invalid');
  document.getElementById('passwordP').style.display = "none";
}
function captchaChange(){
  document.getElementById('txtCompare').classList.remove('invalid');
  document.getElementById('captchaP').style.display = "none";
}
/**
 * Check valid captcha
 */

function GenerateCaptcha() {
  var chr1 = Math.ceil(Math.random() * 10) + '';
  var chr2 = Math.ceil(Math.random() * 10) + '';
  var chr3 = Math.ceil(Math.random() * 10) + '';

  var str = new Array(2).join().replace(/(.|$)/g, function () { return ((Math.random() * 36) | 0).toString(36)[Math.random() < .5 ? "toString" : "toUpperCase"](); });
  var captchaCode = str + chr1  + chr2  + chr3;
  document.getElementById("txtCaptcha").value = captchaCode;
}

/* Validating Captcha Function */
function ValidCaptcha() {
  console.log("Callign valid captcha")
  var str1 = removeSpaces(document.getElementById('txtCaptcha').value);
  var str2 = removeSpaces(document.getElementById('txtCompare').value);
  console.log("str1", str1, str2);
  if (str1 == str2) return true;

  return false;
}

/* Remove spaces from Captcha Code */
function removeSpaces(string) {
  return string.split(' ').join('');
}

// function toasterOptions() {
//   toastr.options = {
//     "closeButton": false,
//     "debug": false,
//     "newestOnTop": false,
//     "progressBar": true,
//     "positionClass": "toast-bottom-left",
//     "preventDuplicates": true,
//     "onclick": null,
//     "showDuration": "100",
//     "hideDuration": "1000",
//     "timeOut": "5000",
//     "extendedTimeOut": "1000",
//     "showEasing": "swing",
//     "hideEasing": "linear",
//     "showMethod": "show",
//     "hideMethod": "hide"
//   };
// };

// toasterOptions();
// "positionClass": "toast-top-center"