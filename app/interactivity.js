alert("Under Construction...")

function showProjectSkills(event){
    const skillDiv = event.target.parentElement;
    console.log(skillDiv)
    if (event.target.innerHTML=== "+"){
        event.target.innerHTML = "-";
        event.target.style.fontSize = "1.15rem"
    } else {
        event.target.innerHTML = "+"
        event.target.style.fontSize = "1rem"
    }
}