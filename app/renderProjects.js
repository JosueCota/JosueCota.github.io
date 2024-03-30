fetch("./resources/data/projects.json")
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(projects => renderProjects(projects))
    .catch(error => console.error('Error fetching questions:', error));


const renderProjects = (projects) => {
    for (const project of projects) {
        console.log(project);
        renderProject(project)
    }
}

const renderProject = (project) => {
    const num = project["project-num"];

    const projectCont = document.createElement("div");projectCont.classList.add("project-card");
    projectCont.id = `project${num}`;

    const topDiv = document.createElement("div");
    topDiv.classList.add("project-norm");
    
    topDiv.innerHTML = `<img
    class="project-img"
    src="${project["project-img"]}"
    />
    <div class="project-right">
      <a href="${project["project-link"]}" class="project-link" target="_blank"><h3 class="project-header project-name">${project["project-name"]}</h3></a>
      <p class="project-description">
        ${project["project-desc"]}
      </p>
    </div>
    <button
    class="project-show-skills"
    id="skills-btn${num}"
    onclick="showProjectSkills(event)"
    >Show Skills Used +</button>`

    projectCont.appendChild(topDiv);

    const skillDiv = document.createElement("div")
    skillDiv.classList.add(`project-skills`);
    skillDiv.id = `project-skills${num}`
    skillDiv.style.display = "none";

    addSkillDiv(skillDiv, project["project-skills"].languages, "Languages:")
    addSkillDiv(skillDiv, project["project-skills"].tech, "Technologies")
    addSkillDiv(skillDiv, project["project-skills"].general, "General:")
    //placeholder


    projectCont.appendChild(skillDiv);
    document.getElementById("projects-section").appendChild(projectCont);
}

const addSkillDiv = (skillDiv, projectList, header) => {
    const projectLang = document.createElement("div");
    projectLang.classList.add("project-skill");

    const projHeader = document.createElement("h3");
    projHeader.classList.add("project-header");
    projHeader.innerHTML = header;
    projectLang.appendChild(projHeader);

    const skillList = document.createElement("ul");
    skillList.className = "project-list";

    for (let i = 0; i < projectList.length; i++) {
        const listItem = document.createElement("li");
        listItem.innerHTML = projectList[i];
        listItem.style.backgroundColor = randomColor(i);
        skillList.appendChild(listItem);
    }

    projectLang.appendChild(skillList);

    skillDiv.appendChild(projectLang);
}

const randomColor = (i) => {
    const check = i%5;
    console.log(check)
    switch (check) {
        case 0:
            return "#e378f4"
        case 1:
            return "#9ddc33"
        case 2: 
            return "#37bcf2"
        case 3: 
            return "#f5687d"
        default:
            return "#a4e239"
    }

}