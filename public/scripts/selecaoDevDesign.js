let sectionProjeto = document.querySelector(".projetos-container");
let buttonWeb = sectionProjeto.querySelector("#web");
let buttonDesign = sectionProjeto.querySelector("#design");

let webProjetos = sectionProjeto.querySelector("#webProjetos");
let designProjetos = sectionProjeto.querySelector("#designProjetos");

buttonWeb.style.backgroundColor = "#463333";
buttonDesign.style.backgroundColor = "#1A1818";

buttonWeb.addEventListener("click", () => {
    if (buttonWeb.style.backgroundColor === "rgb(26, 24, 24)") { 
        buttonWeb.style.backgroundColor = "rgb(70, 51, 51)";
        buttonDesign.style.backgroundColor = "rgb(26, 24, 24)";
        webProjetos.style.display = "flex";
        designProjetos.style.display = "none";
    }
});

buttonDesign.addEventListener("click", () => {
    if (buttonDesign.style.backgroundColor === "rgb(26, 24, 24)") {
        buttonWeb.style.backgroundColor = "rgb(26, 24, 24)";
        buttonDesign.style.backgroundColor = "rgb(70, 51, 51)";
        webProjetos.style.display = "none";
        designProjetos.style.display = "flex";
    }
});