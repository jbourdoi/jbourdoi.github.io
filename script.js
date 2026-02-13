const projects = [
    {
        title: "Webserv",
        description: "Implémentation d’un serveur HTTP en C++ capable de gérer de multiples connexions.",
        link: "https://github.com/pseudo/webserv-42"
    },
    {
        title: "Transcendence",
        description: "Application web avec backend, WebSocket et authentification.",
        link: "https://github.com/pseudo/transcendence_42"
    }
];


const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

const projectsContainer = document.getElementById("projects-container");

function createProjectCard(project) {
    const card = document.createElement("div");
    card.classList.add("project-card");

    const title = document.createElement("h4");
    title.textContent = project.title;

    const description = document.createElement("p");
    description.textContent = project.description;

    const link = document.createElement("a");
    link.href = project.link;
    link.textContent = "Voir sur GitHub";
    link.classList.add("external-link");
    link.target = "_blank";
    link.rel = "noopener noreferrer";

    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(link);

    return card;
}

function clearProjects(container)
{
    if (!container) return;
    container.textContent = "";
}


function renderProjects(container, projectList)
{
    if (!container || projectList?.length ===0) return;
    clearProjects(container)
    const fragment = document.createDocumentFragment();

    projectList.forEach(project => {
        fragment.appendChild(createProjectCard(project));
    });

    projectsContainer.appendChild(fragment);
}

renderProjects(projectsContainer, projects);

const modal = document.getElementById("wip-modal");
const closeBtn = document.getElementById("close-modal");

// Affiche la modale au chargement
window.addEventListener("load", () => {
    modal.classList.remove("hidden");
});

// Fermer avec bouton
closeBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
});

// Fermer si clic en dehors
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.classList.add("hidden");
    }
});

window.addEventListener("load", () => {
    if (!localStorage.getItem("wipSeen")) {
        modal.classList.remove("hidden");
        localStorage.setItem("wipSeen", "true");
    }
});
