function adjustCoursesMargin() {
  const header = document.querySelector("#dynamicHeader");
  const coursesGrid = document.querySelector(".skills-list");

  // Use a transitionend event listener
  header.addEventListener("transitionend", function () {
    const headerHeight = header.offsetHeight;
    const margin = headerHeight;
    coursesGrid.style.marginTop = `${margin}px`;
  });
}

// Event listener for header collapse/expand
const collapseBtn = document.querySelector(".collapse-btn");
if (collapseBtn) {
  collapseBtn.addEventListener("click", adjustCoursesMargin);
}

// Initial adjustment on page load (after header is fully rendered)
document.addEventListener("DOMContentLoaded", function () {
  if (window.innerWidth < 500) {
    document.querySelector(".skills-list").style.marginTop = `60px`;
  }
  else {
    document.querySelector(".skills-list").style.marginTop = `152px`;
  }
  adjustCoursesMargin(); // Ensure initial margin is correct
});
