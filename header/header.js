// header.js

// --- Progress Bar Functionality ---

// Updates the progress bar's width based on scroll position.
function updateProgressBar() {
  const scrolled = (window.scrollY / (document.documentElement.scrollHeight - document.documentElement.clientHeight)) * 100;
  document.querySelector(".progress-bar").style.width = scrolled + "%";
}

// Attaches the updateProgressBar function to the scroll event.
window.addEventListener("scroll", updateProgressBar);


// --- Header Collapse/Expand Functionality ---

// Toggles the collapsed state of the header.
function toggleHeader() {
  const header = document.querySelector("header");
  header.classList.toggle("collapsed");
  localStorage.setItem("headerCollapsed", header.classList.contains("collapsed"));
}

// Retrieves and applies the collapsed state from localStorage on page load.
document.addEventListener("DOMContentLoaded", () => {
  const isCollapsed = localStorage.getItem("headerCollapsed") === "true";
  if (isCollapsed) {
    document.querySelector("header").classList.add("collapsed");
  }
});


// --- Navigation Link Handling ---

// Updates the header text to match the clicked link.
function updateHeaderText(link) {
  document.querySelector("header h1").textContent = link.textContent;
}

// Highlights the active link in the navigation.
function highlightActiveLink() {
  const currentUrl = window.location.href;
  const navLinks = document.querySelectorAll("header nav a");

  navLinks.forEach(link => {
    if(link.href === currentUrl) {
      link.classList.toggle("active");
    }
  });
}

// Attaches event listeners to each navigation link.
document.querySelectorAll("header nav a").forEach(link => {
  link.addEventListener("click", () => {
    updateHeaderText(link);
    highlightActiveLink();
  });
});

// Highlights the link matching the current page on load.
document.addEventListener("DOMContentLoaded", () => {
  const currentPath = window.location.pathname.split("/").pop();
  document.querySelectorAll("header nav a").forEach(link => {
    if (link.href.includes(currentPath)) {
      updateHeaderText(link);
    }
  });
  highlightActiveLink(); 
});