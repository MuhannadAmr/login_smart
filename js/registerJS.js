// =======================sign up=======================
var user = {}
var usersArr = [];
var suBTN = document.querySelector(".register-board button");
var emailRegex = /\w+@\w+.(com|net)/;
var passwordRegex = /\w{5,}/;
var nameRegex = /\w{3,}/;
// to recive data in arr
if (localStorage.getItem("userData") != null) {
    usersArr = JSON.parse(localStorage.getItem("userData"));
}
// to send check is valid and send data 
suBTN.addEventListener("click", setData);
function setData() {

    user = {
        user_name: document.querySelector("#reg-name").value,
        user_email: document.querySelector("#reg-email").value,
        user_password: document.querySelector("#reg-password").value
    }
    // check if acc is alerady exists
    for (var i = 0; i < usersArr.length; i++) {
        if (user.user_email == usersArr[i].user_email || user.user_name == usersArr[i].user_name || user.user_password == usersArr[i].user_password) {
            document.querySelector(".register-board p").innerHTML = "email already exists";
            document.querySelector(".register-board p").classList.add("text-danger");
            document.querySelector(".register-board p").classList.remove("text-success");
            return;
        }
    }
    // check if acc is valid then add data to localstorage
    if (emailRegex.test(user.user_email) == true && passwordRegex.test(user.user_password) == true && nameRegex.test(user.user_name) == true) {
        usersArr.push(user)
        localStorage.setItem("userData", JSON.stringify(usersArr));
        clear();
        document.querySelector(".register-board p").innerHTML = "Success";
        document.querySelector(".register-board p").classList.remove("text-danger")
        document.querySelector(".register-board p").classList.add("text-success")

    } else {
        document.querySelector(".register-board p").innerHTML = "All inputs is required";
        document.querySelector(".register-board p").classList.add("text-danger");
        document.querySelector(".register-board p").classList.remove("text-success");
    }

}
// for clear input
function clear() {
    document.querySelector("#reg-name").value = null;
    document.querySelector("#reg-email").value = null;
    document.querySelector("#reg-password").value = null;
}
// =====================signin=======================
