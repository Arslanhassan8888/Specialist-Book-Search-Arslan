/*
  Book Search and Recommendation Application
  -------------------------------------------
  This script allows users to search for books based on genre, author,
  price range, language, and format. It highlights the top-rated book
  among the filtered results. Users can also reset the form easily.
  Teh functionality includes adding books to a wish list, creating a user profile, and managing the wish list. The application is designed to be user-friendly
*/

// Book data (which an array that contain multiple objects(key -value)) containing title, author, genre, price, language, format, description and rating 
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
let userAccount = null; //later we can assign it to a user object with properties like firstName, lastName, email, dob, contact, occupation, and wishList.
//This variable holds the user's wish list. It is an array of book objects that the user has added to their wish list.

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
form.addEventListener("submit", handleBookSearch);  //calling the function handleBookSearch when the form is submitted.

function handleBookSearch(eventObject) { 
    eventObject.preventDefault(); // Stops the form from reloading the page, mean that the default action of the form submission by the browser is prevented.
    errorMessage.textContent = ""; // Clear any previous error

    // Get all user inputs from the form
    const genre = document.getElementById("genre").value;// Get the selected genre from the dropdown 
    const authorInput = document.getElementById("author");// Get the author input field
    const author = authorInput.value.trim().toLowerCase();// Convert the author input to lowercase and trim whitespace
    const minPriceStr = document.getElementById("min-price").value.trim();// Get the minimum price input and trim whitespace
    const maxPriceStr = document.getElementById("max-price").value.trim();// Get the maximum price input and trim whitespace
    const language = document.getElementById("language").value;// Get the selected language from the dropdown
    const format = document.getElementById("format").value;// Get the selected format from the dropdown

    // Basic number format check using regular expression
    const priceRegex = /^\d+(\.\d{1,2})?$/; // Matches numbers like 0, 0.00, 10.5, 100.00, etc.
                                        ///^ means the start of the string, \d+ means one or more digits, (\.\d{1,2})? means an optional decimal point followed by one or two digits, and $ means the end of the string.
    // Check if min and max prices are valid numbers
    if (minPriceStr && !priceRegex.test(minPriceStr)) { //test wit  regex does not match the minPriceStr
        //minPriceStr &&  means if minPriceStr is not empty and !priceRegex.test(minPriceStr) means if the regex test fails.
        errorMessage.textContent = "Minimum price must be in format 0.00"; //  Display error message if the min price is invalid.
        return; // Exit the function if the min price is invalid.
    }
    if (maxPriceStr && !priceRegex.test(maxPriceStr)) { //same as above but for maxPriceStr
        errorMessage.textContent = "Maximum price must be in format 0.00";
        return;
    }

    const min = minPriceStr ? parseFloat(minPriceStr) : 0;// Convert min price to a number, or set to 0 if empty.
    const max = maxPriceStr ? parseFloat(maxPriceStr) : Infinity;

    // Filter the book list based on form input
    const filtered = []; // Array to hold filtered books
    for (let i = 0; i < books.length; i++) { // Loop through all books in the books array
        const book = books[i]; // Get the current book object
                                        
        if (genre && book.genre !== genre) continue; // If genre is selected and doesn't match, skip this book.
        if (author && book.author.toLowerCase().indexOf(author) === -1) continue; // If author is entered and doesn't match, skip this book.
        if (book.price < min || book.price > max) continue; // If book price is outside the range, skip this book.
        // If language is selected and doesn't match, skip this book.
        if (language && book.language !== language) continue;
        if (format && book.format !== format) continue; // If format is selected and doesn't match, skip this book.
        
        filtered.push(book); // If all conditions are met, add the book to the filtered array.
    }

    // Find the book with highest rating // This loop finds the book with the highest rating among the filtered books.
    let topBook = null; // Variable to hold the top-rated book
    let highestRating = 0; // Variable to hold the highest rating found
    for (let i = 0; i < filtered.length; i++) { // Loop through the filtered books
        const book = filtered[i]; // Get the current book object
        if (book.rating > highestRating) { // If the current book's rating is higher than the highest found
            highestRating = book.rating; // Update the highest rating
            topBook = book;  // Set the top book to the current book
        }
    }

    bookList.innerHTML = ""; // Clear previous search results

    // If no books match, show a message  // This checks if the filtered array is empty and displays a message if no books match the search criteria.
    if (filtered.length === 0) {// If no books match the search criteria
        bookList.innerHTML = "<li>No books found matching your criteria.</li>"; // Display a message indicating no books were found.
    } else {
        // Display matching books
        for (let i = 0; i < filtered.length; i++) {// Loop through the filtered books
            const book = filtered[i]; // Get the current book object
            const isTopPick = book === topBook; // Check if the current book is the top-rated book
            
            let bookHTML = "<li"; // Start building the HTML for the book item
            if (isTopPick) { // If the book is the top-rated one, add a special class to it
                bookHTML += " class='top-pick'"; // Add a class to highlight the top-rated book
            }
            bookHTML += ">";// Add the opening <li> tag
            
            bookHTML += "<strong>" + book.title + "</strong>"; // Add the book title in bold
            bookHTML += "<span> by " + book.author + "</span>"; // Add the author name in a span
            bookHTML += "<br>"; // Add a line break
            
            const stars = getStars(book.rating); // Get the star rating for the book
            bookHTML += "<div><em>£" + book.price.toFixed(2) + "</em> | " + // Format the price to two decimal places
                        book.format + " | " +  // Add the book format
                        book.language + " | Rating: " + // Add the book language
                        book.rating + "/5 " + stars + "</div>";//  Add the book rating and stars
            
            bookHTML += "<p>" + book.description + "</p>"; // Add the book description in a paragraph
            
            bookHTML += "<button>Add to Wish List</button>";// Add a button to add the book to the wish list
            
            bookHTML += "</li>"; // Close the <li> tag
            
            bookList.innerHTML += bookHTML; // Append the book HTML to the book list
        } // whay i done , createing bookHTML variable i just write all the html code or syntax in a string and then append it to the bookList innerHTML.
        
        // Add event listeners to all wishlist buttons
        const wishlistButtons = bookList.getElementsByTagName("button");
        for (let i = 0; i < wishlistButtons.length; i++) {
            wishlistButtons[i].addEventListener("click", function() {
                addToWishList(filtered[i]);
            });
        }
    }
}

//FORM RESET FUNCTIONALITY Clears the search form and results when the reset button is clicked.
resetButton.addEventListener("click", handleFormReset);

function handleFormReset() {
    form.reset(); // Reset all form inputs to their default values
    bookList.innerHTML = ""; // Clear the list of displayed books
    errorMessage.textContent = ""; // Clear any existing error messages
}

// Converts a number rating (like 4.3) into star icons.
function getStars(rating) { // This function takes a rating number and returns a string of star icons.
    const full = Math.floor(rating); // Get the whole number part of the rating (e.g., 4 from 4.3)
    let stars = ""; // Initialize an empty string to hold the star icons
    for (let i = 0; i < full; i++) {// Loop through the whole number part of the rating
        stars += "★"; // Add a filled star icon for each whole number
    }
    for (let i = full; i < 5; i++) { // Loop until we reach 5 stars // (the maximum rating)
        stars += "☆"; // Add an empty star icon for the remaining stars
    }
    return stars; // Return the string of star icons (e.g., "★★★★☆")
}

// Adds a book to the user's wish list if they have a profile
function addToWishList(book) { // This function adds a book to the user's wish list if they have a profile.
    if (!userAccount) { // Check if the user has a profile
        wishlistWarning.style.display = "block"; // Show message if no profile exists
        document.getElementById("create-profile-section").scrollIntoView({ behavior: "smooth" }); // Scroll to the profile creation section
        return; // Exit the function if no profile exists
    }
    
    wishlistWarning.style.display = "none"; // Hide the warning message if the user has a profile
    
    
    // Check if book already exists in wishlist
    let exists = false; // Variable to track if the book already exists in the wish list
    for (let i = 0; i < userAccount.wishList.length; i++) { // Loop through the user's wish list
        if (userAccount.wishList[i].title === book.title) { // Check if the book title matches an existing book in the wish list
            exists = true; // Set exists to true if the book is found in the wish list
            break; // Exit the loop if the book is found
        }
    }
    
    if (!exists) { // If the book does not already exist in the wish list
        userAccount.wishList.push(book); // Add book to the wish list
        updateWishlistDisplay(); // Update the display
    }
}


// Updates the wish list display. This function refreshes the wish list display to show the current items in the user's wish list.
function updateWishlistDisplay() {
    wishlistOutput.innerHTML = "";// Clear the current wish list display
    
    if (!userAccount || userAccount.wishList.length === 0) { // Check if the user has a profile and if the wish list is empty
        const message = userAccount ? "Your wish list is currently empty." : "No profile created. Please create a profile."; // Set the message based on whether the user has a profile or not
        wishlistOutput.innerHTML = "<li>" + message + "</li>"; // Display the message in the wish list output area
        return; // Exit the function if the wish list is empty or no profile exists
    }
    
    for (let i = 0; i < userAccount.wishList.length; i++) { // Loop through the user's wish list
        const book = userAccount.wishList[i]; // Get the current book object from the wish list
        const stars = getStars(book.rating); // Get the star rating for the book
        
        let wishlistItemHTML = "<li>";// Start building the HTML for the wish list item
        wishlistItemHTML += "<strong>" + book.title + "</strong>"; // Add the book title in bold
        wishlistItemHTML += " by " + book.author; // Add the author name
        wishlistItemHTML += "<br>"; // Add a line break
        wishlistItemHTML += "<div><em>£" + book.price.toFixed(2) + "</em> | " + // Format the price to two decimal places
                          book.format + " | " +  // Add the book format
                          book.language + " | Rating: " +  // Add the book language
                          book.rating + "/5 " + stars + "</div>";// Add the book rating and stars
        wishlistItemHTML += "<p>" + book.description + "</p>"; // Add the book description in a paragraph
        wishlistItemHTML += "<button class='delete-button-wishlist'>Remove</button>"; // Add a button to remove the book from the wish list
        wishlistItemHTML += "</li>"; // Close the <li> tag
        
        wishlistOutput.innerHTML += wishlistItemHTML; // Append the wish list item HTML to the wish list output area
    }
    
    // Add event listeners to all remove buttons // This loop adds event listeners to all remove buttons in the wish list.
    const removeButtons = wishlistOutput.getElementsByTagName("button"); // Get all remove buttons in the wish list output area
    for (let i = 0; i < removeButtons.length; i++) { // Loop through the remove buttons
        removeButtons[i].addEventListener("click", function() { // Add click event listener to each remove button
            userAccount.wishList.splice(i, 1); // Remove the book from the wish list using splice
            updateWishlistDisplay(); // Update the wish list display after removing the book
        });
    }
}

//PROFILE MANAGEMENT
// This section handles the creation and management of user profiles. It allows users to create a profile, delete it, and manage their wish list.
profileForm.addEventListener("submit", handleProfileSubmit); // This line adds an event listener to the profile form, calling handleProfileSubmit when the form is submitted.

function handleProfileSubmit(e) {// This function handles the profile form submission.
    e.preventDefault(); // Prevent default form submission behavior

    // Collect form input elements 
    const firstName = document.getElementById("first-name");
    const lastName = document.getElementById("last-name");
    const email = document.getElementById("email");
    const dob = document.getElementById("dob");
    const contact = document.getElementById("contact");
    const occupation = document.getElementById("occupation");

    // Reset border color for all fields. This loop resets the border color of all required fields to a default color.
    const requiredFields = [firstName, lastName, email, dob, contact]; // Array of required fields
    for (let i = 0; i < requiredFields.length; i++) { // Loop through the required fields
        requiredFields[i].style.border = "1px solid #ccc"; // Reset border color to default
    }

    // Find first empty required field. This loop checks if any required field is empty and highlights the first empty field.
    let emptyField = null; // Variable to hold the first empty field found
    for (let i = 0; i < requiredFields.length; i++) { // Loop through the required fields
        if (requiredFields[i].value.trim() === "") {    // Check if the field is empty (after trimming whitespace)
            emptyField = requiredFields[i];//Set emptyField to the first empty field found
            break; // Exit the loop if an empty field is found
        }
    }
// Highlight the first empty field and scroll to it. This section highlights the first empty field and scrolls to it.
    // If an empty field is found, set its border to red and scroll to it.
    if (emptyField) { // If an empty field is found
        emptyField.style.border = "2px solid red"; // Set the border color to red to indicate an error
        emptyField.scrollIntoView({ behavior: "smooth", block: "center" }); // Scroll to the empty field smoothly and center it in the viewport
        emptyField.focus(); // Set focus on the empty field for user input
        return; //  Exit the function if an empty field is found
    }

// Check if the email is valid. This regular expression checks if the email format is valid.
    userAccount = {
        firstName: firstName.value.trim(),
        lastName: lastName.value.trim(),
        email: email.value.trim(),
        dob: dob.value,
        contact: contact.value.trim(),
        occupation: occupation.value.trim(),
        wishList: [] // Initialize an empty wish list for the user
    };
// Create a new user account object with the form data
    updateProfileStatus(); // Update the profile status display
    alert("Profile created successfully!"); // Show success message
    profileForm.reset();    // Reset the profile form inputs
    wishlistWarning.style.display = "none"; // Hide the warning message if it was shown before
}

// Delete profile button. This line adds an event listener to the delete profile button, calling handleDeleteProfile when clicked.
deleteProfileBtn.addEventListener("click", handleDeleteProfile);
// This function handles the deletion of the user's profile.
function handleDeleteProfile() {
    if (!userAccount) return;// If no user account exists, exit the function.

    if (confirm("Are you sure you want to delete your profile?")) {// Show confirmation dialog before deleting the profile
        userAccount = null; // Set userAccount to null to indicate no profile exists
        updateProfileStatus(); // Update the profile status display
        updateWishlistDisplay(); // Clear the wish list display
    }
}

// Update profile status display his function updates the profile status display based on whether a user account exists or not.
function updateProfileStatus() {
    if (userAccount) {// If a user account exists
        profileStatus.textContent = "Active (" + userAccount.firstName + " " + userAccount.lastName + ")";// Display the user's name in the profile status area
    } else { // If no user account exists
        profileStatus.textContent = "No profile created"; // Display a message indicating no profile exists
    }
}

//CLEAR WISHLIST
// This function clears the user's wish list if they have a profile and the wish list is not empty.
clearWishlistBtn.addEventListener("click", handleClearWishlist);
//  This function handles the clearing of the user's wish list.
function handleClearWishlist() {
    if (!userAccount) return; // If no user account exists, exit the function.

    if (userAccount.wishList.length > 0) { // Check if the wish list is not empty
        userAccount.wishList = []; // Clear the wish list by setting it to an empty array
        updateWishlistDisplay(); // Update the wish list display to reflect the changes
    }
}

// Initialize display
updateProfileStatus(); // Update the profile status display when the page loads
updateWishlistDisplay(); // Update the wish list display when the page loads

