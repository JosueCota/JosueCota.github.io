fetch("./resources/data/projects.json")
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(projects => renderProjects(projects))
    .catch(error => console.error('Error fetching questions:', error));

// Render all projects based on amount in projects.json
const renderProjects = (projects) => {
    for (const project of projects) {
        renderProject(project)
    }
}

//Create project div
const renderProject = (project) => {
    const num = project["project-num"];

    const projectCont = document.createElement("div");projectCont.classList.add("project-card", "project-color");
    projectCont.id = `project${num}`;

    const topDiv = document.createElement("div");
    topDiv.classList.add("project-norm");
    
    if (project["project-img"]) {
        topDiv.innerHTML = `<img
        class="project-img"
        src="${project["project-img"]}"
        />
        <div class="project-right">
          <a href="${project["project-link"]}" class="project-gitlink" target="_blank"><h3 class="project-header project-name">${project["project-name"]}</h3></a>
          <p class="project-description">
            ${project["project-desc"]}
          </p>
        </div>`
    } else {
        topDiv.innerHTML = `<div class="project-full">
          <a href="${project["project-link"]}" class="project-gitlink" target="_blank"><h3 class="project-header project-name">${project["project-name"]}</h3></a>
          <p class="project-description">
            ${project["project-desc"]}
          </p>
        </div>`
    }

    projectCont.appendChild(topDiv);
    
    const skillsButton = document.createElement("button");
    skillsButton.className = "project-btn"
    skillsButton.id=`skills-btn${num}`;
    skillsButton.innerHTML = "+";
    skillsButton.onclick = showProjectSkills;
    projectCont.appendChild(skillsButton);

    const skillDiv = document.createElement("div")
    skillDiv.classList.add(`project-skills-cont`);
    skillDiv.id = `project-skills${num}`
    skillDiv.style.display = "none";

    addSkillDiv(skillDiv, project["project-skills"])
    //placeholder

    projectCont.appendChild(skillDiv);
    document.getElementById("projects-section").appendChild(projectCont);
}

//Add Skills to list
const addSkillDiv = (skillDiv, projectList) => {
    const projectLang = document.createElement("div");
    projectLang.classList.add("project-skills");

    const skillList = document.createElement("ul");
    skillList.className = "project-list";

    for (let i = 0; i < projectList.length; i++) {
        const listItem = document.createElement("li");
        listItem.innerHTML = projectList[i];
        listItem.style.backgroundColor = colorize(i);
        skillList.appendChild(listItem);
    }

    projectLang.appendChild(skillList);
    skillDiv.appendChild(projectLang);
}

//Add color to div (not random, based on order)
const colorize = (i) => {
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