function adjustCoursesMargin() {
  const header = document.querySelector("#dynamicHeader");
  const coursesGrid = document.querySelector(".courses-grid");

  // Use a transitionend event listener
  header.addEventListener("transitionend", function() {
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

// Initial adjustment on page load (after header is fully rendered)
document.addEventListener("DOMContentLoaded", function() {
  if (window.innerWidth < 500) {
    document.querySelector(".courses-grid").style.marginTop = `60px`;
  }
  else {
    document.querySelector(".courses-grid").style.marginTop = `152px`;
  }
  adjustCoursesMargin(); // Ensure initial margin is correct
});