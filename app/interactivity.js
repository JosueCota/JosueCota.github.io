
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

const upBtn = document.getElementById("goUp");

window.addEventListener("scroll", function(){ 
    console.log(this.window.scrollY);
    if (window.scrollY >= 200) {
        upBtn.style.display = "block";
    } else {
        upBtn.style.display = "none";
    }
});