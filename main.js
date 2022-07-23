let myLibrary = [];
let modal = document.getElementById("myModal");
let span = document.getElementsByClassName("close")[0];



function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.readStatus = read
    this.info = function () {
        return this.info;
    }
}

function addBookToLibrary() {
    getFormInput()

    const container = document.querySelector('#container');
    const card = document.createElement('div');
    card.classList.add('card');
    card.setAttribute('style', 'background-color: grey;');
    container.appendChild(card);
    const selectCard = document.querySelector('.card');

    const h1 = document.createElement('h1');
    h1.textContent = `Title: ${title.value}`

    const hr = document.createElement('hr');

    const bookAuthor = document.createElement('p')
    const bookPages = document.createElement('p')
    const bookRead = document.createElement('p')

    bookAuthor.textContent = `Book author: ${author.value}`
    bookPages.textContent = `Book pages #: ${pages.value},`
    bookRead.textContent = `Already read? ${readStatus.value}`

    selectCard.appendChild(h1);
    selectCard.appendChild(bookAuthor);
    selectCard.appendChild(bookPages);
    selectCard.appendChild(bookRead);
    selectCard.appendChild(hr);
}

span.onclick = function () {
    modal.style.display = "none";
}

function hideModal() {
    modal.style.display = "none";
}


window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function printBook() {
    for (let i = 0; i < myLibrary.length; i++) {
        const book = myLibrary[i];
        // console.log(myLibrary)
        const container = document.querySelector('#container');
        const card = document.createElement('div');
        card.classList.add('card');
        card.setAttribute('style', 'background-color: grey;');
        container.appendChild(card);
        const selectCard = document.querySelector('.card');

        const h1 = document.createElement('h1');
        h1.textContent = `${book}`

        const hr = document.createElement('hr');


        const bookDetails = document.createElement('p')
        bookDetails.textContent = `Book author:
        Book pages #:
        Read/not read?`

        selectCard.appendChild(h1);

        selectCard.appendChild(bookDetails);
        selectCard.appendChild(hr);
    }
}

function getFormInput() {
    let author = document.querySelector('#author').value;
    console.log(author);
    let title = document.querySelector('#title').value;
    console.log(title);
    let pages = document.querySelector('#pages').value;
    console.log(pages);
    let readStatus = document.querySelector('#readStatus').value;
    console.log(readStatus);
}

function createNewBook() {
    modal.style.display = "block";

}

// const theHobbit = new Book('The Hobbit', 'by J.R.R. Tolkien', '295 pages', 'not read yet')
// console.log(theHobbit.info());

printBook()
