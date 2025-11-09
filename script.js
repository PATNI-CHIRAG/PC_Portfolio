const toggleBtn = document.getElementById("themeToggle");
const body = document.body;
const contact = document.querySelector(".contact-section");

// ✅ Load saved theme from storage
const savedTheme = localStorage.getItem("portfolioTheme");

if (savedTheme === "night") {
  body.classList.add("night");
  body.classList.remove("day");
  contact?.classList.add("dark");
  toggleBtn.innerHTML = `<i class="fa-solid fa-sun"></i>`;
} else {
  body.classList.add("day");
  body.classList.remove("night");
  contact?.classList.add("light");
  toggleBtn.innerHTML = `<i class="fa-solid fa-moon"></i>`;
}

// ✅ Theme Toggle (manual)
toggleBtn.addEventListener("click", () => {
  const isDay = body.classList.toggle("day");
  body.classList.toggle("night", !isDay);

  if (isDay) {
    contact?.classList.remove("dark");
    contact?.classList.add("light");
    toggleBtn.innerHTML = `<i class="fa-solid fa-moon"></i>`;
    localStorage.setItem("portfolioTheme", "day");
  } else {
    contact?.classList.remove("light");
    contact?.classList.add("dark");
    toggleBtn.innerHTML = `<i class="fa-solid fa-sun"></i>`;
    localStorage.setItem("portfolioTheme", "night");
  }
});



// 🍔 Navbar toggle
menuToggle.addEventListener("click", () => {
    navbar.classList.toggle("active");
});

// ✅ Change active menu item when clicked
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.forEach(nav => nav.classList.remove("active")); // remove active from all
        link.classList.add("active"); // add active only on clicked one
    });
});



const form = document.getElementById("contactForm");
  const statusMsg = document.getElementById("form-status");

  form.addEventListener("submit", async function (event) {
    event.preventDefault(); // stop page reload

    statusMsg.innerHTML = "⏳ Sending message...";
    statusMsg.style.color = "#6c63ff";

    const formData = new FormData(form);

    const response = await fetch(form.action, {
      method: form.method,
      body: formData,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      statusMsg.innerHTML = "✅ Message Sent Successfully!";
      statusMsg.style.color = "green";
      form.reset(); // Clear form after send
    } else {
      statusMsg.innerHTML = "❌ Something went wrong. Try again!";
      statusMsg.style.color = "red";
    }
  });





