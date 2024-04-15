//Dark Mode use white color for body
const greyBack = "#222";
const fontRed = "#C97878";
const projNorm = "#1f2f34";
const projHov = "#254955";



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

function colorModeSwitch(event) {
    const html = document.querySelector("html");
    if (!event.target.checked) {
        html.classList.remove("lightMode")
    } else {
        html.classList.add("lightMode")

    }
}