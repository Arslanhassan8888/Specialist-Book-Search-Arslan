
/*
  Book Search and Recommendation Application
  -------------------------------------------
  This script allows users to search for books based on genre, author,
  price range, language, and format. It highlights the top-rated book
  among the filtered results. Users can also reset the form easily.
*/

// Book data containing title, author, genre, price, language, format, description and rating
const books = [
  { title: "Shadow in the Attic", author: "Lena Blackwood", genre: "mystery", price: 15.00, language: "English", format: "paperback", description: "A chilling mystery unfolds in an abandoned house. Dive deeper into an unforgettable story filled with emotion, intrigue, and unexpected turns.", rating: 4.4 },
  { title: "Whispers Beyond", author: "Elena Vance", genre: "mystery", price: 22.50, language: "Arabic", format: "hardcover", description: "Ancient secrets hidden under moonlight. Dive deeper into an unforgettable story filled with emotion, intrigue, and unexpected turns.", rating: 4.2 },
  { title: "Closed Room Riddle", author: "Marcus Thorne", genre: "mystery", price: 18.75, language: "French", format: "ebook", description: "A locked room hides a dangerous puzzle. Dive deeper into an unforgettable story filled with emotion, intrigue, and unexpected turns.", rating: 4.5 },
  { title: "Vanished Words", author: "Clara Moore", genre: "mystery", price: 35.99, language: "English", format: "ebook", description: "Disappearance and deception in a library. Dive deeper into an unforgettable story filled with emotion, intrigue, and unexpected turns.", rating: 4.0 },
  { title: "Empire Echoes", author: "Nathan Drake", genre: "historical", price: 76.00, language: "English", format: "hardcover", description: "A legacy written in ruins. Dive deeper into an unforgettable story filled with emotion, intrigue, and unexpected turns.", rating: 4.6 },
  { title: "Chronicles of Dust", author: "Sophia Winters", genre: "historical", price: 42.00, language: "French", format: "paperback", description: "Lives shaped by revolution and loss. Dive deeper into an unforgettable story filled with emotion, intrigue, and unexpected turns.", rating: 4.3 },
  { title: "Legends Past", author: "Omar Kassim", genre: "historical", price: 15.00, language: "Arabic", format: "hardcover", description: "Whispers from ancient civilizations. Dive deeper into an unforgettable story filled with emotion, intrigue, and unexpected turns.", rating: 3.8 },
  { title: "Royal Betrayal", author: "Amelia Hart", genre: "historical", price: 17.50, language: "English", format: "paperback", description: "A scandal that shakes a dynasty. Dive deeper into an unforgettable story filled with emotion, intrigue, and unexpected turns.", rating: 4.1 },
  { title: "Weaver's Dream", author: "Lucas Grant", genre: "fiction", price: 59.00, language: "English", format: "paperback", description: "Love and loss in a woven world. Dive deeper into an unforgettable story filled with emotion, intrigue, and unexpected turns.", rating: 4.7 },
  { title: "Lost Reflections", author: "Isabelle Moreaux", genre: "fiction", price: 88.50, language: "French", format: "ebook", description: "Dreams left behind in the rain. Dive deeper into an unforgettable story filled with emotion, intrigue, and unexpected turns.", rating: 3.9 },
  { title: "Colors of Silence", author: "Samir Hafez", genre: "fiction", price: 28.00, language: "Arabic", format: "hardcover", description: "Stories stitched through generations. Dive deeper into an unforgettable story filled with emotion, intrigue, and unexpected turns.", rating: 4.2 },
  { title: "Silent Voice", author: "Chloe Rivers", genre: "fiction", price: 16.50, language: "English", format: "ebook", description: "Finding strength in quiet moments. Dive deeper into an unforgettable story filled with emotion, intrigue, and unexpected turns.", rating: 4.0 },
  { title: "Diamond Heist", author: "Olivia Frost", genre: "mystery", price: 98.50, language: "English", format: "hardcover", description: "A detective's greatest challenge yet. Dive deeper into an unforgettable story filled with emotion, intrigue, and unexpected turns.", rating: 4.8 },
  { title: "Nightfall Secrets", author: "Zaid Malik", genre: "mystery", price: 11.00, language: "Arabic", format: "ebook", description: "Murder wrapped in shadows and lies. Dive deeper into an unforgettable story filled with emotion, intrigue, and unexpected turns.", rating: 3.7 },
  { title: "Manor Secrets", author: "Juliette Faure", genre: "mystery", price: 87.00, language: "French", format: "paperback", description: "A mansion with a dangerous past. Dive deeper into an unforgettable story filled with emotion, intrigue, and unexpected turns.", rating: 4.1 },
  { title: "Witness in the Fog", author: "Daniel Rhodes", genre: "mystery", price: 25.50, language: "English", format: "paperback", description: "Truth hides behind the mist. Dive deeper into an unforgettable story filled with emotion, intrigue, and unexpected turns.", rating: 4.3 },
  { title: "Fallen Thrones", author: "Victoria Leigh", genre: "historical", price: 74.00, language: "English", format: "paperback", description: "The collapse of ancient royalty. Dive deeper into an unforgettable story filled with emotion, intrigue, and unexpected turns.", rating: 4.0 },
  { title: "Children of Time", author: "Antoine Leroux", genre: "historical", price: 33.00, language: "French", format: "hardcover", description: "Generations shaped by history. Dive deeper into an unforgettable story filled with emotion, intrigue, and unexpected turns.", rating: 4.4 },
  { title: "Pharaoh's Curse", author: "Maya El-Sayed", genre: "historical", price: 32.00, language: "Arabic", format: "ebook", description: "Secrets buried beneath the sands. Dive deeper into an unforgettable story filled with emotion, intrigue, and unexpected turns.", rating: 4.5 },
  { title: "Rebel Queen", author: "Claire Bennett", genre: "historical", price: 64.00, language: "English", format: "ebook", description: "A woman who defies an empire. Dive deeper into an unforgettable story filled with emotion, intrigue, and unexpected turns.", rating: 4.6 },
  { title: "Painter's Muse", author: "Sophie Laurens", genre: "fiction", price: 25.00, language: "English", format: "hardcover", description: "Art and love collide in Italy. Dive deeper into an unforgettable story filled with emotion, intrigue, and unexpected turns.", rating: 4.4 },
  { title: "Vivid Lives", author: "Noah Dubois", genre: "fiction", price: 57.50, language: "French", format: "paperback", description: "Life's bright and dark moments. Dive deeper into an unforgettable story filled with emotion, intrigue, and unexpected turns.", rating: 4.3 },
  { title: "Soul's Melody", author: "Layla Amin", genre: "fiction", price: 29.50, language: "Arabic", format: "paperback", description: "Songs of hope and heartbreak. Dive deeper into an unforgettable story filled with emotion, intrigue, and unexpected turns.", rating: 3.9 },
  { title: "Garden Secrets", author: "Emily Rowe", genre: "fiction", price: 15.50, language: "English", format: "ebook", description: "New life blooms in hidden gardens. Dive deeper into an unforgettable story filled with emotion, intrigue, and unexpected turns.", rating: 4.2 }
];

// Get elements from the page
const form = document.getElementById("book-form"); // Form element
const genreSelect = document.getElementById("genre"); // Genre dropdown
const bookList = document.getElementById("book-list"); // List to display books
const errorMessage = document.getElementById("error-message"); // Error message block
const resetButton = document.getElementById("reset-button"); // Reset button

/*
  Event listener for form submission
  - Validate input for price
  - Filter books based on user selections
  - Highlight the highest-rated book
*/
form.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent default form submit
  errorMessage.textContent = ""; // Clear previous errors

  // Get user inputs
  const genre = document.getElementById("genre").value;
  const author = document.getElementById("author").value.trim().toLowerCase();
  const minPriceStr = document.getElementById("min-price").value.trim();
  const maxPriceStr = document.getElementById("max-price").value.trim();
  const language = document.getElementById("language").value;
  const format = document.getElementById("format").value;

  // Validate price fields
  if (minPriceStr && !/^\d+(\.\d{2})$/.test(minPriceStr)) {
    errorMessage.textContent = "Minimum price must be in format 0.00";
    return;
  }
  if (maxPriceStr && !/^\d+(\.\d{2})$/.test(maxPriceStr)) {
    errorMessage.textContent = "Maximum price must be in format 0.00";
    return;
  }

  const min = parseFloat(minPriceStr) || 0; // Default to 0 if not given
  const max = parseFloat(maxPriceStr) || Infinity; // Default to no upper limit

  // Filter the books based on criteria
  const filtered = books.filter(book => {
    if (genre && book.genre !== genre) return false;
    if (author && !book.author.toLowerCase().includes(author)) return false;
    if (book.price < min || book.price > max) return false;
    if (language && book.language !== language) return false;
    if (format && book.format !== format) return false;
    return true;
  });

  // Find top-rated book among the filtered
  let topBook = null;
  let highestRating = 0;
  filtered.forEach(book => {
    if (book.rating > highestRating) {
      highestRating = book.rating;
      topBook = book;
    }
  });

  bookList.innerHTML = ""; // Clear previous results

  // Show message if no matches found
  if (filtered.length === 0) {
    const li = document.createElement("li"); // Create a list item
    li.textContent = "No books found matching your criteria."; // Set its text
    bookList.appendChild(li); // Append the list item inside bookList using appendChild
  } else {
    // Display matched books
    filtered.forEach(book => {
      const li = document.createElement("li"); // Create a list item for each book

      if (book === topBook) {
        li.classList.add("top-pick"); // Highlight top-rated book
      }

      const title = document.createElement("strong"); // Create <strong> for book title
      title.textContent = book.title; // Set book title text

      const authorText = document.createTextNode(` by ${book.author}`); // Create text node for author

      const details = document.createElement("div"); // Create div for book details (price, format, etc.)
      const stars = getStars(book.rating); // Get visual star rating
      details.innerHTML = `<em>£${book.price.toFixed(2)}</em> | ${book.format} | ${book.language} | Rating: ${book.rating}/5 ${stars}`;

      const description = document.createElement("p"); // Create <p> for book description
      description.textContent = book.description; // Set description text

      // Append child elements to the <li> (building structure)
      li.appendChild(title);       // Insert title inside <li>
      li.appendChild(authorText);  // Insert author text
      li.appendChild(document.createElement("br")); // Line break
      li.appendChild(details);     // Insert book details
      li.appendChild(description); // Insert book description

      bookList.appendChild(li); // Finally append the whole <li> into the book list (ul)
    });
  }
});

// Event listener to clear form and book list when reset button is clicked
resetButton.addEventListener("click", function () {
  form.reset(); // Reset form fields
  bookList.innerHTML = ""; // Clear displayed books
  errorMessage.textContent = ""; // Clear error messages
});

/*
  Function to get star rating
  - Full stars (★) based on whole number
  - Empty stars (☆) for the rest
*/
function getStars(rating) {
  const fullStars = Math.floor(rating); // Count of full stars
  const stars = Math.min(Math.max(fullStars, 0), 5); // Limit to 5 stars max
  const empty = 5 - stars; // Remaining empty stars
  return '★'.repeat(stars) + '☆'.repeat(empty); // Return star pattern
}

