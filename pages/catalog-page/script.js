
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


/* FRAGMENT WITH MAIN and H1 */
let fragmentMain = document.createDocumentFragment();

    const mainElem = document.createElement("main");
    fragmentMain.append(mainElem);

    let divContainerMain = document.createElement("div");
    divContainerMain.className = "container";
    mainElem.prepend(divContainerMain);

    const h1Elem = document.createElement("h1");
    h1Elem.innerText = "Book Catalog";
    divContainerMain.append(h1Elem);

    headerElem.after(fragmentMain);
/* // FRAGMENT WITH MAIN and H1 */


/* ARRAY WITH CARD FRAGMENTS */
let fragmentCardArr = [];
for(let i=0; i < 10; i++){
    const currentFragment = document.createDocumentFragment();

    // const mainElem = document.createElement("main");
    // const h1Elem = document.createElement("h1");

    const divCard = document.createElement("div");
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

    const pAuthor = document.createElement("p");
    pAuthor.className ="author";
    divCardContentContainer.append(pAuthor);

    const divTitle = document.createElement("div");
    divTitle.className ="title";
    divCardContentContainer.append(divTitle);
    
    const divPrice = document.createElement("div");
    divPrice.className = "price";
    divPrice.textContent ="Price: $";
    divCardContentContainer.append(divPrice);

    const aShowMore = document.createElement("a");
    aShowMore.className = "show-more";
    aShowMore.href = "#";
    aShowMore.textContent = "Show more...";
    divCardContentContainer.append(aShowMore);

    const divDescription = document.createElement("div");
    divDescription.className = "description";
    divCardContentContainer.append(divDescription);

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


/* FETCHING .JSON WITH BOOKS AND FILLING THE CARD FRAGMENTS WITH THEM*/
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
                fragmentCardArr[index].querySelector(".img-wrapper img").src = book.imageLink;
                fragmentCardArr[index].querySelector(".author").innerHTML = book.author;
                fragmentCardArr[index].querySelector(".title").innerHTML  = book.title;
                fragmentCardArr[index].querySelector(".price").innerHTML  += book.price;
                fragmentCardArr[index].querySelector(".description").innerHTML  = book.description;
            })


            console.log("fragmentCardArr", fragmentCardArr[0].querySelector(".author").innerHTML);


            fragmentCardArr.forEach((elem, index) => h1Elem.after(elem));


        });


/* // FETCHING .JSON WITH BOOKS AND FILLING THE CARD FRAGMENTS WITH THEM*/


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