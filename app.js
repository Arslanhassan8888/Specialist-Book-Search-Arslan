const books = [
    { title: "The Shadow in the Attic", author: "Arthur Blackwood", genre: "mystery", price: 15.00, language: "English", format: "paperback", description: "A chilling mystery unfolds in an old house." },
    { title: "Whispers of the Past", author: "Arthur Blackwood", genre: "mystery", price: 22.50, language: "Arabic", format: "hardcover", description: "Ancient secrets resurface in a modern city." },
    { title: "The Mystery of the Closed Room", author: "Arthur Blackwood", genre: "mystery", price: 18.75, language: "French", format: "ebook", description: "A seemingly impossible crime in a locked room." },
    { title: "The Vanishing Book", author: "Arthur Blackwood", genre: "mystery", price: 35.99, language: "English", format: "ebook", description: "A rare book collector disappears along with his prized possession." },
    { title: "Echoes of the Empire", author: "Arthur Blackwood", genre: "historical", price: 76.00, language: "English", format: "hardcover", description: "A sweeping tale of power and betrayal in a forgotten empire." },
    { title: "Chronicles of the Revolution", author: "Arthur Blackwood", genre: "historical", price: 42.00, language: "French", format: "paperback", description: "Eyewitness accounts from a time of great upheaval." },
    { title: "Tales from the Distant Past", author: "Arthur Blackwood", genre: "historical", price: 15.00, language: "Arabic", format: "hardcover", description: "Legends and myths from ancient civilizations." },
    { title: "The King's Sin", author: "Arthur Blackwood", genre: "historical", price: 17.50, language: "English", format: "paperback", description: "A royal scandal that changed the course of history." },
    { title: "The Weaver's Tale", author: "Arthur Blackwood", genre: "fiction", price: 59.00, language: "English", format: "paperback", description: "A heartwarming story of love and loss in a small village." },
    { title: "Lost Dreams", author: "Arthur Blackwood", genre: "fiction", price: 88.50, language: "French", format: "ebook", description: "A poignant exploration of dreams deferred and second chances." },
    { title: "Colors of Longing", author: "Arthur Blackwood", genre: "fiction", price: 28.00, language: "Arabic", format: "hardcover", description: "A vibrant tapestry of interconnected stories from across generations." },
    { title: "The Silent Symphony", author: "Arthur Blackwood", genre: "fiction", price: 16.50, language: "English", format: "ebook", description: "A moving story about finding your voice in a world that doesn't listen." },

    { title: "The Case of the Missing Diamonds", author: "Eleanor Vance", genre: "mystery", price: 98.50, language: "English", format: "hardcover", description: "A brilliant detective investigates the theft of a priceless jewel." },
    { title: "Secrets of the Dark Night", author: "Eleanor Vance", genre: "mystery", price: 11.00, language: "Arabic", format: "ebook", description: "A web of deceit and hidden motives under the cloak of darkness." },
    { title: "The Secret of the Manor", author: "Eleanor Vance", genre: "mystery", price: 87.00, language: "French", format: "paperback", description: "A family's dark secrets are brought to light by a mysterious stranger." },
    { title: "The Ghostly Witness", author: "Eleanor Vance", genre: "mystery", price: 25.50, language: "English", format: "paperback", description: "A supernatural element complicates a puzzling murder investigation." },
    { title: "The Fall of Kings", author: "Eleanor Vance", genre: "historical", price: 74.00, language: "English", format: "paperback", description: "The dramatic story of the end of a powerful dynasty." },
    { title: "The Heirs of History", author: "Eleanor Vance", genre: "historical", price: 33.00, language: "French", format: "hardcover", description: "Following the lives of those shaped by historical events." },
    { title: "Tales from the Time of the Pharaohs", author: "Eleanor Vance", genre: "historical", price: 32.00, language: "Arabic", format: "ebook", description: "Intrigue and adventure in the land of pyramids and pharaohs." },
    { title: "The Rebel Queen", author: "Eleanor Vance", genre: "historical", price: 64.00, language: "English", format: "ebook", description: "A captivating novel about a woman who defied an empire." },
    { title: "The Painter's Muse", author: "Eleanor Vance", genre: "fiction", price: 25.00, language: "English", format: "hardcover", description: "A tale of art, passion, and inspiration in Renaissance Italy." },
    { title: "The Colors of Life", author: "Eleanor Vance", genre: "fiction", price: 57.50, language: "French", format: "paperback", description: "Exploring the joys and sorrows of everyday life through vivid characters." },
    { title: "Songs of the Soul", author: "Eleanor Vance", genre: "fiction", price: 29.50, language: "Arabic", format: "paperback", description: "Melodies of love, longing, and belonging in a bustling city." },
    { title: "The Secret Garden Revisited", author: "Eleanor Vance", genre: "fiction", price: 15.50, language: "English", format: "ebook", description: "A new generation discovers the magic of the hidden garden." },

    { title: "The Puzzle Box Killer", author: "Jasper Thorne", genre: "mystery", price: 20.00, language: "English", format: "ebook", description: "A detective must solve a series of murders linked by cryptic puzzles." },
    { title: "The Riddle of the Mysterious Crime", author: "Jasper Thorne", genre: "mystery", price: 41.00, language: "Arabic", format: "paperback", description: "Unraveling a complex crime with unexpected twists and turns." },
    { title: "The Crystal Trap", author: "Jasper Thorne", genre: "mystery", price: 51.50, language: "French", format: "hardcover", description: "A tense thriller set in a luxurious but isolated hotel." },
    { title: "The Silent Witness", author: "Jasper Thorne", genre: "mystery", price: 63.50, language: "English", format: "paperback", description: "A seemingly open-and-shut case takes a dark turn when a new witness emerges." },
    { title: "The Age of Discovery", author: "Jasper Thorne", genre: "historical", price: 23.50, language: "English", format: "hardcover", description: "An epic voyage into the unknown, filled with adventure and peril." },
    { title: "The Shadow of the Bastille", author: "Jasper Thorne", genre: "historical", price: 97.00, language: "French", format: "ebook", description: "A story of courage and rebellion during the French Revolution." },
    { title: "Wars of the Great Desert", author: "Jasper Thorne", genre: "historical", price: 31.00, language: "Arabic", format: "paperback", description: "A dramatic account of the battles that shaped a vast desert landscape." },
    { title: "The Victorian Secret", author: "Jasper Thorne", genre: "historical", price: 16.00, language: "English", format: "paperback", description: "Intrigue and scandal behind the closed doors of Victorian society." },
    { title: "The Clockmaker's Daughter", author: "Jasper Thorne", genre: "fiction", price: 42.00, language: "English", format: "hardcover", description: "A whimsical tale of time, love, and intricate creations." },
    { title: "The Enchanted Gardens", author: "Jasper Thorne", genre: "fiction", price: 20.50, language: "French", format: "paperback", description: "A magical journey through hidden realms and fantastical creatures." },
    { title: "Stars in a Distant Sky", author: "Jasper Thorne", genre: "fiction", price: 11.00, language: "Arabic", format: "ebook", description: "A celestial saga of cosmic wonder and the search for meaning." },
    { title: "The Lost Melody", author: "Jasper Thorne", genre: "fiction", price: 14.50, language: "English", format: "ebook", description: "A musician's quest to rediscover a forgotten masterpiece." },

    { title: "The Poisoned Chalice", author: "Isabelle Moreau", genre: "mystery", price: 19.00, language: "English", format: "paperback", description: "A deadly game of cat and mouse in the world of fine wines." },
    { title: "The Mystery of the Old Palace", author: "Isabelle Moreau", genre: "mystery", price: 26.50, language: "Arabic", format: "hardcover", description: "Unraveling a centuries-old mystery hidden within palace walls." },
    { title: "The Riddle of the Portrait", author: "Isabelle Moreau", genre: "mystery", price: 31.00, language: "French", format: "ebook", description: "A mysterious painting holds the key to a long-forgotten crime." },
    { title: "The Locked Safe", author: "Isabelle Moreau", genre: "mystery", price: 48.50, language: "English", format: "ebook", description: "What secrets lie hidden behind an unbreakable safe?" },
    { title: "The Silk Road Adventure", author: "Isabelle Moreau", genre: "historical", price: 58.00, language: "English", format: "ebook", description: "A thrilling journey along the ancient trade route, filled with danger and discovery." },
    { title: "The Time of Cathedrals", author: "Isabelle Moreau", genre: "historical", price: 67.00, language: "French", format: "hardcover", description: "Life and faith in medieval Europe during the building of magnificent cathedrals." },
    { title: "Extinct Civilizations", author: "Isabelle Moreau", genre: "historical", price: 82.00, language: "Arabic", format: "paperback", description: "Exploring the rise and fall of great civilizations of the past." },
    { title: "The American Frontier", author: "Isabelle Moreau", genre: "historical", price: 95.00, language: "English", format: "paperback", description: "Tales of pioneers, cowboys, and the taming of the Wild West." },
    { title: "The Baker's Secret", author: "Isabelle Moreau", genre: "fiction", price: 16.00, language: "English", format: "ebook", description: "A heartwarming story about community, friendship, and the magic of baking." },
    { title: "The Stars in Our Hearts", author: "Isabelle Moreau", genre: "fiction", price: 22.00, language: "French", format: "hardcover", description: "A beautiful story about love, loss, and finding light in the darkest of times." },
    { title: "The Garden of Dreams", author: "Isabelle Moreau", genre: "fiction", price: 38.00, language: "Arabic", format: "paperback", description: "A whimsical and enchanting tale set in a garden where dreams come true." },
    { title: "The Lighthouse Keeper's Daughter", author: "Isabelle Moreau", genre: "fiction", price: 57.50, language: "English", format: "paperback", description: "A captivating story of solitude, resilience, and the sea." }
];


// get DOM elements
const form = document.getElementById("book-form");
const bookList = document.getElementById("book-list");
const errorMessage = document.getElementById("error-message");

// handle form submission
form.addEventListener("submit", function (e) {
  e.preventDefault();
  errorMessage.textContent = "";

  const genre = document.getElementById("genre").value;
  const author = document.getElementById("author").value.trim().toLowerCase();
  const minPriceStr = document.getElementById("min-price").value.trim();
  const maxPriceStr = document.getElementById("max-price").value.trim();
  const language = document.getElementById("language").value.trim().toLowerCase();
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
    if (language && book.language.toLowerCase() !== language) return false;
    if (format && book.format !== format) return false;
    return true;
  });

  displayBooks(results);
});

// display books
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
