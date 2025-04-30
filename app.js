
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
  { title: "Diamond Heist", author: "Olivia Frost", genre: "mystery", price: 98.50, language: "English", format: "hardcover", description: "A detective's greatest challenge yet.", rating: 4.8 },
  { title: "Storm of Feathers", author: "Nia Greyhawk", genre: "fantasy", price: 21.00, language: "English", format: "hardcover", description: "Winged warriors fight for freedom in a sky-born empire.", rating: 3.9 },
  { title: "Colors of Silence", author: "Samir Hafez", genre: "fiction", price: 28.00, language: "Arabic", format: "hardcover", description: "Stories stitched through generations.", rating: 4.2 },
  { title: "Whispers Beyond", author: "Elena Vance", genre: "mystery", price: 22.50, language: "Arabic", format: "hardcover", description: "Ancient secrets hidden under moonlight.", rating: 4.2 },
  { title: "Vanished Words", author: "Clara Moore", genre: "mystery", price: 35.99, language: "English", format: "ebook", description: "Disappearance and deception in a library.", rating: 4.0 },
  { title: "Legends Past", author: "Omar Kassim", genre: "historical", price: 15.00, language: "Arabic", format: "hardcover", description: "Whispers from ancient civilizations.", rating: 3.8 },
  { title: "Cursed Realms", author: "Victor Dumont", genre: "fantasy", price: 99.99, language: "French", format: "ebook", description: "Dark sorcery infects the land; only a healer can cleanse it.", rating: 2.0 },
  { title: "Soul's Melody", author: "Layla Amin", genre: "fiction", price: 29.50, language: "Arabic", format: "paperback", description: "Songs of hope and heartbreak.", rating: 3.9 },
  { title: "Crown of Stars", author: "Hassan Ben Youssef", genre: "fantasy", price: 63.50, language: "Arabic", format: "ebook", description: "A prince must choose between duty and destiny as stars align.", rating: 4.6 },
  { title: "The Crystal Path", author: "Darius Nightshade", genre: "fantasy", price: 18.50, language: "Arabic", format: "ebook", description: "A reluctant hero is chosen by an ancient crystal to save the realm.", rating: 3.5 },
  { title: "Nightfall Secrets", author: "Zaid Malik", genre: "mystery", price: 11.00, language: "Arabic", format: "ebook", description: "Murder wrapped in shadows and lies.", rating: 3.7 },
  { title: "Rebel Queen", author: "Claire Bennett", genre: "historical", price: 64.00, language: "English", format: "ebook", description: "A woman who defies an empire.", rating: 4.6 },
  { title: "Manor Secrets", author: "Juliette Faure", genre: "mystery", price: 87.00, language: "French", format: "paperback", description: "A mansion with a dangerous past.", rating: 4.1 },
  { title: "Rise of the Phoenix", author: "Celeste D’Amour", genre: "fantasy", price: 47.00, language: "French", format: "hardcover", description: "Reborn in flame, a warrior begins her final war.", rating: 5.0 },
  { title: "Fallen Thrones", author: "Victoria Leigh", genre: "historical", price: 74.00, language: "English", format: "paperback", description: "The collapse of ancient royalty.", rating: 4.0 },
  { title: "Painter's Muse", author: "Sophie Laurens", genre: "fiction", price: 25.00, language: "English", format: "hardcover", description: "Art and love collide in Italy.", rating: 4.4 },
  { title: "The Emerald Tower", author: "Layla Marwan", genre: "fantasy", price: 28.75, language: "Arabic", format: "hardcover", description: "Five unlikely companions must survive the trials of the tower.", rating: 4.0 },
  { title: "Witness in the Fog", author: "Daniel Rhodes", genre: "mystery", price: 25.50, language: "English", format: "paperback", description: "Truth hides behind the mist.", rating: 4.3 },
  { title: "Children of Time", author: "Antoine Leroux", genre: "historical", price: 33.00, language: "French", format: "hardcover", description: "Generations shaped by history.", rating: 4.4 },
  { title: "Moonlight Arrows", author: "Lucille Armand", genre: "fantasy", price: 33.00, language: "French", format: "hardcover", description: "An elite archer joins rebels to topple a corrupted king.", rating: 4.7 },
  { title: "Dragonsong", author: "Elara Windborn", genre: "fantasy", price: 12.99, language: "English", format: "paperback", description: "A young bard awakens ancient powers in a land ruled by dragons.", rating: 4.2 },
  { title: "Chronicles of Dust", author: "Sophia Winters", genre: "historical", price: 42.00, language: "French", format: "paperback", description: "Lives shaped by revolution and loss.", rating: 4.3 },
  { title: "Pharaoh's Curse", author: "Maya El-Sayed", genre: "historical", price: 32.00, language: "Arabic", format: "ebook", description: "Secrets buried beneath the sands.", rating: 4.5 },
  { title: "Royal Betrayal", author: "Amelia Hart", genre: "historical", price: 17.50, language: "English", format: "paperback", description: "A scandal that shakes a dynasty.", rating: 4.1 },
  { title: "Vivid Lives", author: "Noah Dubois", genre: "fiction", price: 57.50, language: "French", format: "paperback", description: "Life's bright and dark moments.", rating: 4.3 },
  { title: "Silent Voice", author: "Chloe Rivers", genre: "fiction", price: 16.50, language: "English", format: "ebook", description: "Finding strength in quiet moments.", rating: 4.0 },
  { title: "The Forgotten Scroll", author: "Ahmad Al-Fayez", genre: "fantasy", price: 14.25, language: "Arabic", format: "paperback", description: "In a desert kingdom, a lost scroll may unlock forbidden magic.", rating: 2.8 },
  { title: "Ashes and Light", author: "Caroline Flint", genre: "fantasy", price: 100.00, language: "English", format: "paperback", description: "A fallen kingdom rises again under a fire-wielding queen.", rating: 5.0 },
  { title: "Garden Secrets", author: "Emily Rowe", genre: "fiction", price: 15.50, language: "English", format: "ebook", description: "New life blooms in hidden gardens.", rating: 4.2 },
  { title: "Closed Room Riddle", author: "Marcus Thorne", genre: "mystery", price: 18.75, language: "French", format: "ebook", description: "A locked room hides a dangerous puzzle.", rating: 4.5 }
];



// Get references to important HTML elements
const form = document.getElementById("book-form"); // The book search form
const resetButton = document.getElementById("reset-button"); // Form reset button
const errorMessage = document.getElementById("error-message"); // For displaying errors
const bookList = document.getElementById("book-list"); // Where search results appear
const wishlistWarning = document.getElementById("wishlist-warning"); // Warning about profiles
const profileForm = document.getElementById("profile-form"); // User profile form
const showWishlistBtn = document.getElementById("show-wishlist"); // Wishlist display button
const wishlistOutput = document.getElementById("my-wishlist"); // Where wishlist appears
const profileSection = document.getElementById("create-profile-section"); // Profile section
const clearWishlistBtn = document.getElementById("clear-wishlist"); // Clear wishlist button

/* 
  Handle book search form submission
  Filters books based on user criteria and displays results
*/
form.addEventListener("submit", function (e) {
  e.preventDefault(); // Stop form from submitting normally
  errorMessage.textContent = ""; // Clear any previous error messages

  // Get all search criteria from the form
  const genre = document.getElementById("genre").value;
  const author = document.getElementById("author").value.trim().toLowerCase();
  const minPriceStr = document.getElementById("min-price").value.trim();
  const maxPriceStr = document.getElementById("max-price").value.trim();
  const language = document.getElementById("language").value;
  const format = document.getElementById("format").value;

  // Validate price format (should be numbers like 12.34)
  const priceRegex = /^\d+(\.\d{1,2})?$/;
  if (minPriceStr && !priceRegex.test(minPriceStr)) {
    errorMessage.textContent = "Minimum price must be in format 0.00";
    return;
  }
  if (maxPriceStr && !priceRegex.test(maxPriceStr)) {
    errorMessage.textContent = "Maximum price must be in format 0.00";
    return;
  }

  // Convert price strings to numbers (use 0 and Infinity if empty)
  const min = parseFloat(minPriceStr) || 0;
  const max = parseFloat(maxPriceStr) || Infinity;

  // Filter books based on search criteria
  const filtered = books.filter(book => {
    if (genre && book.genre !== genre) return false; // Check genre match
    if (author && !book.author.toLowerCase().includes(author)) return false; // Check author contains search term
    if (book.price < min || book.price > max) return false; // Check price range
    if (language && book.language !== language) return false; // Check language
    if (format && book.format !== format) return false; // Check format
    return true; // Include book if all criteria match
  });

  // Find the top-rated book in filtered results
  let topBook = null;
  let highestRating = 0;
  filtered.forEach(book => {
    if (book.rating > highestRating) {
      highestRating = book.rating;
      topBook = book;
    }
  });

  // Clear previous results
  bookList.innerHTML = "";

  // Handle no results found
  if (filtered.length === 0) {
    const li = document.createElement("li");
    li.textContent = "No books found matching your criteria.";
    bookList.appendChild(li);
  } else {
    // Display each matching book
    filtered.forEach(book => {
      const li = document.createElement("li");

      // Highlight top-rated book with special styling
      if (book === topBook) {
        li.classList.add("top-pick");
      }

      // Create book title element
      const title = document.createElement("strong");
      title.textContent = book.title;

      // Create author text
      const authorText = document.createTextNode(` by ${book.author}`);

      // Create details line with price, format, language and rating
      const details = document.createElement("div");
      const stars = getStars(book.rating); // Get star rating display
      details.innerHTML = `<em>£${book.price.toFixed(2)}</em> | ${book.format} | ${book.language} | Rating: ${book.rating}/5 ${stars}`;

      // Create book description
      const description = document.createElement("p");
      description.textContent = book.description;

      // Create "Add to Wish List" button
      const addButton = document.createElement("button");
      addButton.textContent = "Add to Wish List";
      addButton.addEventListener("click", () => addToWishList(book));

      // Assemble all elements
      li.appendChild(title);
      li.appendChild(authorText);
      li.appendChild(document.createElement("br"));
      li.appendChild(details);
      li.appendChild(description);
      li.appendChild(addButton);

      // Add to results list
      bookList.appendChild(li);
    });
  }
});

/* 
  Reset the search form and clear results
*/
resetButton.addEventListener("click", function () {
  form.reset(); // Reset form fields to defaults
  bookList.innerHTML = ""; // Clear book results
  errorMessage.textContent = ""; // Clear any error messages
});

/* 
  Helper function to convert numeric rating to star symbols
  Returns string of ★ (full) and ☆ (empty) stars
*/
function getStars(rating) {
  const full = Math.floor(rating); // Number of full stars
  return "★".repeat(full) + "☆".repeat(5 - full); // Combine full and empty stars
}

/* 
  Add a book to the user's wishlist
  Requires user to have a profile first
*/
function addToWishList(book) {
  // Check if user has created a profile
  const userProfile = localStorage.getItem("userProfile");

  if (!userProfile) {
    // Show warning and scroll to profile section if no profile exists
    wishlistWarning.style.display = "block";
    profileSection.scrollIntoView({ behavior: "smooth" });
    return;
  }

  // Hide warning if it was shown
  wishlistWarning.style.display = "none";

  // Get existing wishlist or create empty array
  let wishList = JSON.parse(localStorage.getItem("wishList")) || [];

  // Check if book is already in wishlist
  if (!wishList.some(item => item.title === book.title)) {
    wishList.push(book); // Add new book
    localStorage.setItem("wishList", JSON.stringify(wishList)); // Save to storage
    alert(`"${book.title}" added to your wish list.`);
  } else {
    alert("This book is already in your wish list.");
  }
}

/* 
  Display the user's wishlist
*/
showWishlistBtn.addEventListener("click", () => {
  // Check if user has a profile
  const userProfile = localStorage.getItem("userProfile");

  if (!userProfile) {
    alert("Please create a profile first to view your wish list.");
    profileSection.scrollIntoView({ behavior: "smooth" });
    return;
  }

  // Hide any warning message
  wishlistWarning.style.display = "none";

  // Get wishlist from storage or empty array
  const wishList = JSON.parse(localStorage.getItem("wishList")) || [];
  wishlistOutput.innerHTML = ""; // Clear previous display

  // Handle empty wishlist
  if (wishList.length === 0) {
    const li = document.createElement("li");
    li.textContent = "Your wish list is currently empty.";
    wishlistOutput.appendChild(li);
  } else {
    // Display each book in wishlist
    wishList.forEach(book => {
      const li = document.createElement("li");

      // Create book title
      const title = document.createElement("strong");
      title.textContent = book.title;

      // Create author text
      const authorText = document.createTextNode(` by ${book.author}`);

      // Create details line
      const details = document.createElement("div");
      const stars = getStars(book.rating);
      details.innerHTML = `<em>£${book.price.toFixed(2)}</em> | ${book.format} | ${book.language} | Rating: ${book.rating}/5 ${stars}`;

      // Create description
      const description = document.createElement("p");
      description.textContent = book.description;

      // Assemble elements
      li.appendChild(title);
      li.appendChild(authorText);
      li.appendChild(document.createElement("br"));
      li.appendChild(details);
      li.appendChild(description);

      // Add to wishlist display
      wishlistOutput.appendChild(li);
    });
  }
});

/* 
  Handle profile form submission with validation
*/
profileForm.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent normal form submission

  // Get form fields
  const firstName = document.getElementById("first-name");
  const lastName = document.getElementById("last-name");
  const email = document.getElementById("email");
  const dob = document.getElementById("dob");
  const contact = document.getElementById("contact");

  // Reset any error highlighting
  [firstName, lastName, email, dob, contact].forEach(input => {
    input.style.border = "1px solid #ccc";
  });

  // Check required fields are filled
  const requiredFields = [firstName, lastName, email, dob, contact];
  const emptyField = requiredFields.find(input => input.value.trim() === "");

  if (emptyField) {
    // Highlight missing field and scroll to it
    emptyField.style.border = "2px solid red";
    emptyField.scrollIntoView({ behavior: "smooth", block: "center" });
    emptyField.focus();
    return;
  }

  // Create profile object
  const profile = {
    firstName: firstName.value.trim(),
    lastName: lastName.value.trim(),
    email: email.value.trim(),
    dob: dob.value,
    contact: contact.value.trim()
  };

  // Save profile to browser storage
  localStorage.setItem("userProfile", JSON.stringify(profile));
  alert("Profile created successfully!");
  profileForm.reset(); // Clear form
  wishlistWarning.style.display = "none"; // Hide any warning
});

/* 
  Delete user profile and wishlist
*/
document.getElementById("delete-profile").addEventListener("click", () => {
  // Confirm before deleting
  if (confirm("Are you sure you want to delete your profile and wish list?")) {
    localStorage.removeItem("userProfile"); // Remove profile
    localStorage.removeItem("wishList"); // Remove wishlist
    alert("Your profile and wish list have been deleted.");
    location.reload(); // Refresh page
  }
});

/* 
  Clear just the wishlist (keep profile)
*/
clearWishlistBtn.addEventListener("click", () => {
  // Confirm before clearing
  if (confirm("Are you sure you want to clear your wish list?")) {
    localStorage.removeItem("wishList"); // Remove wishlist
    wishlistOutput.innerHTML = ""; // Clear display
    alert("Your wish list has been cleared.");
  }
});