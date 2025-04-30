
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
  


// DOM Elements
const form = document.getElementById("book-form");
const resetButton = document.getElementById("reset-button");
const errorMessage = document.getElementById("error-message");
const bookList = document.getElementById("book-list");
const wishlistWarning = document.getElementById("wishlist-warning");
const profileForm = document.getElementById("profile-form");
const showWishlistBtn = document.getElementById("show-wishlist");
const wishlistOutput = document.getElementById("my-wishlist");
const profileSection = document.getElementById("create-profile-section");

/*
  Search Form Submit
*/
form.addEventListener("submit", function (e) {
  e.preventDefault();
  errorMessage.textContent = "";

  const genre = document.getElementById("genre").value;
  const author = document.getElementById("author").value.trim().toLowerCase();
  const minPriceStr = document.getElementById("min-price").value.trim();
  const maxPriceStr = document.getElementById("max-price").value.trim();
  const language = document.getElementById("language").value;
  const format = document.getElementById("format").value;

  // Validate price format
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

  // Highlight top-rated
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

      if (book === topBook) {
        li.classList.add("top-pick");
      }

      const title = document.createElement("strong");
      title.textContent = book.title;

      const authorText = document.createTextNode(` by ${book.author}`);

      const details = document.createElement("div");
      const stars = getStars(book.rating);
      details.innerHTML = `<em>£${book.price.toFixed(2)}</em> | ${book.format} | ${book.language} | Rating: ${book.rating}/5 ${stars}`;

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

/*
  Reset Form
*/
resetButton.addEventListener("click", function () {
  form.reset();
  bookList.innerHTML = "";
  errorMessage.textContent = "";
});

/*
  Star Rating Helper
*/
function getStars(rating) {
  const full = Math.floor(rating);
  return "★".repeat(full) + "☆".repeat(5 - full);
}

/*
  Add to Wish List (Profile Required)
*/
function addToWishList(book) {
  const userProfile = localStorage.getItem("userProfile");

  if (!userProfile) {
    wishlistWarning.style.display = "block";
    profileSection.scrollIntoView({ behavior: "smooth" });
    return;
  }

  wishlistWarning.style.display = "none";

  let wishList = JSON.parse(localStorage.getItem("wishList")) || [];

  if (!wishList.some(item => item.title === book.title)) {
    wishList.push(book);
    localStorage.setItem("wishList", JSON.stringify(wishList));
    alert(`"${book.title}" added to your wish list.`);
  } else {
    alert("This book is already in your wish list.");
  }
}

/*
  View Wish List (Profile Required)
*/
showWishlistBtn.addEventListener("click", () => {
  const userProfile = localStorage.getItem("userProfile");

  if (!userProfile) {
    alert("Please create a profile first to view your wish list.");
    profileSection.scrollIntoView({ behavior: "smooth" });
    return;
  }

  wishlistWarning.style.display = "none";

  const wishList = JSON.parse(localStorage.getItem("wishList")) || [];
  wishlistOutput.innerHTML = "";

  if (wishList.length === 0) {
    const li = document.createElement("li");
    li.textContent = "Your wish list is currently empty.";
    wishlistOutput.appendChild(li);
  } else {
    wishList.forEach(book => {
      const li = document.createElement("li");
      li.textContent = `${book.title} by ${book.author}`;
      wishlistOutput.appendChild(li);
    });
  }
});

/*
  Create Profile with Required Field Validation
*/
profileForm.addEventListener("submit", function (e) {
  e.preventDefault();

  
  // Grab form inputs
  const firstNameInput = document.getElementById("first-name");
  const lastNameInput = document.getElementById("last-name");
  const emailInput = document.getElementById("email");
  const dobInput = document.getElementById("dob");
  const contactInput = document.getElementById("contact");

  // Reset styles
  [firstNameInput, lastNameInput, emailInput, dobInput, contactInput].forEach(input => {
    input.style.border = "1px solid #ccc";
  });

  // Validate required fields
  const requiredFields = [firstNameInput, lastNameInput, emailInput, dobInput, contactInput];
  const emptyField = requiredFields.find(input => input.value.trim() === "");

  if (emptyField) {
    emptyField.style.border = "2px solid red";
    emptyField.scrollIntoView({ behavior: "smooth", block: "center" });
    emptyField.focus();
    return;
  }

  // All fields filled → save profile
  const profile = {
    firstName: firstNameInput.value.trim(),
    lastName: lastNameInput.value.trim(),
    email: emailInput.value.trim(),
    dob: dobInput.value,
    contact: contactInput.value.trim()
  };

  localStorage.setItem("userProfile", JSON.stringify(profile));
  alert("Profile created successfully!");
  profileForm.reset();
  wishlistWarning.style.display = "none";
});

// Delete Profile and Wish List
document.getElementById("delete-profile").addEventListener("click", () => {
  if (confirm("Are you sure you want to delete your profile and wish list?")) {
    localStorage.removeItem("userProfile");
    localStorage.removeItem("wishList");
    alert("Your profile and wish list have been deleted.");
    location.reload(); // Refresh page to update UI
  }
});



