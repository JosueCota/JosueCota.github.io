
function showProjectSkills(event){
    const skillDiv = document.getElementById(`project-skills${event.target.id.slice(-1)}`);

    if (event.target.innerHTML=== "+"){
        event.target.innerHTML = "-";
        event.target.style.fontSize = ".75rem"
        event.target.style.marginBottom = "1rem"

        skillDiv.style.display = "flex";

    } else {
        event.target.innerHTML = "+";
        event.target.style.fontSize = "1rem";
        event.target.style.marginBottom = ".25rem"

        skillDiv.style.display = "none";
    }


}