
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

let firstNameError = document.getElementById("firstName-error");

function validateFirstName(){
    let firstNameInput = document.getElementById("firstName").value;

    if(firstNameInput.length < 4){
        firstNameError.innerHTML = "&ensp;The field is invalid";
        document.getElementById("firstName").style.borderColor = "red";
        return false;
    }
    if(firstNameInput.length == 0){
            firstNameError.innerHTML = "&ensp;The field is invalid";
            document.getElementById("firstName").style.borderColor = "red";
            return false;
    }
    if(!firstNameInput.match(/^[A-Za-z]+$/i)){
            firstNameError.innerHTML = "&ensp;Only letters allowed";
            document.getElementById("firstName").style.borderColor = "red";
            return false;
    }

    firstNameError.innerHTML = '<i class="fa fa-check-circle" style="font-size:24px"></i>';
    document.getElementById("firstName").style.borderColor = "#ccc";
    return true;
}


let surnameError = document.getElementById("surname-error");

function validateSurname(){
    let surnameInput = document.getElementById("surname").value;

    if(surnameInput.length < 5){
        surnameError.innerHTML = "&ensp; The field is invalid";
        document.getElementById("surname").style.borderColor = "red";
        return false;
    }
    if(surnameInput.length == 0){
            surnameError.innerHTML = "&ensp; The field is invalid";
            document.getElementById("surname").style.borderColor = "red";
            return false;
    }
    if(!surnameInput.match(/^[A-Za-z]+$/i)){
            surnameError.innerHTML = "&ensp; Only letters allowed";
            document.getElementById("surname").style.borderColor = "red";
            return false;
    }

    surnameError.innerHTML = '<i class="fa fa-check-circle" style="font-size:24px"></i>';
    document.getElementById("surname").style.borderColor = "#ccc";
     return true;
}


let deliveryDateError = document.getElementById("deliveryDate-error");

function validateDeliveryDate(){
    // Calculate milliseconds in a day
    const minute = 1000 * 60;
    const hour = minute * 60;
    const day = hour * 24;  //86400000 ms

    let deliveryDateInput = document.getElementById("deliveryDate").value;

    let currentDate = new Date();
    let currentDateMS = currentDate.getTime();
    let deliveryDate = new Date(deliveryDateInput);
    let deliveryDateMS = deliveryDate.getTime();


    if((deliveryDateMS-currentDateMS) < day){
        deliveryDateError.innerHTML = "&ensp; The field is invalid";
        document.getElementById("deliveryDate").style.borderColor = "red";
        return false;
    }
    if(isNaN(deliveryDateMS)){
        deliveryDateError.innerHTML = "&ensp; The field is empty";
        document.getElementById("deliveryDate").style.borderColor = "red";
        return false;
    }

    deliveryDateError.innerHTML = '<i class="fa fa-check-circle" style="font-size:24px"></i>';
    document.getElementById("deliveryDate").style.borderColor = "#ccc";
     return true;
}

let streetError = document.getElementById("street-error");

function validateStreet(){
    let streetInput = document.getElementById("street").value;

    if(streetInput.length < 5){
        streetError.innerHTML = "&ensp; The field is invalid";
        document.getElementById("street").style.borderColor = "red";
        return false;
    }

    if(streetInput.length === 0){
        streetError.innerHTML = "&ensp; The field is invalid";
        document.getElementById("street").style.borderColor = "red";
        return false;
    }

    if(!streetInput.match(/^[A-Za-z0-9 ]+$/i)){
        streetError.innerHTML = "&ensp; Only letters required";
        document.getElementById("street").style.borderColor = "red";
        return false;
    }

    streetError.innerHTML = '<i class="fa fa-check-circle" style="font-size:24px"></i>';
    document.getElementById("street").style.borderColor = "#ccc";
    return true;
}

let houseNumberError = document.getElementById("houseNumber-error");


function validateHouseNumber(){
    let houseNumberInput = document.getElementById("houseNumber").value;

    if(!houseNumberInput.match(/^[+]?[0]*[1-9]+[0-9]*$/gm)){
        houseNumberError.innerHTML = "&ensp; The field is invalid";
        document.getElementById("houseNumber").style.borderColor = "red";
        return false;
    }

    houseNumberError.innerHTML = '<i class="fa fa-check-circle" style="font-size:24px"></i>';
    document.getElementById("houseNumber").style.borderColor = "#ccc";
    return true;
}


let flatNumberError = document.getElementById("flatNumber-error");

function validateFlatNumber(){
    let flatNumberInput = document.getElementById("flatNumber").value;

    if(!flatNumberInput.match(/^[1-9]+[-][1-9]+[0-9]*$|^[0]*[1-9]+[0-9]*$|^[+]?[1-9]*[1-9]+[0-9]*$/gm)){//CHANGE THE CONDITION
        flatNumberError.innerHTML = "&ensp; The field is invalid";
        document.getElementById("flatNumber").style.borderColor = "red";
        return false;
    }
    if(flatNumberInput < 0){
        flatNumberError.innerHTML = "&ensp; The field is invalid";
        document.getElementById("flatNumber").style.borderColor = "red";
        return false;
    }

    flatNumberError.innerHTML = '<i class="fa fa-check-circle" style="font-size:24px"></i>';
    document.getElementById("flatNumber").style.borderColor = "#ccc";
    return true;
}


let submitButtonElem = document.querySelector(".form-button .button");
let fields = document.querySelectorAll('form input[type="text"], form input[type="date"]');

fields = Array.from(fields); //Turn fields into an Array to apply validation methods.

fields.forEach(field => {
     field.addEventListener('blur', () => {
         submitButtonElem.disabled = !(validateFirstName() & validateSurname() &  validateDeliveryDate() & validateStreet() & validateHouseNumber() & validateFlatNumber())
     })
})

/*// FORM VALIDATION*/

/* NOTIFICATION ABOUT CREATED ORDER */
submitButtonElem.addEventListener("click", orderCompletionHandler);

    function orderCompletionHandler(event){
        event.preventDefault();
        const fragmentOrderMessage = document.createDocumentFragment();

        let divOrderMessageWrapper = document.createElement("div");
        divOrderMessageWrapper.className = "order-message-wrapper";
        fragmentOrderMessage.append(divOrderMessageWrapper);

        let divOrderMessageHeader = document.createElement("div");
        divOrderMessageHeader.className = "message-header";
        divOrderMessageHeader.innerHTML = "The order was successfully created. <br> Thank You for Shopping With Us!";
        divOrderMessageWrapper.append(divOrderMessageHeader);

        let divOrderMessageBody = document.createElement("div");
        divOrderMessageBody.className = "message-body";
        divOrderMessageWrapper.append(divOrderMessageBody);


        let spanMessageStreet = document.createElement("span");
        spanMessageStreet.className = "message-street";
        spanMessageStreet.innerHTML = document.getElementById("order-form").querySelector("#street").value;

        let spanMessageHouse = document.createElement("span");
        spanMessageHouse.className = "message-house";
        spanMessageHouse.innerHTML = document.getElementById("order-form").querySelector("#houseNumber").value;

        let spanMessageFlat = document.createElement("span");
        spanMessageFlat.className = "message-flat";
        spanMessageFlat.innerHTML = document.getElementById("order-form").querySelector("#flatNumber").value;

        let pOrderMessageDelivery = document.createElement("p");
        pOrderMessageDelivery.className = "body-delivery";
        pOrderMessageDelivery.innerHTML = `The delivery address is ${spanMessageStreet.innerHTML} street, ${spanMessageHouse.innerHTML} house, ${spanMessageFlat.innerHTML} flat.`;
        // pOrderMessageDelivery.innerHTML = `The delivery address is ${document.getElementById("order-form").querySelector("#street").value} street, ${document.getElementById("order-form").querySelector("#houseNumber").value} house, ${document.getElementById("order-form").querySelector("#flatNumber").value} flat.`;
        divOrderMessageBody.append(pOrderMessageDelivery);

        let spanMessageFirstName = document.createElement("span");
        spanMessageFirstName.className = "message-firsrName";
        spanMessageFirstName.innerHTML = document.getElementById("order-form").querySelector("#firstName").value;

        let spanMessageSurname = document.createElement("span");
        spanMessageSurname.className = "message-firsrName";
        spanMessageSurname.innerHTML = document.getElementById("order-form").querySelector("#surname").value;

        let pOrderMessageName = document.createElement("p");
        pOrderMessageName.className = "body-delivery";
        // pOrderMessageName.innerHTML = "Customer: <span class='message-firsrName'>-</span> <span class='message-firsrName'>-</span>";
        pOrderMessageName.innerHTML = `Customer is ${spanMessageFirstName.innerHTML} ${spanMessageSurname.innerHTML}.`;
        divOrderMessageBody.append(pOrderMessageName);

        divContainerMain2.appendChild(fragmentOrderMessage);
}




/*// NOTIFICATION ABOUT CREATED ORDER */


