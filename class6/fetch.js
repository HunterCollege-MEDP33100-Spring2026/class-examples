const libraryElement = document.querySelector('.library');
const showAllBtn = document.querySelector('#show-all');
const showAvailableBtn = document.querySelector('#show-available');

/*
    ============================================
    PART 2: Async JS & Fetch
    ============================================
*/


/* ----- Step 1: Fetch the data ----- */
// Use async/await
// async function getData() {
//     const data = await fetch('books.json');
//     console.log(data);
//     const bookData = await data.json();
//     console.log(bookData);

//     displayBooks(bookData);
// }

// Use promises
function getData() {
    fetch('books.json')
        .then(function(data) {
            return data.json();
        })
        .then(function(bookData){
            displayBooks(bookData);
        })
}

getData();

/* ----- Step 2: Display the data ----- */
function displayBooks(books) {
    for (let i = 0; i < books.length; i++) {
        const title = books[i].title;
        const author = books[i].author;
        const numOfCopies = books[i].numOfCopies;
        // console.log(title, author, numOfCopies);

        const bookElement = document.createElement('div');
        bookElement.classList.add('book');
        libraryElement.appendChild(bookElement);
        
        const titleElement = document.createElement('p');
        titleElement.classList.add('book_title');
        titleElement.textContent = title;
        // console.log(titleElement)
        bookElement.appendChild(titleElement);

        const authorElement = document.createElement('p');
        authorElement.classList.add('book_author');
        authorElement.textContent = author;
        // console.log(authorElement)
        bookElement.appendChild(authorElement);

        const inventoryElement = document.createElement('p');
        inventoryElement.classList.add('book_author');
        inventoryElement.textContent = "Number of copies: " + numOfCopies;
        // console.log(inventoryElement)
        bookElement.appendChild(inventoryElement);

        bookElement.addEventListener('click', function() {
            // console.log('clicked this book', title);

            if (books[i].numOfCopies > 0) {
                books[i].numOfCopies--;
            }
            inventoryElement.textContent = "Number of copies: " + books[i].numOfCopies;
            if (books[i].numOfCopies === 0) {
                bookElement.classList.add('disabled')
            }
        });


    }
}


/* ----- Step 3: Filter buttons ----- */
const showAllButton = document.querySelector('#show-all');
const availableOnlyButton = document.querySelector('#show-available');

availableOnlyButton.addEventListener('click', function() {
    console.log('show available only')

    const disabledBooks = document.querySelectorAll('.disabled');
    console.log(disabledBooks)
    for (let i = 0; i < disabledBooks.length; i++) {
        disabledBooks[i].style.display = 'none';
    }
})

showAllButton.addEventListener('click', function() {
    const books = document.querySelectorAll('.book');
    console.log(books);

    for (let i = 0; i < books.length; i++) {
        books[i].style.display = 'block';
    }
})
