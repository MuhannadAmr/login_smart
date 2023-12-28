var usersArrCopy = JSON.parse(localStorage.getItem("userData"));
var liBTN = document.querySelector(".login-board a");
var loginData = [];
var currentUser = {};
var emailInput = document.querySelector("#login-email");
var passwordInput = document.querySelector("#login-password");
liBTN.addEventListener("click", checkData)
function checkData() {

    currentUser = {
        userEmail: emailInput.value,
        userPassword: passwordInput.value
    };
    if(currentUser.userEmail == "" || currentUser.userPassword == ""){
        document.querySelector(".login-board .row p").innerHTML = "All inputs is required"
        document.querySelector(".login-board .row p").classList.add("text-danger");
        document.querySelector(".login-board .row p").classList.remove("text-success");
    }
    for (var i = 0; i < usersArrCopy.length; i++) {
        if (currentUser.userEmail == usersArrCopy[i].user_email && currentUser.userPassword == usersArrCopy[i].user_password) {
            loginData.push(usersArrCopy[i]);
            localStorage.setItem("currentUserData" , JSON.stringify(loginData));
        }
    }
    if(localStorage.getItem("currentUserData") != null){
        liBTN.setAttribute("href", "welcome_page.html");
    }
}