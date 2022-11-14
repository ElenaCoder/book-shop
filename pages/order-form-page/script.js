
/* HEADER  FRAGMENT*/

let fragmentHeader2 = document.createDocumentFragment();


let headerElem2 = document.createElement("header");
fragmentHeader2.prepend(headerElem2);

let divContainerHeader2 = document.createElement("div");
divContainerHeader2.className = "container";
headerElem2.prepend(divContainerHeader2);

let divImgWrapperHead2 = document.createElement("div");
divImgWrapperHead2.className = "head-img-wrapper";
divContainerHeader2.prepend(divImgWrapperHead2);

let imgHeader2 = document.createElement("img");
// imgHeader.setAttribute('src',"../../assets/images/header-img1_1.png");
imgHeader2.src = "../../assets/images/header-img1_1.png";
imgHeader2.setAttribute('alt', "Heading image.");
divImgWrapperHead2.prepend(imgHeader2);


let divWrapper2 = document.getElementsByClassName("wrapper")[0];
divWrapper2.prepend(fragmentHeader2);

/* //HEADER FRAGMENT*/

/* FRAGMENT WITH MAIN and H1 */
let fragmentMain2 = document.createDocumentFragment();

    const mainElem2 = document.createElement("main");
    fragmentMain2.append(mainElem2);

    let divContainerMain2 = document.createElement("div");
    divContainerMain2.className = "container";
    mainElem2.prepend(divContainerMain2);

    const h1Elem2 = document.createElement("h1");
    h1Elem2.innerText = "Order books";
    divContainerMain2.append(h1Elem2);

    let formElem = document.getElementsByTagName("form")[0];
    divContainerMain2.appendChild(formElem)
    headerElem2.after(fragmentMain2);
/* // FRAGMENT WITH MAIN and H1 */


/* FOOTER  FRAGMENT*/
let fragmentFooter2 = document.createDocumentFragment();

let footerElem2 = document.createElement("footer");
fragmentFooter2.prepend(footerElem2);

let divContainerFooter2 = document.createElement("div");
divContainerFooter2.className = "container";
footerElem2.prepend(divContainerFooter2);

let divFooterContent2 = document.createElement("div");
divFooterContent2.className ="footer-content";
divContainerFooter2.prepend(divFooterContent2);

let pFooter2 = document.createElement("p");
pFooter2.textContent = "November, 2022";
divFooterContent2.append(pFooter2);

mainElem2.after(fragmentFooter2);

/*// FOOTER  FRAGMENT*/


/* FORM VALIDATION*/
document.getElementsByTagName("form")[0].addEventListener("submit", validationForm);


let firstNameInput = document.getElementById("firstName").value;
let surnameInput = document.getElementById("surname").value;
let deliveryDateInput = document.getElementById("deliveryDate").value;
let streetInput = document.getElementById("street").value;
let houseNumberInput = document.getElementById("houseNumber").value;
let flatNumberInput = document.getElementById("flatNumber").value;
let submitButton = document.getElementsByClassName("form-button")[0];

let firstNameError = document.getElementById("firstName-error");
let surnameError = document.getElementById("surname-error");
let deliveryDateError = document.getElementById("deliveryDate-error");
let streetError = document.getElementById("street-error");
let houseNumberError = document.getElementById("houseNumber-error");
let flatNumberError = document.getElementById("flatNumber-error");
let submitButtonSpan = document.getElementById("submit-error");



function validateFirstName(){

    if(firstNameInput.length < 4 ||  //CHANGE THE CONDITION
             firstNameInput.length === 0 ||
         !typeof firstNameInput === 'string' ||
                firstNameInput.match(/^[a-z ,.'-]+$/i)){

        firstNameError.innerHTML = "The field is invalid";
        document.getElementById("firstName").style.borderColor = "red";
        return false;
    }

    firstNameError.innerHTML = "f058";
    return true;
}


function validateSurname(){
    if(        surnameInput.length < 5 ||
              surnameInput.length === 0 ||
      !typeof surnameInput === 'string' ){//CHANGE THE CONDITION

    surnameError.innerHTML = "The field is invalid";
    document.getElementById("surname").style.borderColor = "red";
    return false;
    }

    surnameError.innerHTML = "f058";
    return true;
}


function validateDeliveryDate(){
    if(deliveryDateInput >-1 ){ //CHANGE THE CONDITION
        deliveryDateError.innerHTML = "The field is invalid";
        document.getElementById("deliveryDate").style.borderColor = "red";
        return false;
    }

    deliveryDateError.innerHTML = "f058";
    return true;
}


function validateStreet(){
    if(streetInput.length <5 || streetInput.length === 0 ||
        !streetInput.match(/^\w+$/i)){//CHANGE THE CONDITION

        streetError.innerHTML = "The field is invalid";
        document.getElementById("street").style.borderColor = "red";
        return false;
    }

    streetError.innerHTML = "f058";
    return true;
}


function validateHouseNumber(){
    if(!houseNumberInput.match(/^[1-9]+[0-9]*/gm)){//CHANGE THE CONDITION
        houseNumberError.innerHTML = "The field is invalid";
        document.getElementById("houseNumber").style.borderColor = "red";
        return false;
    }

    houseNumberError.innerHTML = "f058";
    return true;
}


function validateFlatNumber(){
    if(!flatNumberInput.match(/^[1-9]+[0-9]*/gm)){//CHANGE THE CONDITION
        flatNumberError.innerHTML = "The field is invalid";
        document.getElementById("flatNumber").style.borderColor = "red";
        return false;
    }

    flatNumberError.innerHTML = "f058";
    return true;
}


function validationForm(){

    if(!validateFirstName() &&
        !validateSurname() &&
        !validateDeliveryDate() &&
        !validateStreet() &&
        !validateHouseNumber() &&
        !validateFlatNumber()){
        submitButtonSpan.innerHTML = "All field must be filled out";
        return false;
    }

    return true;

}

/*// FORM VALIDATION*/