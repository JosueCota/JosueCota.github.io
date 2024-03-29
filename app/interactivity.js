
function showProjectSkills(event){

    const skillDiv = document.getElementById("project-skills1");
    if (event.target.innerHTML=== "Show Skills Used +"){
        event.target.innerHTML = "Hide Skills -";
        event.target.style.fontSize = ".75rem"
        event.target.style.marginBottom = "1rem"
        
        skillDiv.style.display = "flex";

    } else {
        event.target.innerHTML = "Show Skills Used +";
        event.target.style.fontSize = "1rem";
        event.target.style.marginBottom = ".25rem"

        
        skillDiv.style.display = "none";
    }


}