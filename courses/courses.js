fetch("courses/courses.json") // Fetch your JSON file
  .then((response) => response.json())
  .then((data) => {
    const coursesContainer = document.querySelector(".courses-grid");

    data.courses.forEach((course) => {
      // Loop through courses (note spelling!)
      const courseElement = document.createElement("div");
      courseElement.setAttribute("id", "course");

      const header = document.createElement("div"); // Container for header elements
      header.classList.add("course-header");

      const dropdownButton = document.createElement("button");
      dropdownButton.textContent = "▼"; // Downward arrow
      dropdownButton.classList.add("dropdown-button");

      // Details container (initially hidden)
      const detailsContainer = document.createElement("div");
      detailsContainer.classList.add("course-details");
      detailsContainer.style.display = "none";

      // Create elements for each course property:
      const semester = document.createElement("h3");
      semester.textContent = course.semester;

      const className = document.createElement("h2");
      // Combine class name and ID into a single header:
      className.textContent = `${course.class_name}`;

      // Add a class for easier styling:
      className.classList.add("terminal-title");

      const courseHeader = document.createElement("div");
      courseHeader.textContent = `${course.class_name} (${course.class_id})`;
      courseHeader.classList.add("course-header");

      const description = document.createElement("p");
      description.textContent = course.description;

      // Create lists for skills and languages:
      const skillsList = document.createElement("ul");
      course.skills.forEach((skill) => {
        const listItem = document.createElement("li");
        listItem.textContent = skill;
        skillsList.appendChild(listItem);
      });

      const languagesList = document.createElement("ul");
      course.programming_languages.forEach((language) => {
        const listItem = document.createElement("li");
        listItem.textContent = language;
        languagesList.appendChild(listItem);
      });

      // Append elements to the header
      header.appendChild(className);
      header.appendChild(dropdownButton);

      // Append elements to the courseElement
      courseElement.appendChild(header);
      courseElement.appendChild(detailsContainer);

      // Add event listener for dropdown button
      courseElement.addEventListener("click", () => {
        courseElement.classList.toggle("expanded");
        if (detailsContainer.style.display === "none") {
          detailsContainer.style.display = "block";
          dropdownButton.textContent = "▲"; // Upward arrow
        } else {
          detailsContainer.style.display = "none";
          dropdownButton.textContent = "▼";
        }
      });

      // Append details to detailsContainer
      detailsContainer.appendChild(semester);
      detailsContainer.appendChild(description);
      detailsContainer.appendChild(skillsList);
      detailsContainer.appendChild(languagesList);

      coursesContainer.appendChild(courseElement);
    });

    document.body.appendChild(coursesContainer); // Add to the page
  });
