import validator from './validator.js';
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

//OCULTAR NUMERO DE TARJETA 

const cardNumber = document.getElementById("creditCardNumber");
const creditCardNumberTwo = document.getElementById("creditCardNumberTwo");
const creditCardNumberThree = document.getElementById("creditCardNumberThree");


cardNumber.innerHTML = validator.maskify(cardNumber.innerHTML);
creditCardNumberTwo.innerHTML = validator.maskify(creditCardNumberTwo.innerHTML);
creditCardNumberThree.innerHTML = validator.maskify(creditCardNumberThree.innerHTML);


//MODAL
const addCard = document.getElementById("addcard");
const modalb = document.getElementById("modalb");
const modalClose = document.getElementById("modalclose");
addCard.addEventListener("click", function () {
    modalb.classList.add("modalact"); //visible

});

modalClose.addEventListener("click", function () {
    modalb.classList.remove("modalact"); // no visible
});


const buttonModal = document.getElementById("buttonModal");
// const cardNum = document.getElementById("cardNum").value
// const array = cardNum.split('').reverse()
// let result = 0;
// for (let i = 0; i < array.length; i++) {

//     if (i % 2 === 1) {
//         const resultTemporal = array[i] * 2;
//         if (resultTemporal >= 10) {
//             const digits = resultTemporal.toString().split(""); //convierto # en string y en un array con split
//             const digitsResult = parseInt(digits[0]) + parseInt(digits[1]); //convierto en entero y  sumo digitos
//             result = result + digitsResult;
//         } else {
//             result = result + resultTemporal;
//         }
//     }

//     if (i % 2 === 0) {
//         result = result + parseInt(array[i]);
//     }



//     if (result % 10 === 0) {
//         alert("Tarjeta Valida");
//     } else {
//         alert("Tarjeta Invalida");
//     }

// }
buttonModal.addEventListener("click", function () {
    const number = document.getElementById("cardNum").value;
    const numberValid = validator.isValid(number)
    if (numberValid === true) {
        alert("Card was added succesfully");
        modalb.classList.remove("modalact")
    }
    if (numberValid === false) {
        alert("Card is incorrect");
    }
})
