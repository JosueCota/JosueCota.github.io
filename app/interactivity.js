
function showProjectSkills(event){
    const skillDiv = document.getElementById(`project-skills${event.target.id.slice(-1)}`);

    if (event.target.innerHTML=== ""){
        console.log("clicked")
        event.target.style.backgroundImage = "url(resources/imgs/minus-sign.png)";
        skillDiv.style.display = "flex";
        event.target.innerHTML = " "

    } else if (event.target.innerHTML === " "){
        event.target.innerHTML = "";
        event.target.style.backgroundImage = "url(resources/imgs/plus-sign.png)";
        skillDiv.style.display = "none";
    }


}