/*
  Book Search and Recommendation Application
  -------------------------------------------
  This script allows users to search for books based on genre, author,
  price range, language, and format. It highlights the top-rated book
  among the filtered results. Users can also reset the form easily.
  Teh functionality includes adding books to a wish list, creating a user profile, and managing the wish list. The application is designed to be user-friendly
*/

// Book data containing title, author, genre, price, language, format, description and rating 
const books = [
    { title: "Shadow in the Attic", author: "Lena Blackwood", genre: "mystery", price: 15.00, language: "English", format: "paperback", description: "A chilling mystery unfolds in an abandoned house. Dive deeper into an unforgettable story filled with emotion, intrigue, and unexpected turns.", rating: 4.4 },
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
    { title: "Rise of the Phoenix", author: "Celeste D'Amour", genre: "fantasy", price: 47.00, language: "French", format: "hardcover", description: "Reborn in flame, a warrior begins her final war.", rating: 5.0 },
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

  //This variable holds the user's profile and wish list. If null, no user is logged in.
let userAccount = null;

  //DOM ELEMENT REFERENCES
  //These lines connect JavaScript to the HTML form elements. They allow us to manipulate the form and display results dynamically.//

const form = document.getElementById("book-form");// The form where users input their search criteria
const resetButton = document.getElementById("reset-button");// The button to reset the form
const errorMessage = document.getElementById("error-message");// The area where error messages are displayed
const bookList = document.getElementById("book-list");// The list where search results are displayed
const wishlistWarning = document.getElementById("wishlist-warning");// The warning message if the user tries to add a book without a profile
const profileForm = document.getElementById("profile-form");// The form where users create their profile
const wishlistOutput = document.getElementById("my-wishlist");// The list where the user's wish list is displayed
const clearWishlistBtn = document.getElementById("clear-wishlist");// The button to clear the wish list
const profileStatus = document.getElementById("profile-status");// The area where the user's profile status is displayed
const createProfileBtn = document.getElementById("create-profile-btn");// The button to create a new profile
const deleteProfileBtn = document.getElementById("delete-profile-btn");// The button to delete the user's profile

 // BOOK SEARCH FUNCTIONALITY -Filters and displays books based on user input.
// This function is triggered when the user submits the search form. It collects the input values, validates them, and filters the book list accordingly.

form.addEventListener("submit", function (e) {
    e.preventDefault(); // Stops the form from reloading the page
    errorMessage.textContent = ""; // Clear any previous error

    // Get all user inputs from the form // These are the criteria used to filter the book list
    const genre = document.getElementById("genre").value; 
    const author = document.getElementById("author").value.trim().toLowerCase();// Convert author input to lowercase for case-insensitive comparison and get price inputs and trim whitespace
    const minPriceStr = document.getElementById("min-price").value.trim();
    const maxPriceStr = document.getElementById("max-price").value.trim();
    const language = document.getElementById("language").value;
    const format = document.getElementById("format").value;

    // Basic number format check using regular expression // This regex checks if the input is a valid number with up to two decimal places and ensure the number is not negative
    const priceRegex = /^\d+(\.\d{1,2})?$/; // Matches numbers like 0, 0.00, 10.5, 100.00, etc.
    if (minPriceStr && !priceRegex.test(minPriceStr)) { // Check if minPriceStr is a valid number
        errorMessage.textContent = "Minimum price must be in format 0.00"; // Display error message if invalid
        return; // Stop further execution if invalid
    }
    if (maxPriceStr && !priceRegex.test(maxPriceStr)) {
        errorMessage.textContent = "Maximum price must be in format 0.00";
        return;
    }

    const min = parseFloat(minPriceStr) || 0; // Convert minPriceStr to a number or default to 0 if empty
    const max = parseFloat(maxPriceStr) || Infinity; // Convert maxPriceStr to a number or default to Infinity if empty

    // Filter the book list based on form input
    const filtered = books.filter(book => { // This function checks each book against the user's criteria
        if (genre && book.genre !== genre) return false; // Check if the book's genre matches the selected genre
        if (author && !book.author.toLowerCase().includes(author)) return false; // Check if the book's author matches the input (case-insensitive) 
        if (book.price < min || book.price > max) return false; // Check if the book's price is within the specified range
        if (language && book.language !== language) return false; // Check if the book's language matches the selected language
        if (format && book.format !== format) return false; // Check if the book's format matches the selected format
        return true; // If all checks pass, include the book in the filtered list
    });

    // Find the top-rated book from the results
    let topBook = null; // This variable will hold the book with the highest rating
    let highestRating = 0; // Initialize highest rating to 0
    filtered.forEach(book => {  // Loop through the filtered books to find the one with the highest rating
        if (book.rating > highestRating) { // If the current book's rating is higher than the highest found so far
            highestRating = book.rating; // Update the highest rating
            topBook = book; // Set the top book to the current book
        }
    });

    bookList.innerHTML = ""; // Clear previous search results

    // If no books match, show a message
    if (filtered.length === 0) { // If the filtered list is empty, display a message
        const li = document.createElement("li"); // Create a new list item
        li.textContent = "No books found matching your criteria."; // Set the message text
        bookList.appendChild(li); // Append the message to the book list
    } else { // If there are matching books, display them
        // Display matching books
        filtered.forEach(book => {  // Loop through each book in the filtered list
            const li = document.createElement("li"); // Create a new list item for each book
            if (book === topBook) li.classList.add("top-pick"); // Highlight the top-rated book with a special class

            const title = document.createElement("strong"); // Create a strong element for the book title
            title.textContent = book.title; // Set the title text

            const authorText = document.createTextNode(` by ${book.author}`); // Create a text node for the author name

            const details = document.createElement("div"); // Create a div for book details
            const stars = getStars(book.rating);  // Get star representation of the book's rating
            details.innerHTML = `<em>£${book.price.toFixed(2)}</em> | ${book.format} | ${book.language} | Rating: ${book.rating}/5 ${stars}`; // Set the details text with price, format, language, and rating

            const description = document.createElement("p"); // Create a paragraph for the book description
            description.textContent = book.description; // Set the description text  

            const addButton = document.createElement("button"); // Create a button to add the book to the wish list
            addButton.textContent = "Add to Wish List"; // Set button text
            addButton.addEventListener("click", () => addToWishList(book)); // Add event listener to call addToWishList function with the current book

            // Append all elements to the list item   his adds the title, author, details, description, and button to the list item
            li.appendChild(title);  //
            li.appendChild(authorText);
            li.appendChild(document.createElement("br"));
            li.appendChild(details);
            li.appendChild(description);
            li.appendChild(addButton);

            bookList.appendChild(li);
        });
    }
});
  //FORM RESET FUNCTIONALITY Clears the search form and results when the reset button is clicked.
// This function is triggered when the user clicks the reset button. It clears the form fields and any displayed results.
resetButton.addEventListener("click", function () {
    form.reset(); // Reset form fields
    bookList.innerHTML = ""; // Clear book results
    errorMessage.textContent = ""; // Clear error message
});

// Converts a number rating (like 4.3) into star icons. This function takes a rating number and returns a string of star icons.
// Full stars are represented by "★" and empty stars by "☆".
function getStars(rating) {
    const full = Math.floor(rating);
    return "★".repeat(full) + "☆".repeat(5 - full);
}

//This function is called when the user clicks the "Add to Wish List" button for a book. 
// It checks if the user has a profile, and if so, adds the book to their wish list. If the user doesn't have a profile, it shows a warning message.
function addToWishList(book) {
    if (!userAccount) {
        wishlistWarning.style.display = "block"; // Show message if no profile
        document.getElementById("create-profile-section").scrollIntoView({ behavior: "smooth" });
        return;
    }
    // If the user has a profile, add the book to their wish list
    wishlistWarning.style.display = "none"; // Hide warning

    // Avoid duplicates in the wish list -Check if the book is already in the wish list before adding it
    if (!userAccount.wishList.some(item => item.title === book.title)) { 
        userAccount.wishList.push(book); // Add book to the wish list
        updateWishlistDisplay();// Update the display of the wish list after adding a book
    }
}

// Updates the wish list section on the page .This function clears the current wish list display and repopulates it with the user's wish list items.
// It also handles the case where the wish list is empty or the user has no profile.
function updateWishlistDisplay() {
    wishlistOutput.innerHTML = "";
// Clear previous wish list items
    if (!userAccount || userAccount.wishList.length === 0) { // If no profile or wish list is empty
        const li = document.createElement("li"); // Create a new list item
        li.textContent = userAccount  // If no profile or wish list is empty
            ? "Your wish list is currently empty." // Display message if wish list is empty
            : "No profile created. Please create a profile."; // Display message if no profile
        wishlistOutput.appendChild(li); // Append the message to the wish list output
    } else {  // If the user has a profile and wish list items
        userAccount.wishList.forEach((book, index) => {  // Loop through each book in the wish list
            const li = document.createElement("li");  // Create a new list item for each book

            const title = document.createElement("strong"); // Create a strong element for the book title
            title.textContent = book.title; // Set the title text

            const authorText = document.createTextNode(` by ${book.author}`); // Create a text node for the author name

            const details = document.createElement("div"); // Create a div for book details
            const stars = getStars(book.rating); // Get star representation of the book's rating
            details.innerHTML = `<em>£${book.price.toFixed(2)}</em> | ${book.format} | ${book.language} | Rating: ${book.rating}/5 ${stars}`;// Set the details text with price, format, language, and rating

            const description = document.createElement("p"); // Create a paragraph for the book description
            description.textContent = book.description; // Set the description text

            const removeButton = document.createElement("button"); // Create a button to remove the book from the wish list
            removeButton.textContent = "Remove";  // Set button text
            removeButton.classList.add("delete-button-wishlist"); // Add a class for styling
            removeButton.addEventListener("click", () => {  // Add event listener to remove the book from the wish list
                userAccount.wishList.splice(index, 1); // Remove item from array. Remove the book from the wish list using its index  
                updateWishlistDisplay();  // Update the display of the wish list after removing a book
            });

            li.appendChild(title);  // Append the title to the list item
            li.appendChild(authorText);  // Append the author text to the list item
            li.appendChild(document.createElement("br"));  // Add a line break
            li.appendChild(details);   // Append the details to the list item
            li.appendChild(description);  // Append the description to the list item
            li.appendChild(removeButton); // Append the remove button to the list item  

            wishlistOutput.appendChild(li);
        });
    }
}
  
//PROFILE MANAGEMENT
// This section handles the creation and deletion of user profiles. It allows users to create a profile, which is required to add books to the wish list.
// It also provides functionality to delete the profile and clear the wish list.
// When user submits the profile form
profileForm.addEventListener("submit", function (e) {  
    e.preventDefault(); // Prevent default form submission behavior

    // Collect form input values
    const firstName = document.getElementById("first-name");
    const lastName = document.getElementById("last-name");
    const email = document.getElementById("email");
    const dob = document.getElementById("dob");
    const contact = document.getElementById("contact");

 // This checks if the required fields are filled out If any required field is empty, it highlights the field in red and scrolls to it.
    const requiredFields = [firstName, lastName, email, dob, contact]; 
    requiredFields.forEach(input => input.style.border = "1px solid #ccc"); // Reset border color for all fields

    const emptyField = requiredFields.find(input => input.value.trim() === ""); // Find the first empty field

    if (emptyField) { // If an empty field is found
        emptyField.style.border = "2px solid red"; // Highlight the empty field in red
        emptyField.scrollIntoView({ behavior: "smooth", block: "center" }); // Scroll to the empty field
        emptyField.focus(); // Set focus on the empty field
        return; // Stop further execution if any field is empty
    }

    // Save user data in a variable //
    // The user account object is created with the user's first name, last name, email, date of birth, contact number, and occupation.
    // This creates a user account object with the provided information. The wish list is initialized as an empty array.
    userAccount = {
        firstName: firstName.value.trim(),
        lastName: lastName.value.trim(),
        email: email.value.trim(),
        dob: dob.value,
        contact: contact.value.trim(),
        occupation: document.getElementById("occupation").value.trim(),
        wishList: []
    };
// The user account object is created with the provided information. The wish list is initialized as an empty array.Save user data in local storage (optional) 
// // This line saves the user account object in local storage for persistence across page reloads.
    updateProfileStatus(); // Update status message
    alert("Profile created successfully!");
    profileForm.reset();
    wishlistWarning.style.display = "none"; // Hide any warning
});

// Delete profile button his function is triggered when the user clicks the delete profile button. It confirms if the user wants to delete their profile and clears the user account.
deleteProfileBtn.addEventListener("click", () => { 
    if (!userAccount) return; // If no profile exists, do nothing

    if (confirm("Are you sure you want to delete your profile?")) { // Confirm deletion
        userAccount = null; // Clear user account
        
        updateProfileStatus(); // Update profile status message
        updateWishlistDisplay(); // Update wish list display
    }
});

//This function updates the profile status message displayed on the page. It checks if a user account exists and updates the message accordingly.
function updateProfileStatus() {
    if (userAccount) { // If a user account exists, display the user's name and status
        profileStatus.textContent = `Active (${userAccount.firstName} ${userAccount.lastName})`; // Display the user's name
    } else { // If no user account exists, display a message indicating no profile has been created
        profileStatus.textContent = "No profile created"; // Display message
    }
}

  //CLEAR WISHLIST
// This function is triggered when the user clicks the clear wish list button. It checks if the user has a profile and clears the wish list if it exists.   
clearWishlistBtn.addEventListener("click", () => {
    if (!userAccount) return;

    if (userAccount.wishList.length > 0) { // If the wish list is not empty, confirm if the user wants to clear it
        userAccount.wishList = []; // Clear the wish list
        updateWishlistDisplay(); // Update the display of the wish list
    }
});
// This function is called to update the profile status message and the wish list display when the page loads or when the user interacts with the profile and wish list features.
updateProfileStatus(); // Update profile status message
updateWishlistDisplay(); // Update wish list display