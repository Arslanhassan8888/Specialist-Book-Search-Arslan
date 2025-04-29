const books = [
  { title: "Shadow in the Attic", author: "Lena Blackwood", genre: "mystery", price: 15.00, language: "English", format: "paperback", description: "A chilling mystery unfolds in an abandoned house." },
  { title: "Whispers Beyond", author: "Elena Vance", genre: "mystery", price: 22.50, language: "Arabic", format: "hardcover", description: "Ancient secrets hidden under moonlight." },
  { title: "Closed Room Riddle", author: "Marcus Thorne", genre: "mystery", price: 18.75, language: "French", format: "ebook", description: "A locked room hides a dangerous puzzle." },
  { title: "Vanished Words", author: "Clara Moore", genre: "mystery", price: 35.99, language: "English", format: "ebook", description: "Disappearance and deception in a library." },
  { title: "Empire Echoes", author: "Nathan Drake", genre: "historical", price: 76.00, language: "English", format: "hardcover", description: "A legacy written in ruins." },
  { title: "Chronicles of Dust", author: "Sophia Winters", genre: "historical", price: 42.00, language: "French", format: "paperback", description: "Lives shaped by revolution and loss." },
  { title: "Legends Past", author: "Omar Kassim", genre: "historical", price: 15.00, language: "Arabic", format: "hardcover", description: "Whispers from ancient civilizations." },
  { title: "Royal Betrayal", author: "Amelia Hart", genre: "historical", price: 17.50, language: "English", format: "paperback", description: "A scandal that shakes a dynasty." },
  { title: "Weaver's Dream", author: "Lucas Grant", genre: "fiction", price: 59.00, language: "English", format: "paperback", description: "Love and loss in a woven world." },
  { title: "Lost Reflections", author: "Isabelle Moreaux", genre: "fiction", price: 88.50, language: "French", format: "ebook", description: "Dreams left behind in the rain." },
  { title: "Colors of Silence", author: "Samir Hafez", genre: "fiction", price: 28.00, language: "Arabic", format: "hardcover", description: "Stories stitched through generations." },
  { title: "Silent Voice", author: "Chloe Rivers", genre: "fiction", price: 16.50, language: "English", format: "ebook", description: "Finding strength in quiet moments." },
  { title: "Diamond Heist", author: "Olivia Frost", genre: "mystery", price: 98.50, language: "English", format: "hardcover", description: "A detective's greatest challenge yet." },
  { title: "Nightfall Secrets", author: "Zaid Malik", genre: "mystery", price: 11.00, language: "Arabic", format: "ebook", description: "Murder wrapped in shadows and lies." },
  { title: "Manor Secrets", author: "Juliette Faure", genre: "mystery", price: 87.00, language: "French", format: "paperback", description: "A mansion with a dangerous past." },
  { title: "Witness in the Fog", author: "Daniel Rhodes", genre: "mystery", price: 25.50, language: "English", format: "paperback", description: "Truth hides behind the mist." },
  { title: "Fallen Thrones", author: "Victoria Leigh", genre: "historical", price: 74.00, language: "English", format: "paperback", description: "The collapse of ancient royalty." },
  { title: "Children of Time", author: "Antoine Leroux", genre: "historical", price: 33.00, language: "French", format: "hardcover", description: "Generations shaped by history." },
  { title: "Pharaoh's Curse", author: "Maya El-Sayed", genre: "historical", price: 32.00, language: "Arabic", format: "ebook", description: "Secrets buried beneath the sands." },
  { title: "Rebel Queen", author: "Claire Bennett", genre: "historical", price: 64.00, language: "English", format: "ebook", description: "A woman who defies an empire." },
  { title: "Painter's Muse", author: "Sophie Laurens", genre: "fiction", price: 25.00, language: "English", format: "hardcover", description: "Art and love collide in Italy." },
  { title: "Vivid Lives", author: "Noah Dubois", genre: "fiction", price: 57.50, language: "French", format: "paperback", description: "Life's bright and dark moments." },
  { title: "Soul's Melody", author: "Layla Amin", genre: "fiction", price: 29.50, language: "Arabic", format: "paperback", description: "Songs of hope and heartbreak." },
  { title: "Garden Secrets", author: "Emily Rowe", genre: "fiction", price: 15.50, language: "English", format: "ebook", description: "New life blooms in hidden gardens." }
];

// get DOM elements
const form = document.getElementById("book-form");
const bookList = document.getElementById("book-list");
const errorMessage = document.getElementById("error-message");
const resetButton = document.getElementById("reset-button");

// handle form submission
form.addEventListener("submit", function (e) {
  e.preventDefault();
  errorMessage.textContent = "";

  const genre = document.getElementById("genre").value;
  const author = document.getElementById("author").value.trim().toLowerCase();
  const minPriceStr = document.getElementById("min-price").value.trim();
  const maxPriceStr = document.getElementById("max-price").value.trim();
  const language = document.getElementById("language").value;
  const format = document.getElementById("format").value;

  if (minPriceStr && !/^\d+(\.\d{2})$/.test(minPriceStr)) {
    errorMessage.textContent = "Minimum price must be in format 0.00";
    return;
  }

  if (maxPriceStr && !/^\d+(\.\d{2})$/.test(maxPriceStr)) {
    errorMessage.textContent = "Maximum price must be in format 0.00";
    return;
  }

  const minPrice = minPriceStr ? parseFloat(minPriceStr) : 0;
  const maxPrice = maxPriceStr ? parseFloat(maxPriceStr) : Infinity;

  const results = books.filter(book => {
    if (genre && book.genre !== genre) return false;
    if (author && !book.author.toLowerCase().includes(author)) return false;
    if (book.price < minPrice || book.price > maxPrice) return false;
    if (language && book.language !== language) return false;
    if (format && book.format !== format) return false;
    return true;
  });

  displayBooks(results);
});

// display book list
function displayBooks(bookArray) {
  bookList.innerHTML = "";

  if (bookArray.length === 0) {
    const li = document.createElement("li");
    li.textContent = "No books found matching your criteria.";
    bookList.appendChild(li);
    return;
  }

  bookArray.forEach(book => {
    const li = document.createElement("li");

    const title = document.createElement("strong");
    title.textContent = book.title;

    const authorText = document.createTextNode(` by ${book.author}`);

    const details = document.createElement("div");
    details.innerHTML = `<em>£${book.price.toFixed(2)}</em> | ${book.format} | ${book.language}`;

    const description = document.createElement("p");
    description.textContent = book.description;

    li.appendChild(title);
    li.appendChild(authorText);
    li.appendChild(document.createElement("br"));
    li.appendChild(details);
    li.appendChild(description);

    bookList.appendChild(li);
  });
}

// handle form reset
resetButton.addEventListener("click", function () {
  form.reset();
  bookList.innerHTML = "";
  errorMessage.textContent = "";
});
