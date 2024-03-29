getProjects()

async function getProjects(){
    const resp =  await fetch("./resources/data/projects.json")
    const projects = await resp.json();
    
    renderProjects(projects);
}

const renderProjects = (projects) => {
    console.log(projects);
}