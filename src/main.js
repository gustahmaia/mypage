var projects = undefined;

class Project {
    constructor(title) {
        this.title = title;
    }
}

const addProject = function (project) {
    const div = `<div class="p-4 m-4 bg-gray-300 rounded-xl w-full cursor-pointer select-none md:hover:scale-110">
                    ${project.title}
                </div>`;

    if (!projects) {
        projects = "";
    }

    projects = projects + div;

    const sectionProjects = document.getElementById("sectionProjects");
    sectionProjects.innerHTML = projects;
}

const init = function () {
    const sectionProjects = document.getElementById("sectionProjects");
    const sectionInDev = document.getElementById("sectionInDev");

    if (projects) {
        sectionProjects.style.display = "flex";
        sectionInDev.style.display = "none";
    } else {
        sectionProjects.style.display = "none";
        sectionInDev.style.display = "flex";
    }

};


init();