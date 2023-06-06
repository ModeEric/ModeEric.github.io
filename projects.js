const projects = [
  {
    title: 'Robotic Hand Control using MediaPipe',
    image: 'ModeEric.github.io/media/robotichandcode.jpeg',
    description: 'A system that leverages MediaPipe and OpenCV to control a robotic hand.',
    longDescription: 'The Robotic Hand Control project is a Python-based project that uses the MediaPipe framework and OpenCV to detect hand gestures and use them to control a robotic hand. The project includes several Python scripts. The "test.py" script uses MediaPipe and OpenCV to identify and draw various parts of the hand on a video feed. The "coords.py" script creates an array of coordinates for each part of the hand. The "clenched.py" script provides values indicating how clenched each finger is. The project was developed as part of the EOH 2022 Robotic Hand Project. Potential applications could include virtual reality, remote control of robotic devices, and more.',
    skills: ['Python', 'OpenCV', 'MediaPipe', 'Robotics']
  }
  
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