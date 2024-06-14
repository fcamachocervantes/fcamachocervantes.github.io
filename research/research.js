// Fetch your JSON data
fetch('research/research.json') // Assuming JSON file is in the same directory
  .then(response => response.json())
  .then(data => {
    const researchContainer = document.getElementById('research-container');

    data.projects.forEach(project => {
      // Create individual project containers
      const projectDiv = document.createElement('div');
      projectDiv.classList.add('project');

      // Display project details
      projectDiv.innerHTML = `
        <h2>${project.project_name}</h2>
        <p><strong>Semester:</strong> ${project.semester}</p>
        <p><strong>Class:</strong> ${project.class_name} (${project.class_id})</p>
        <p>${project.description}</p>
        
        <div class="skills-container">
            <h3>Skills:</h3>
            <ul class="skills-list">
                ${project.skills.map(skill => `<li>${skill}</li>`).join('')}
            </ul>
        </div>
        
        <div class="languages-container">
            <h3>Programming Languages:</h3>
            <ul class="languages-list">
                ${project.programming_languages.map(lang => `<li>${lang}</li>`).join('')}
            </ul>
        </div>
      `;

      // PDF Viewer and Download Button
      const pdfViewer = document.createElement('iframe');
      pdfViewer.src = project.research_paper;
      pdfViewer.width = '80%';  // Adjust width as needed
      pdfViewer.height = '500px'; // Adjust height as needed
      projectDiv.appendChild(pdfViewer);

      projectDiv.appendChild(document.createElement('br'));

      const downloadButton = document.createElement('button');
      downloadButton.textContent = 'Download PDF';
      downloadButton.onclick = () => {
        // Trigger download
        const link = document.createElement('a');
        link.href = project.research_paper;
        link.download = project.research_paper.split('/').pop(); // Extract filename
        link.click();
      };
      projectDiv.appendChild(downloadButton);

      researchContainer.appendChild(projectDiv);
    });
  });