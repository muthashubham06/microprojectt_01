
    // Get form and fields
    const form = document.getElementById("signupForm");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const confirmInput = document.getElementById("confirm");
    const errorMsg = document.getElementById("errorMsg");

    form.addEventListener("submit", function (e) {
      e.preventDefault(); // stop normal form submit

      // Clear previous error message
      errorMsg.textContent = "";

      const name = nameInput.value.trim();
      const email = emailInput.value.trim();
      const password = passwordInput.value;
      const confirm = confirmInput.value;

      // Very simple checks for beginners
      if (!name || !email || !password || !confirm) {
        errorMsg.textContent = "Please fill in all fields.";
        return;
      }

      if (password.length < 8) {
        errorMsg.textContent = "Password must be at least 8 characters long.";
        return;
      }

      if (password !== confirm) {
        errorMsg.textContent = "Passwords do not match.";
        return;
      }

      // If everything is okay
      alert("Your account is successfully generated");

      // After 3 seconds, go to another page
      // Change "index.html" to any page you want
      setTimeout(function () {
        window.location.href = "microhome.html";
      }, 1500);
    });
  




    function handleSubmit(e){
      e.preventDefault();
      alert("Thanks for your response!");
      e.target.reset();
    }

    document.getElementById("year").textContent = new Date().getFullYear();
  

