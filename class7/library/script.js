const libraryElement = document.querySelector('.library');
const showAllBtn = document.querySelector('#show-all');
const showAvailableBtn = document.querySelector('#show-available');
const loadingElement = document.querySelector('#loading');
const errorMessagElement = document.querySelector('#error_message');
/*
    ============================================
    PART 2: Async JS & Fetch
    ============================================
*/


/* ----- Step 1: Fetch the data ----- */
// Use async/await
async function getData() {
    try {
        const data = await fetch('https://gutendex.com/books');
        console.log(data);
        const bookData = await data.json();
        console.log(bookData);
        

        displayBooks(bookData.results);
    } catch (error) {
        console.log(error);
        errorMessagElement.style.display = "block";
    } finally {
        loadingElement.style.display = "none";
    }
}

// Use promises
// function getData() {
//     fetch('https://gutendex.com/books')
//         .then(function(data) {
//             return data.json();
//         })
//         .then(function(bookData){
//             console.log(bookData)
//             displayBooks(bookData.results);
//         })
// }

getData();

/* ----- Step 2: Display the data ----- */
function displayBooks(books) {
    for (let i = 0; i < books.length; i++) {
        const title = books[i].title;
        // const author = books[i].authors[0].name;
        let author = "";
        if (books[i].authors[0]){
            author = books[i].authors[0].name;
        }
        const downloadCount = books[i].download_count;
        console.log(title, author, downloadCount);

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

        const downloadCountElement = document.createElement('p');
        downloadCountElement.classList.add('book_author');
        downloadCountElement.textContent = "Number of times downloaded: " + downloadCount;
        // console.log(inventoryElement)
        bookElement.appendChild(downloadCountElement);

        // bookElement.addEventListener('click', function() {
        //     // console.log('clicked this book', title);

        //     if (books[i].numOfCopies > 0) {
        //         books[i].numOfCopies--;
        //     }
        //     inventoryElement.textContent = "Number of copies: " + books[i].numOfCopies;
        //     if (books[i].numOfCopies === 0) {
        //         bookElement.classList.add('disabled')
        //     }
        // });


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
