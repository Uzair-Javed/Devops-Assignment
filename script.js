// Sample project data
const projects = [
    { name: 'Project 1', technology: 'C#' },
    { name: 'Project 2', technology: 'Java' },
    { name: 'Project 3', technology: 'Node.js' },
    { name: 'Project 4', technology: 'PHP' },
    { name: 'Project 5', technology: 'REACT' },
    { name: 'Project 6', technology: 'PYTHON' }
    // Add more project objects here with different technologies
  ];
  
  // Function to display projects
  function displayProjects() {
    const filterInput = document.getElementById('filterInput');
    const projectList = document.getElementById('projectList');
  
    filterInput.addEventListener('input', function() {
      const filterValue = filterInput.value.toLowerCase();
      const filteredProjects = projects.filter(project =>
        project.technology.toLowerCase().includes(filterValue)
      );
  
      // Clear previous list
      projectList.innerHTML = '';
  
      // Display filtered projects
      filteredProjects.forEach(project => {
        const listItem = document.createElement('li');
        listItem.textContent = `${project.name} - ${project.technology}`;
        projectList.appendChild(listItem);
      });
    });
  }
  
  // Call function to display projects
  displayProjects();
  