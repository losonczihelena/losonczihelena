document.addEventListener('DOMContentLoaded', () => {
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
            const user = data.results[0];
            document.getElementById('email').textContent = user.email;

            const projectList = document.getElementById('project-list');
            const projects = [
                { title: "Weboldal 1", description: "Leírás az első projektről." },
                { title: "Weboldal 2", description: "Leírás a második projektről." },
                { title: "Weboldal 3", description: "Leírás a harmadik projektről." }
            ];

            projects.forEach(project => {
                const projectItem = document.createElement('div');
                projectItem.innerHTML = `
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                `;
                projectList.appendChild(projectItem);
            });
        })
        .catch(error => console.error('Hiba a felhasználó lekérésekor:', error));
});

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});
