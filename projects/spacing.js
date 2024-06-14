function adjustCoursesMargin() {
    const header = document.querySelector("#dynamicHeader");
    const projectContainer = document.querySelector("#projects-container");
  
    // Use a transitionend event listener
    header.addEventListener("transitionend", function() {
      const headerHeight = header.offsetHeight;
      const margin = headerHeight; // 20px extra margin
      projectContainer.style.marginTop = `${margin + 20}px`;
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
      document.querySelector("#projects-container").style.marginTop = `90px`;
    }
    else {
      document.querySelector("#projects-container").style.marginTop = `152px`;
    }
    adjustCoursesMargin(); // Ensure initial margin is correct
  });