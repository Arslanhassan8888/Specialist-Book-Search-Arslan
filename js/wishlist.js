// wishlist.js

export function setupWishlistHandlers() {
    const showWishlistBtn = document.getElementById("show-wishlist");
    const wishlistOutput = document.getElementById("my-wishlist");
    const clearWishlistBtn = document.getElementById("clear-wishlist");
    const profileSection = document.getElementById("create-profile-section");
    const wishlistWarning = document.getElementById("wishlist-warning");
  
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
  
          const title = document.createElement("strong");
          title.textContent = book.title;
          const authorText = document.createTextNode(` by ${book.author}`);
  
          const details = document.createElement("div");
          details.innerHTML = `<em>£${book.price.toFixed(2)}</em> | ${book.format} | ${book.language} | Rating: ${book.rating}/5 ${getStars(book.rating)}`;
  
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
  
    clearWishlistBtn.addEventListener("click", () => {
      if (confirm("Are you sure you want to clear your wish list?")) {
        localStorage.removeItem("wishList");
        wishlistOutput.innerHTML = "";
        alert("Your wish list has been cleared.");
      }
    });
  }
  
  export function addToWishList(book) {
    const wishlistWarning = document.getElementById("wishlist-warning");
    const profileSection = document.getElementById("create-profile-section");
  
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
  
  function getStars(rating) {
    const full = Math.floor(rating);
    return "★".repeat(full) + "☆".repeat(5 - full);
  }
  