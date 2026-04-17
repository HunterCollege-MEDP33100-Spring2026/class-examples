const libraryElement = document.querySelector('.library');
const showAllBtn = document.querySelector('#show-all');
const showAvailableBtn = document.querySelector('#show-available');
const loadingElement = document.querySelector('#loading');
const errorMessagElement = document.querySelector('#error_message');

let nextPage = null;
let isGettingData = false;
/*
    ============================================
    PART 2: Async JS & Fetch
    ============================================
*/


/* ----- Step 1: Fetch the data ----- */
// Use async/await
async function getData(url) {
    isGettingData = true;
    try {
        let bookData = null;
        const storedBookData = localStorage.getItem(url);
        if (storedBookData){
            console.log('using stored data');
            bookData = JSON.parse(storedBookData);
        } else {
            const data = await fetch(url);
            console.log(data);
            const bookDataResponse = await data.json();
            console.log(bookDataResponse);
            localStorage.setItem(url, JSON.stringify(bookDataResponse));
            bookData = bookDataResponse;
        }
        console.log(bookData);
        nextPage = bookData.next;

        displayBooks(bookData.results);
    } catch (error) {
        console.log(error);
        errorMessagElement.style.display = "block";
    } finally {
        loadingElement.style.display = "none";
        isGettingData = false;
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

getData('https://gutendex.com/books');

/* ----- Step 2: Display the data ----- */
function displayBooks(books) {
    for (let i = 0; i < books.length; i++) {
        const title = books[i].title;
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
        bookElement.appendChild(titleElement);

        const authorElement = document.createElement('p');
        authorElement.classList.add('book_author');
        authorElement.textContent = author;
        bookElement.appendChild(authorElement);

        const downloadCountElement = document.createElement('p');
        downloadCountElement.classList.add('book_author');
        downloadCountElement.textContent = "Number of times downloaded: " + downloadCount;
        bookElement.appendChild(downloadCountElement);

        const imageElement = document.createElement('img');
        imageElement.src = books[i].formats['image/jpeg'];
        imageElement.setAttribute('loading', 'lazy');
        bookElement.appendChild(imageElement)
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

document.addEventListener('scrollend', function (event) {
    console.log("scrolled to end of page")
    if (nextPage && isGettingData === false) {
        getData(nextPage);
    }
   
})

