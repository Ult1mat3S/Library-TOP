let myLibrary = ['Fake Book: Edition 2', 'The Fake Book'];
let modal = document.getElementById("myModal");
let span = document.getElementsByClassName("close")[0];



function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function () {
        return this.info;
    }
}

function addBookToLibrary() {
    modal.style.display = "block";
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
        h1.textContent = `Book ${i + 1}`

        const hr = document.createElement('hr');

        const h3 = document.createElement('h3')
        h3.textContent = `${book}`

        const bookDetails = document.createElement('p')
        bookDetails.textContent = "book author, book pages #, read/not read?"

        selectCard.appendChild(h1);
        selectCard.appendChild(h3);
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
    let read = document.querySelector('#read').value;
    console.log(read);
    return author;
    // console.log()
    // bookTitle: title,
    // bookPages: pages,
    // bookRead: read


}

function createNewBook() {
    getFormInput()
    console.log(author.value);
    console.log(title.value);
    console.log(pages.value);
    console.log(read.value);
    i = 0

    const container = document.querySelector('#container');
    const card = document.createElement('div');
    card.classList.add('card');
    card.setAttribute('style', 'background-color: grey;');
    container.appendChild(card);
    const selectCard = document.querySelector('.card');

    const h1 = document.createElement('h1');
    h1.textContent = `Book ${i + 1}`

    const hr = document.createElement('hr');

    const h3 = document.createElement('h3')
    h3.textContent = `${title.value}`

    const bookAuthor = document.createElement('p')
    const bookPages = document.createElement('p')
    const bookRead = document.createElement('p')

    bookAuthor.textContent = `Book author: ${author.value}`
    bookPages.textContent = `Book pages #: ${pages.value},`
    bookRead.textContent = `Already read? ${read.value}`

    selectCard.appendChild(h1);
    selectCard.appendChild(h3);
    selectCard.appendChild(bookAuthor);
    selectCard.appendChild(bookPages);
    selectCard.appendChild(bookRead);
    selectCard.appendChild(hr);

}

// const theHobbit = new Book('The Hobbit', 'by J.R.R. Tolkien', '295 pages', 'not read yet')
// console.log(theHobbit.info());

printBook()
