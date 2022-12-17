const projects = [];

const Project = { title: "" };

const addProject = function (project) {
    const div = `<div class="p-4 m-4 bg-gray-300 rounded-xl w-full cursor-pointer select-none">
                    ${project.title}
                </div>`;

    projects.push(div);
}

const init = function () {

    const sectionProjects = document.getElementById("sectionProjects");
    const sectionInDev = document.getElementById("sectionInDev");

    if (projects && projects.length > 0) {
        sectionProjects.style.display = "flex";
        sectionInDev.style.display = "none";
    } else {
        sectionProjects.style.display = "none";
        sectionInDev.style.display = "flex";
    }

};


init();