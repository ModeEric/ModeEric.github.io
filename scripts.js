// Add your JavaScript code here
const skillsSubsections = {
    'software-development': `
      <h3>Software Development</h3>
      <ul>
        <li>Python</li>
        <li>Java</li>
        <li>C++</li>
        <li>Git</li>
      </ul>
    `,
    'web-scraping': `
      <h3>Web Scraping</h3>
      <ul>
        <li>BeautifulSoup</li>
        <li>Scrapy</li>
        <li>Selenium</li>
      </ul>
    `,
    'data-analysis': `
      <h3>Data Analysis</h3>
      <ul>
        <li>Pandas</li>
        <li>NumPy</li>
        <li>Matplotlib</li>
        <li>Seaborn</li>
      </ul>
    `,
    'ai': `
      <h3>AI</h3>
      <ul>
        <li>TensorFlow</li>
        <li>PyTorch</li>
        <li>Scikit-learn</li>
        <li>Keras</li>
      </ul>
    `,
  };
  
function displaySubsection(subsection) {
    const previousSubsection = document.querySelector('.skills-subsection');
    if (previousSubsection) {
      previousSubsection.remove();
    }
  
    const listItem = document.getElementById(subsection + '-listitem');
    const skillsSubsection = document.createElement('div');
    skillsSubsection.classList.add('skills-subsection');
    skillsSubsection.innerHTML = skillsSubsections[subsection];
    listItem.appendChild(skillsSubsection);
  }
  document.addEventListener("DOMContentLoaded", function() {
    AOS.init();
  });
  
  