const projects = [
    { title: 'Dashboard with Power BI', link: 'https://github.com/your-project-link' },
    { title: 'Python Credit Scorecard', link: 'https://github.com/your-project-link' },
    // Add more projects here
];

const projectList = document.querySelector('.project-list');

projects.forEach(project => {
    const projectItem = document.createElement('div');
    projectItem.innerHTML = `<a href="${project.link}" target="_blank">${project.title}</a>`;
    projectList.appendChild(projectItem);
});