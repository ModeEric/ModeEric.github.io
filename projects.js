const projects = [
  {
    title: 'Robotic Hand Control using MediaPipe',
    image: 'media/robotichandcode.jpeg',
    description: 'A system that leverages MediaPipe and OpenCV to control a robotic hand.',
    longDescription: 'The Robotic Hand Control project is a Python-based project that uses the MediaPipe framework and OpenCV to detect hand gestures and use them to control a robotic hand. The project includes several Python scripts. The "test.py" script uses MediaPipe and OpenCV to identify and draw various parts of the hand on a video feed. The "coords.py" script creates an array of coordinates for each part of the hand. The "clenched.py" script provides values indicating how clenched each finger is. The project was developed as part of the EOH 2022 Robotic Hand Project. Potential applications could include virtual reality, remote control of robotic devices, and more.',
    skills: ['Python', 'OpenCV', 'MediaPipe', 'Robotics']
  },
  {
    title: 'Embeddables - Word Embeddings Analysis and Visualization',
    image: 'media/generic_word_embeddings.png',
    description: 'A C++ project that uses Word2Vec to create and analyze word embeddings from large text documents, with a visualization of word connections.',
    longDescription: 'Embeddables is a CS-225 Final Project that uses Word2Vec to create word embeddings for text document analysis. Word embeddings transform words into numerical vectors of specified dimensions, allowing for abstract similarity comparison between words. The project not only handles data pre-processing and algorithm implementation (including BFS, Floyd-Warshall, and Word2Vec) but also generates interactive visualizations of the relationships between words. The project follows the setup and execution steps of CS 225, and it employs the Catch2 framework for test cases. This repository was built within the CS 225 development environment.',
    skills: ['C++', 'Word2Vec', 'Data Visualization', 'Text Analysis', 'Catch2', 'CMake', 'Makefile']
  }
  ,
  {
    title: 'MPBiopathDiagram - Web App for Pathway Analysis',
    image: 'media/mp_biopath.png',
    description: 'A Google Summer of Code project with the Ontario Institute for Cancer Research, developing an interactive web app for pathway analysis.',
    longDescription: 'MPBiopathDiagram is a web app developed during the Google Summer of Code 2022 with the Ontario Institute for Cancer Research. It is aimed at providing an interactive interface for pathway analysis. The project involved creating and implementing a wireframe of the MP Biopath web app, implementing graphing features for pathways using both Graphviz and Cytoscape.js, adding features such as file upload, pathway list dropdown, search bar for pathways and nodes, and interactive features for graphed objects. Further improvements include UI enhancements, adding a logo, coloring nodes, and the ability to add, delete or change pathways and tabs. Some aspects are yet to be implemented, including further UI improvements, adding a Pathway Analysis section, and implementing certain features in Graphviz that are currently only available in Cytoscape.',
    skills: ['Web App Development', 'Interactive UI', 'Pathway Analysis', 'Graphviz', 'Cytoscape.js', 'File Upload', 'Search Functionality']
  },
  {
    "title": "TwoHeadsLearning-main - ML/DL Feature Selection for ET Prediction",
    "image": "media/learned_brain_image.png",
    "description": "A comprehensive repository combining ML/DL models with feature selection for robust ET prediction based on EEGEyeNet data.",
    "longDescription": "TwoHeadsLearning-main is an extensive repository that integrates machine learning (ML) and deep learning (DL) models with feature selection to evaluate eye tracking (ET) prediction based on EEG measurements with varying difficulty levels. The project provides the ability to run the 'Two Heads' method and customize different feature selection models and classifiers. It includes standard feature selection pipelines and ML models for benchmarking. The classifiers' implementation can be found in the `StandardML_Models` directory, while feature selection modules are in the `FeatureSelection_Models` directory. The repository offers a comprehensive guide for installation, running the project, configuring feature selection models and classifiers, and how to add custom models to the project.",
    "skills": ["Machine Learning", "Deep Learning", "Feature Selection", "Python", "Anaconda", "Data Preparation", "Benchmarking", "Custom Model Implementation"]
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