
// work-1
// Login button addEventlistenr click add
const loginBtn = document.getElementById('login-btn');

loginBtn.addEventListener('click', function (){
    // get input valid User name
const inputName = document.getElementById('inputUserName');
const validName = inputName.value;
// console.log(validName);
// get input valid Password
const inputPassword = document.getElementById('inputPassword');
const validPassword = inputPassword.value;
// console.log(validPassword);
// Match condition
if(validName === 'admin' && validPassword === 'admin123'){
    window.location.assign("/home.html");
} else{
 alert('Please Enter valid User Name and Password');
 return;

}

});
