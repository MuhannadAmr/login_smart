var user_data = JSON.parse(localStorage.getItem("currentUserData"));

document.querySelector("h1").innerHTML= "wlcome "+user_data[0].user_name+"";

document.querySelector(".btn").addEventListener("click" , function(){
    localStorage.removeItem("currentUserData");
})