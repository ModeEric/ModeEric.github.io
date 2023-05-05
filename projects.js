const projects = [
    {
      title: 'Project 1',
      image: 'path/to/image1.jpg',
      description: 'Short description of project 1',
      longDescription: 'Long description of project 1',
      skills: ['Python', 'Web Scraping']
    },
    // Add more projects here
  ];
  
  function createProjectCard(project) {
    const projectCard = document.createElement('div');
    projectCard.classList.add('project-card');
    projectCard.innerHTML = `
      <h4>${project.title}</h4>
      <img src="${project.image}" alt="${project.title}">
      <p>${project.description}</p>
    `;
    projectCard.addEventListener('click', () => showModal(project));
    return projectCard;
  }
  
  function populateProjects() {
    const projectsContainer = document.getElementById('projects-container');
    projects.forEach(project => {
      const projectCard = createProjectCard(project);
      projectsContainer.appendChild(projectCard);
    });
  }
  
  function filterProjects() {
    const searchInput = document.getElementById('search-projects');
    const searchTerm = searchInput.value.toLowerCase();
    const projectsContainer = document.getElementById('projects-container');
  
    projectsContainer.innerHTML = '';
  
    projects.forEach(project => {
      const skills = project.skills.join(', ').toLowerCase();
      if (skills.includes(searchTerm)) {
        const projectCard = createProjectCard(project);
        projectsContainer.appendChild(projectCard);
      }
    });
  }
  
  function showModal(project) {
    const modal = document.getElementById('project-modal');
    document.getElementById('project-modal-title').innerText = project.title;
    document.getElementById('project-modal-image').src = project.image;
    document.getElementById('project-modal-description').innerText = project.longDescription;
  
    modal.style.display = 'block';
  
    document.querySelector('.close-modal').addEventListener('click', () => {
      modal.style.display = 'none';
    });
  
    window.addEventListener('click', event => {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    });
  }
  
  populateProjects();