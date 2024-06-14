function adjustCoursesMargin() {
  const header = document.querySelector("#dynamicHeader");
  const coursesGrid = document.querySelector(".container");

  // Use a transitionend event listener
  header.addEventListener("transitionend", function () {
    const headerHeight = header.offsetHeight;
    const margin = headerHeight; // 20px extra margin
    coursesGrid.style.marginTop = `${margin}px`;
  });
}

// Event listener for header collapse/expand
const collapseBtn = document.querySelector(".collapse-btn");
if (collapseBtn) {
  collapseBtn.addEventListener("click", adjustCoursesMargin);
}

function downloadResume() {
  const path = "images/FranciscoCamacho.pdf"
  const link = document.createElement("a");
  link.href = path;
  link.download = path.split("/").pop(); // Extract filename
  link.click();
}

// Initial adjustment on page load (after header is fully rendered)
document.addEventListener("DOMContentLoaded", function () {
  const paragraphs = document.querySelectorAll("p");

  paragraphs.forEach((p) => {
    const text = p.textContent;
    p.textContent = ""; // Clear initial text
    let i = 0;

    function typeWriter() {
      if (i < text.length) {
        p.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 1); // Adjust typing speed here (milliseconds)
      }
    }

    typeWriter(); // Start typing effect
  });

  if (window.innerWidth < 500) {
    document.querySelector(".container").style.marginTop = `60px`;
  } else {
    document.querySelector(".container").style.marginTop = `152px`;
  }
  adjustCoursesMargin(); // Ensure initial margin is correct
});
