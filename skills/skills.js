// Load skills data (you'll need to implement this based on how you're serving skills.json)
fetch("skills/skills.json")
  .then((response) => response.json())
  .then((skillsData) => {
    // Get the container element
    const skillsList = document.querySelector(".skills-list");

    // Create the graph structure (using a library like D3.js or vis.js is recommended)
    const nodes = [];
    const edges = [];

    skillsData.skills.forEach((skill) => {
      // Add skill node
      nodes.push({ id: skill.skill, label: skill.skill, group: "skill" });

      skill.relevance.forEach((topic) => {
        // Add topic node (if it doesn't exist yet)
        const topicId = topic; // Use topic as ID
        if (!nodes.some((n) => n.id === topicId)) {
          nodes.push({ id: topicId, label: topic, group: "topic" });
        }

        // Add edge between skill and topic
        edges.push({ from: skill.skill, to: topicId });
      });
    });

    // Create the graph visualization (replace with your actual visualization logic)
    const data = {
      nodes: new vis.DataSet(nodes),
      edges: new vis.DataSet(edges),
    };

    const options = {
      groups: {
        skill: { shape: "box" },
        topic: { shape: "ellipse" },
      },
      arrows: {
        to: {
          enabled: true
        }
      },
      physics: true,
    };

    // Function to update skills-list height
    function updateSkillsListHeight() {
      const windowHeight = window.innerHeight;
      const headerHeight = document.querySelector("header").offsetHeight; // Get header height
      const margin = 40; // Adjust as needed for top/bottom margin
      const newHeight = windowHeight - headerHeight - margin;
      skillsList.style.height = `${newHeight}px`;
    }

    // Initial height adjustment
    updateSkillsListHeight();

    // Add event listener for window resize
    window.addEventListener("resize", updateSkillsListHeight);

    // Create the graph visualization
    const network = new vis.Network(skillsList, data, options);

    // Additional adjustment after graph is rendered (optional)
    network.on("stabilized", updateSkillsListHeight);
  });
