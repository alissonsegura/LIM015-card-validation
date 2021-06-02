//import validator from './validator.js';
//console.log(validator);

const button = document.getElementById("button");
button.addEventListener("click", function () {
    const username = document.getElementById("name").value
    document.getElementById("login").style.display = "none";
    document.getElementById("secondSlide").style.display = "flex"
    document.getElementById("secondSlide");
    const h1 = document.getElementById("h1");
    h1.innerHTML = "Welcome to Iwall-e" + " " + username + "!";

});

