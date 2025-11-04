document.addEventListener("DOMContentLoaded", () => {
  // Highlight active navigation link
  const navLinks = document.querySelectorAll(".nav-link");
  const currentPage = window.location.pathname.split("/").pop();

  navLinks.forEach(link => {
    const linkPage = link.getAttribute("href");
    if (linkPage === currentPage) {
      link.classList.add("active");
    }
  });

  // Contact form validation
  const form = document.getElementById("contactForm");
  if(form){
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      let errors = [];
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (name === "") errors.push("Full Name is required.");
      else if (name.length < 3) errors.push("Full Name must be at least 3 characters long.");

      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      if (email === "") errors.push("Email Address is required.");
      else if (!emailPattern.test(email)) errors.push("Please enter a valid email address.");

      if (message === "") errors.push("Message field cannot be empty.");

      if (errors.length > 0) alert("Please fix the following errors:\n\n" + errors.join("\n"));
      else {
        alert("Thank you for contacting FreshMarket! We’ll reply soon.");
        form.reset();
      }
    });
  }
});
