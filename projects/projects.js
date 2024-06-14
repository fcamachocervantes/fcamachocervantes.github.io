const projectsContainer = document.getElementById("projects-container");

fetch("projects/projects.json")
  .then((response) => response.json())
  .then((data) => {
    data.projects.forEach((project) => {
      // Create Project Container
      const projectDiv = document.createElement("div");
      projectDiv.classList.add("project");

      // Create and Append Project Details
      const projectHeader = document.createElement("div");
      projectHeader.classList.add("project-header");
      projectHeader.innerHTML = `<h3>${project.project_name}</h3>`;
      projectDiv.appendChild(projectHeader);

      const projectInfo = document.createElement("div");
      projectInfo.classList.add("project-info");
      projectInfo.innerHTML = `
            <p><strong>Semester:</strong> ${project.semester}</p>
            <p><strong>Class:</strong> ${project.class_id}</p>
            <p><strong>Description:</strong> ${project.description}</p>
            <p><strong>Skills:</strong> ${project.skills.join(", ")}</p>
            <p><strong>Languages:</strong> ${project.programming_languages.join(
              ", "
            )}</p>
        `;

      projectDiv.appendChild(projectInfo);''
      projectDiv.addEventListener("click", () => {
        window.open(project.github_link, "_blank");
      });

      projectsContainer.appendChild(projectDiv);
    });
  });
