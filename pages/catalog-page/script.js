
/* HEADER  FRAGMENT*/
let fragmentHeader = document.createDocumentFragment();


let headerElem = document.createElement("header");
fragmentHeader.prepend(headerElem);

let divContainerHeader = document.createElement("div");
divContainerHeader.className = "container";
headerElem.prepend(divContainerHeader);

let divImgWrapperHead = document.createElement("div");
divImgWrapperHead.className = "head-img-wrapper";
divContainerHeader.prepend(divImgWrapperHead);

let imgHeader = document.createElement("img");
// imgHeader.setAttribute('src',"../../assets/images/header-img1_1.png");
imgHeader.src = "../../assets/images/header-img1_1.png";
imgHeader.setAttribute('alt', "Heading image.");
divImgWrapperHead.prepend(imgHeader);


let divWrapper = document.getElementsByClassName("wrapper")[0];
divWrapper.appendChild(fragmentHeader);

/* //HEADER FRAGMENT*/


/* FRAGMENT WITH MAIN , H1  and WRAPPER for BABY CARDS*/
let fragmentMain = document.createDocumentFragment();

    const mainElem = document.createElement("main");
    fragmentMain.append(mainElem);

    let divContainerMain = document.createElement("div");
    divContainerMain.className = "container";
    mainElem.prepend(divContainerMain);



    const divMainHeaderWrapper = document.createElement("div");
    divMainHeaderWrapper.className = "main-header-wrapper";
    divContainerMain.append(divMainHeaderWrapper);


    const h1Elem = document.createElement("h1");
    h1Elem.innerText = "Book Catalog";
    divMainHeaderWrapper.append(h1Elem);

    const divDropdown = document.createElement("div");
    divDropdown.className = "dropdown";
    divMainHeaderWrapper.append(divDropdown);

    const buttonBagButtonContainer = document.createElement("button");
    buttonBagButtonContainer.className = "bag-button-container";
    buttonBagButtonContainer.innerHTML = 'My bag <i class="fa fa-shopping-basket"></i>';
    divDropdown.append(buttonBagButtonContainer);

    const divDropdownContent = document.createElement("div");
    divDropdownContent.className = "dropdown-content";
    divDropdown.append(divDropdownContent);

    const divBabyCardHeader = document.createElement("div");
    divBabyCardHeader.className = "bag-card-header";
    divDropdownContent.append(divBabyCardHeader);

    const pTotalSum = document.createElement("p");
    pTotalSum.innerHTML = "Total: $&#9;";
    divBabyCardHeader.append(pTotalSum);

    const spanTotalSum = document.createElement("span");
    spanTotalSum.className = "total-sum";
    spanTotalSum.innerHTML = 0;
    pTotalSum.append(spanTotalSum);

    const buttonConfirmButton = document.createElement("button");
    buttonConfirmButton.className = "bag-confirm-button";
    buttonConfirmButton.innerHTML = 'Confirm order';
    divBabyCardHeader.append(buttonConfirmButton);


    let divCardsWrapper = document.createElement("div");
    divCardsWrapper.className = "cards-wrapper";
    divContainerMain.append(divCardsWrapper);


    headerElem.after(fragmentMain);
/* // FRAGMENT WITH MAIN , H1  and WRAPPER for BABY CARDS*/


/* ARRAY WITH CARD FRAGMENTS */
let fragmentCardArr = [];
for(let i=0; i < 10; i++){
    const currentFragment = document.createDocumentFragment();

    // const mainElem = document.createElement("main");
    // const h1Elem = document.createElement("h1");

    const divCard = document.createElement("div");
    divCard.id = `card-${i}`;
    divCard.className = "card";
    // divContainer.append(divCard);

    const divImgWrapperCard = document.createElement("div");
    divImgWrapperCard.className = "img-wrapper";
    divCard.append(divImgWrapperCard);

    const imgCard = document.createElement("img");
    imgCard.src = "../../assets/images/book-cover1.jpg";
    imgCard.alt = "Book cover";
    divImgWrapperCard.append(imgCard);

    const divCardContentContainer = document.createElement("div");
    divCardContentContainer.className = "card-content-container";
    divCard.append(divCardContentContainer);

    const divCardHeaderContainer = document.createElement("div");
    divCardHeaderContainer.className = "card-header-container";
    divCardContentContainer.append(divCardHeaderContainer);

    const pAuthor = document.createElement("p");
    pAuthor.className ="author";
    divCardHeaderContainer.append(pAuthor);

    const cardCloseButton = document.createElement("button");
    cardCloseButton.className = "card-close-button";
    cardCloseButton.innerHTML = "&times;";
    divCardHeaderContainer.append(cardCloseButton);

    const divTitle = document.createElement("div");
    divTitle.className ="title";
    divCardContentContainer.append(divTitle);
    
    const divPrice = document.createElement("div");
    divPrice.className = "price";
    divPrice.textContent ="Price: $";
    divCardContentContainer.append(divPrice);

    const aShowMore = document.createElement("a");
    aShowMore.className = "show-more";
    aShowMore.href = `#modal-${i}`;
    aShowMore.textContent = "Show more...";
    aShowMore.setAttribute("data-modal-target",".modal");
    divCardContentContainer.append(aShowMore);

    /*--------Modal wondow----------- */
    const divModal = document.createElement("div");
    divModal.className = "modal";
    divModal.id = `#modal-${i}`;
    divCardContentContainer.append(divModal);

    const divModalHeader = document.createElement("div");
    divModalHeader.className = "modal-header";
    divModal.append(divModalHeader);

    const divModalTitle = document.createElement("div");
    divModalTitle.className = "modal-title";
    divModalHeader.append(divModalTitle);

    const divModalButton = document.createElement("button");
    divModalButton.className = "close-button";
    divModalButton.setAttribute("data-close-button", "");
    divModalButton.innerHTML = "&times;";
    divModalHeader.append(divModalButton);

    const divModalBody = document.createElement("div");
    divModalBody.className = "modal-body";
    divModalBody.innerHTML = "modal-body-modal-body-modal-body-modal-bodymodal-body";
    divModal.append(divModalBody);

    const divModalOverlay = document.createElement("div");
    divModalOverlay.className = "overlay";
    divModal.after(divModalOverlay);
    /*// -------Modal wondow ------------*/

    const divCardButton = document.createElement("div");
    divCardButton.className = "card-button";
    divCardContentContainer.append(divCardButton);

    const aButton = document.createElement("a");
    aButton.className = "button";
    aButton.href = "#";
    aButton.textContent = "Add to bag";
    divCardButton.append(aButton);


    currentFragment.append(divCard);

    // console.log(currentFragment);
    fragmentCardArr.push(currentFragment);
}
/* // ARRAY WITH CARD FRAGMENTS */


/* ARRAY FOR STORING FILLED BABY CARDS FROM CARD FRAGMENTS*/
let totalSum = 0;
const bagCardsArr = [];
/* // ARRAY FOR STORING FILLED BABY CARDS FROM CARD FRAGMENTS*/


/*ARRAY WITH FILLED BABY CARD FRAGMENTs */
const fragmentBabyCardsArr = [];

for (let i=0; i < fragmentCardArr.length; i++){
    const currentBabyCardFragment = document.createDocumentFragment();

    let divBabyCardWrapper = document.createElement("div");
    divBabyCardWrapper.className = "baby-card-wrapper";
    divBabyCardWrapper.id = `baby-card-${i}`;
    currentBabyCardFragment.append(divBabyCardWrapper);

    let divCardImgWrapper = document.createElement("div");
    divCardImgWrapper.className = "baby-card-img-wrapper";
    divBabyCardWrapper.append(divCardImgWrapper);

    let divBabyCardImg = document.createElement("img");
    divBabyCardImg.alt = "Book cover image";
    divCardImgWrapper.append(divBabyCardImg);

    let divDescriptionWrapper = document.createElement("div");
    divDescriptionWrapper.className = "description-wrapper";
    divBabyCardWrapper.append(divDescriptionWrapper);

    let pAuthor = document.createElement("p");
    divDescriptionWrapper.append(pAuthor);

    let pTitle = document.createElement("p");
    divDescriptionWrapper.append(pTitle);

    let pPrice = document.createElement("p");
    let priceFromCard = fragmentCardArr[i].querySelector(".card-content-container .price").innerHTML;
    divBabyCardWrapper.append(pPrice);

    let buttonBabyCloseButton = document.createElement("button");
    buttonBabyCloseButton.className = "baby-close-button";
    buttonBabyCloseButton.innerHTML = "&times;";
    divBabyCardWrapper.append(buttonBabyCloseButton);

    fragmentBabyCardsArr.push(currentBabyCardFragment);
}
/*//ARRAY WITH FILLED BABY CARD FRAGMENTs */



/* FETCHING .JSON WITH BOOKS AND FILLING THE CARDS and BABY CARD's FRAGMENTS WITH THEM*/
const bookListURL = "../../assets/extra-materials/books.json";
const config ={
mode:"no-cors",
};

let books = fetch(bookListURL, config) //path to the file with json data
        .then(response => {
            return response.json();
        })
        .then(data => {
            // console.log(data);
            let books = data;

            books.map(function(book, index){
                // Filling Cards from Json
                fragmentCardArr[index].querySelector(".img-wrapper img").src = book.imageLink;
                fragmentCardArr[index].querySelector(".author").innerHTML = book.author;
                fragmentCardArr[index].querySelector(".title").innerHTML  = book.title;
                fragmentCardArr[index].querySelector(".price").innerHTML  += book.price;

                fragmentCardArr[index].querySelector(".modal-title").innerHTML  = book.title;
                fragmentCardArr[index].querySelector(".modal-body").innerHTML  = book.description;
                // fragmentCardArr[index].querySelector(".description").innerHTML  = book.description;

                // Filling BabyCards from Json
                fragmentBabyCardsArr[index].querySelector(".baby-card-img-wrapper img").src = book.imageLink;
                fragmentBabyCardsArr[index].querySelector(".description-wrapper > p").innerHTML = book.author;
                fragmentBabyCardsArr[index].querySelector(".description-wrapper p:last-child").innerHTML = book.title;
                fragmentBabyCardsArr[index].querySelector(".baby-card-wrapper > p").innerHTML += book.price;

            })

            // console.log("fragmentCardArr", fragmentCardArr[0].querySelector(".author").innerHTML);
            // console.log("fragmentCardArr", fragmentCardArr[0]);


            fragmentCardArr.forEach((elem, index) => divCardsWrapper.append(elem.cloneNode(true)));
            // divDropdownContent.append(fragmentBabyCardsArr[0]);


             /* JS for Module Window */
             const openModalButtons = document.querySelectorAll("[data-modal-target]");
             const closeModalButtons = document.querySelectorAll("[data-close-button]");
             const overlay = document.querySelector(".overlay");

             openModalButtons.forEach(function(button,index) {
                 button.addEventListener("click", () => {
                     const modal = document.querySelectorAll(button.dataset.modalTarget)[index];
                     openModal(modal);
                 })
             })

             overlay.addEventListener("click", () => {
                 const modals = document.querySelectorAll(".modal.active");
                 modals.forEach(modal => {
                     closeModal(modal);
                 });
             });

             closeModalButtons.forEach(button => {
                 button.addEventListener("click", () => {
                    const modal = button.closest(".modal");
                    closeModal(modal);
                 })
             })

             function openModal(modal) {
                 if(modal === null) return
                 modal.classList.add("active");
                 overlay.classList.add("active");

             }

             function closeModal(modal) {
                 if(modal === null) return
                 modal.classList.remove("active");
                 overlay.classList.remove("active");
             }
             /* //JS for Module Window */

            /*HANDLING ADDING and REMOVING TO THE BAG*/

            let buttonsCard = [... document.getElementsByClassName("card-button")];
            buttonsCard.forEach((btn,index) => {
                btn.addEventListener("click", () =>{addToBagHandler(index)})
            })

            function addToBagHandler(index) {
                divDropdownContent.append(fragmentBabyCardsArr[index].cloneNode(true));
                totalSum += +fragmentBabyCardsArr[index].querySelector(".baby-card-wrapper > p").innerHTML;
                document.querySelector("p > span.total-sum").innerHTML = totalSum;

                let buttonsBabyCard  = [... divDropdownContent.getElementsByClassName("baby-close-button")];
                buttonsBabyCard.forEach(btn => btn.addEventListener("click", removeFromBagHandler));
            }

            function removeFromBagHandler(event) {
                let currentBabyButton = event.target;
                let babyCardWrapper = currentBabyButton.parentElement;
                totalSum -= +babyCardWrapper.querySelector(".baby-card-wrapper > p").innerHTML;
                document.querySelector("p > span.total-sum").innerHTML = totalSum;

                babyCardWrapper.remove();
            }
            /* // HANDLING ADDING and REMOVING TO THE BAG*/
        });
console.log("fragmentCardArr_after", fragmentCardArr[0].querySelector(".author").innerHTML);


/* // FETCHING .JSON WITH BOOKS AND FILLING THE CARDS and BABY CARD's FRAGMENTS WITH THEM*/


/* FOOTER  FRAGMENT*/
let fragmentFooter = document.createDocumentFragment();

let footerElem = document.createElement("footer");
fragmentFooter.prepend(footerElem);

let divContainerFooter = document.createElement("div");
divContainerFooter.className = "container";
footerElem.prepend(divContainerFooter);

let divFooterContent = document.createElement("div");
divFooterContent.className ="footer-content";
divContainerFooter.prepend(divFooterContent);

let pFooter = document.createElement("p");
pFooter.textContent = "November, 2022";
divFooterContent.append(pFooter);

mainElem.after(fragmentFooter);

/*// FOOTER  FRAGMENT*/