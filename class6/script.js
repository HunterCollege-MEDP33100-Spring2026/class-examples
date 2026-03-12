const library = document.querySelector('.library');

/*
    ============================================
    PART 1: Review - DOM Manipulation & Events
    ============================================

    We have an array of book objects in books.js.
    Each book has: title, author, numOfCopies.

    Our goal: display all the books on the page,
    and add interactive features using event listeners.
*/


/* ----- Step 1: Display all books -----
    Loop through the books array.
    For each book, create a div with class "book".
    Inside each div, create:
      - a <p> with class "book_title" for the title
      - a <p> with class "book_author" for the author (add "by " before the name)
      - a <p> with class "book_num_copies" for the copies (add "Available copies: " before the number)
    Append each div to the library container.
    
    If a book has 0 copies, also add the class "disabled" to its div.
*/

for (let i = 0; i < books.length; i++) {
    const bookDiv = document.createElement('div');
    bookDiv.classList.add('book');

    const titleEl = document.createElement('p');
    titleEl.classList.add('book_title');
    titleEl.innerText = books[i].title;

    const authorEl = document.createElement('p');
    authorEl.classList.add('book_author');
    authorEl.innerText = 'by ' + books[i].author;

    const copiesEl = document.createElement('p');
    copiesEl.classList.add('book_num_copies');
    copiesEl.innerText = 'Available copies: ' + books[i].numOfCopies;

    bookDiv.appendChild(titleEl);
    bookDiv.appendChild(authorEl);
    bookDiv.appendChild(copiesEl);

    if (books[i].numOfCopies === 0) {
        bookDiv.classList.add('disabled');
    }

    /* ----- Step 2: Add click event to borrow a book -----
        Add a click event listener to each book div.
        When clicked:
          - Decrease that book's numOfCopies by 1
          - Update the "Available copies" text on the page
          - If copies reach 0, add the class "disabled" to the div
        
        Hint: you'll need to add the event listener inside the same loop 
        where you create the elements, so you have access to the right book.
    */

    bookDiv.addEventListener('click', function() {
        books[i].numOfCopies--;
        copiesEl.innerText = 'Available copies: ' + books[i].numOfCopies;
        if (books[i].numOfCopies <= 0) {
            bookDiv.classList.add('disabled');
        }
    });

    library.appendChild(bookDiv);
}


/* ----- Step 3: Filter buttons -----
    There are two buttons on the page: "Show All" and "Available Only".
    
    Add a click event listener to "show-available":
      - Loop through ALL the book divs on the page
      - If a book has the class "disabled", hide it (set style.display to 'none')
    
    Add a click event listener to "show-all":
      - Loop through ALL the book divs and show them again (set style.display to '')
    
    Hint: use document.querySelectorAll('.book') to get all book divs.
*/

const showAllBtn = document.querySelector('#show-all');
const showAvailableBtn = document.querySelector('#show-available');

showAvailableBtn.addEventListener('click', function() {
    const allBooks = document.querySelectorAll('.book');
    for (let i = 0; i < allBooks.length; i++) {
        if (allBooks[i].classList.contains('disabled')) {
            allBooks[i].style.display = 'none';
        }
    }
});

showAllBtn.addEventListener('click', function() {
    const allBooks = document.querySelectorAll('.book');
    for (let i = 0; i < allBooks.length; i++) {
        allBooks[i].style.display = '';
    }
});