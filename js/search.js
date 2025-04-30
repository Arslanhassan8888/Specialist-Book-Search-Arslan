// search.js
import { books } from './data.js';
import { addToWishList } from './wishlist.js';

export function setupBookSearch() {
  const form = document.getElementById("book-form");
  const resetButton = document.getElementById("reset-button");
  const errorMessage = document.getElementById("error-message");
  const bookList = document.getElementById("book-list");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    errorMessage.textContent = "";

    const genre = document.getElementById("genre").value;
    const author = document.getElementById("author").value.trim().toLowerCase();
    const minPriceStr = document.getElementById("min-price").value.trim();
    const maxPriceStr = document.getElementById("max-price").value.trim();
    const language = document.getElementById("language").value;
    const format = document.getElementById("format").value;

    const priceRegex = /^\d+(\.\d{1,2})?$/;
    if (minPriceStr && !priceRegex.test(minPriceStr)) {
      errorMessage.textContent = "Minimum price must be in format 0.00";
      return;
    }
    if (maxPriceStr && !priceRegex.test(maxPriceStr)) {
      errorMessage.textContent = "Maximum price must be in format 0.00";
      return;
    }

    const min = parseFloat(minPriceStr) || 0;
    const max = parseFloat(maxPriceStr) || Infinity;

    const filtered = books.filter(book => {
      if (genre && book.genre !== genre) return false;
      if (author && !book.author.toLowerCase().includes(author)) return false;
      if (book.price < min || book.price > max) return false;
      if (language && book.language !== language) return false;
      if (format && book.format !== format) return false;
      return true;
    });

    let topBook = null;
    let highestRating = 0;
    filtered.forEach(book => {
      if (book.rating > highestRating) {
        highestRating = book.rating;
        topBook = book;
      }
    });

    bookList.innerHTML = "";

    if (filtered.length === 0) {
      const li = document.createElement("li");
      li.textContent = "No books found matching your criteria.";
      bookList.appendChild(li);
    } else {
      filtered.forEach(book => {
        const li = document.createElement("li");
        if (book === topBook) li.classList.add("top-pick");

        const title = document.createElement("strong");
        title.textContent = book.title;
        const authorText = document.createTextNode(` by ${book.author}`);

        const details = document.createElement("div");
        details.innerHTML = `<em>£${book.price.toFixed(2)}</em> | ${book.format} | ${book.language} | Rating: ${book.rating}/5 ${getStars(book.rating)}`;

        const description = document.createElement("p");
        description.textContent = book.description;

        const addButton = document.createElement("button");
        addButton.textContent = "Add to Wish List";
        addButton.addEventListener("click", () => addToWishList(book));

        li.appendChild(title);
        li.appendChild(authorText);
        li.appendChild(document.createElement("br"));
        li.appendChild(details);
        li.appendChild(description);
        li.appendChild(addButton);

        bookList.appendChild(li);
      });
    }
  });

  resetButton.addEventListener("click", function () {
    form.reset();
    bookList.innerHTML = "";
    errorMessage.textContent = "";
  });
}

function getStars(rating) {
  const full = Math.floor(rating);
  return "★".repeat(full) + "☆".repeat(5 - full);
}
