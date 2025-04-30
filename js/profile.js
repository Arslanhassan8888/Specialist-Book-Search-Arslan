// profile.js

export function setupProfileForm() {
    const profileForm = document.getElementById("profile-form");
    const wishlistWarning = document.getElementById("wishlist-warning");
  
    profileForm.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const firstName = document.getElementById("first-name");
      const lastName = document.getElementById("last-name");
      const email = document.getElementById("email");
      const dob = document.getElementById("dob");
      const contact = document.getElementById("contact");
  
      const requiredFields = [firstName, lastName, email, dob, contact];
      let emptyField = requiredFields.find(input => input.value.trim() === "");
  
      // Reset border styling first
      requiredFields.forEach(input => input.style.border = "1px solid #ccc");
  
      if (emptyField) {
        emptyField.style.border = "2px solid red";
        emptyField.scrollIntoView({ behavior: "smooth", block: "center" });
        emptyField.focus();
        return;
      }
  
      const profile = {
        firstName: firstName.value.trim(),
        lastName: lastName.value.trim(),
        email: email.value.trim(),
        dob: dob.value,
        contact: contact.value.trim()
      };
  
      localStorage.setItem("userProfile", JSON.stringify(profile));
      alert("Profile created successfully!");
      profileForm.reset();
      wishlistWarning.style.display = "none";
    });
  
    document.getElementById("delete-profile").addEventListener("click", () => {
      if (confirm("Are you sure you want to delete your profile and wish list?")) {
        localStorage.removeItem("userProfile");
        localStorage.removeItem("wishList");
        alert("Your profile and wish list have been deleted.");
        location.reload(); // reloads the page to refresh the state
      }
    });
  }
  