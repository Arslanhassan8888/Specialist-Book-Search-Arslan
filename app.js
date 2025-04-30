// Get references to the form and related DOM elements
const form = document.getElementById("book-form");
const resetButton = document.getElementById("reset-button");
const errorMessage = document.getElementById("error-message");
const bookList = document.getElementById("book-list");
const wishlistWarning = document.getElementById("wishlist-warning");
const profileForm = document.getElementById("profile-form");
const showWishlistBtn = document.getElementById("show-wishlist");
const wishlistOutput = document.getElementById("my-wishlist");
const profileSection = document.getElementById("create-profile-section");

// This function helps turn a rating number into star icons
function getStars(rating) {
  const full = Math.floor(rating);
  return "★".repeat(full) + "☆".repeat(5 - full);
}

// Reset form and clear any book results and error messages
resetButton.addEventListener("click", function () {
  form.reset(); // clears the form inputs
  bookList.innerHTML = ""; // clears book list display
  errorMessage.textContent = ""; // clears error message
});

// Adds a book to the wishlist, but only if the user has a profile
function addToWishList(book) {
  const userProfile = localStorage.getItem("userProfile");

  // If no profile exists, show warning and scroll to profile section
  if (!userProfile) {
    wishlistWarning.style.display = "block";
    profileSection.scrollIntoView({ behavior: "smooth" });
    return;
  }

  wishlistWarning.style.display = "none";

  // Get current wishlist from localStorage, or empty array if none
  let wishList = JSON.parse(localStorage.getItem("wishList")) || [];

  // Only add the book if it is not already in the list
  if (!wishList.some(item => item.title === book.title)) {
    wishList.push(book);
    localStorage.setItem("wishList", JSON.stringify(wishList));
    alert(`"${book.title}" added to your wish list.`);
  } else {
    alert("This book is already in your wish list.");
  }
}

// Shows the user's wishlist if a profile exists
showWishlistBtn.addEventListener("click", () => {
  const userProfile = localStorage.getItem("userProfile");

  // If no profile, ask the user to create one
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
    // Go through each book in the list and show it
    wishList.forEach(book => {
      const li = document.createElement("li");
      const title = document.createElement("strong");
      title.textContent = book.title;
      const authorText = document.createTextNode(` by ${book.author}`);
      const details = document.createElement("div");
      const stars = getStars(book.rating);
      details.innerHTML = `<em>£${book.price.toFixed(2)}</em> | ${book.format} | ${book.language} | Rating: ${book.rating}/5 ${stars}`;
      const description = document.createElement("p");
      description.textContent = book.description;

      li.appendChild(title);
      li.appendChild(authorText);
      li.appendChild(document.createElement("br"));
      li.appendChild(details);
      li.appendChild(description);

      wishlistOutput.appendChild(li);
    });
  }
});

// Handles profile creation with field checks
profileForm.addEventListener("submit", function (e) {
  e.preventDefault(); // stops the form from submitting normally

  // Get form input fields
  const firstNameInput = document.getElementById("first-name");
  const lastNameInput = document.getElementById("last-name");
  const emailInput = document.getElementById("email");
  const dobInput = document.getElementById("dob");
  const contactInput = document.getElementById("contact");

  // Reset input border styles in case they were marked red earlier
  [firstNameInput, lastNameInput, emailInput, dobInput, contactInput].forEach(input => {
    input.style.border = "1px solid #ccc";
  });

  // Check if any required field is empty
  const requiredFields = [firstNameInput, lastNameInput, emailInput, dobInput, contactInput];
  const emptyField = requiredFields.find(input => input.value.trim() === "");

  // If any field is empty, highlight it and focus on it
  if (emptyField) {
    emptyField.style.border = "2px solid red";
    emptyField.scrollIntoView({ behavior: "smooth", block: "center" });
    emptyField.focus();
    return;
  }

  // Save the profile in localStorage if all fields are filled
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

// Deletes the profile and wishlist when the delete button is clicked
document.getElementById("delete-profile").addEventListener("click", () => {
  if (confirm("Are you sure you want to delete your profile and wish list?")) {
    localStorage.removeItem("userProfile");
    localStorage.removeItem("wishList");
    alert("Your profile and wish list have been deleted.");
    location.reload(); // reloads the page so changes take effect immediately
  }
});

// Clears only the wish list but keeps the profile
document.getElementById("clear-wishlist").addEventListener("click", () => {
  if (confirm("Are you sure you want to clear your wish list?")) {
    localStorage.removeItem("wishList");
    wishlistOutput.innerHTML = "";
    alert("Your wish list has been cleared.");
  }
});