/* eslint-disable no-unused-vars */
import validator from './validator.js';
const buttonGetStarted = document.getElementById("button-getstarted");
buttonGetStarted.addEventListener("click", () => {
    document.getElementById("firstViewContainer").style.display = "none";
})

const loginButton = document.getElementById("button");
loginButton.addEventListener("click", function () {
    const name = document.getElementById("name").value;
    const username = document.getElementById("email").value;
    document.getElementById("secondViewContainer").style.display = "none";
    // document.getElementById("secondSlide").style.display = "flex"
    // document.getElementById("secondSlide");
    const h1 = document.getElementById("h1");
    h1.innerHTML = `Welcome to Iwall-e ${name}!`; //concateno el valor de mi imput con mi h1 en html
});

//OCULTAR NUMERO DE TARJETA 

const cardNumber = document.getElementById("creditCardNumber");
const cardOneValue = document.getElementById("creditCardNumber").innerHTML;//Guardo el valor inicial de mi input
const cardTwoValue = document.getElementById("creditCardNumberTwo").innerHTML;//Guardo el valor inicial de mi input
const cardThreeValue = document.getElementById("creditCardNumberThree").innerHTML;//Guardo el valor inicial de mi input
const creditCardNumberTwo = document.getElementById("creditCardNumberTwo");
const creditCardNumberThree = document.getElementById("creditCardNumberThree");


cardNumber.innerHTML = validator.maskify(cardNumber.innerHTML);// Obtengo valor de cardNumbr en mi html y Lo oculto con mi funcion maskify
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
buttonModal.addEventListener("click", function () {
    const number = document.getElementById("cardNum").value;
    const numberValid = validator.isValid(number)
    if (numberValid === true) {
        alert("Card was added succesfully");
        document.getElementById("cardNum").value = "";
        document.getElementById("expDate").value = "";
        document.getElementById("cvvNum").value = "";
        modalb.classList.remove("modalact");
        //Agrego mi div Cards con el valor de mi cardNum concatenado
        const cardsCards = document.getElementById("cards");
        cardsCards.innerHTML += `<div class="box cardthree">
        <p id="creditCardNumberThree" class="creditCardNumber">${number}</p>
        <p id="cvv">372</p>
        <p id="expdate">05/27</p>
      </div>
      </div>`
        // Agrego mi div 
    }

    if (numberValid === false) {
        alert("Card is incorrect");
    }

});


const show = document.getElementById("show") // Boton Mostrar
show.addEventListener("click", function () {
    cardNumber.innerHTML = cardOneValue; //obtengo el valor de mi html y le asigno mi valor inicial guardado en mi variable
    creditCardNumberTwo.innerHTML = cardTwoValue;
    creditCardNumberThree.innerHTML = cardThreeValue;
});

const hide = document.getElementById("hide") //Boton Hide
hide.addEventListener("click", function () {
    cardNumber.innerHTML = validator.maskify(cardNumber.innerHTML);
    creditCardNumberTwo.innerText = validator.maskify(creditCardNumberTwo.innerHTML);
    creditCardNumberThree.innerText = validator.maskify(creditCardNumberThree.innerHTML);
});
