/*
let desktopContainer = document.querySelector(".desktop-container");
let modo = desktopContainer.querySelector(".modo");
let claroEscuro = modo.querySelector(".claroEscuro");
let logo = document.querySelector(".logo");

let dark = claroEscuro.querySelector("#dark");
let light = claroEscuro.querySelector("#light");

// Elementos para troca de cor

let header = document.querySelector('header');
let body = document.querySelector('body');
let sectionProjetoContainer = document.querySelector(".projetos-container");
let sectionIntroducao = document.querySelector(".introducao-container");
let footer = document.querySelector("footer");
let divCurriculo = sectionIntroducao.querySelector(".curriculo");
let p = document.querySelectorAll('p');

let a = document.getElementById('navegacao');


dark.classList.add('hidden');

light.addEventListener('click', () => {
    light.classList.add('hidden');
    dark.classList.remove('hidden');

    header.style.backgroundColor = "#ffffff";
    body.style.backgroundColor = "#f5f5f5";
    divCurriculo.style.border = "1px solid #000000;"
    p.forEach(paragraph => { paragraph.style.color = "#4a4a4a";});
    a.style.color = "#F5F5DC";
    sectionProjetoContainer.style.backgroundColor = "#eaeaea";
    footer.style.backgroundColor = "#ffffff";
});

dark.addEventListener('click', () => {
    dark.classList.add('hidden');
    light.classList.remove('hidden');

    header.style.backgroundColor = "#000000";
    body.style.backgroundColor = "#121212";
    divCurriculo.style.border = "1px solid #ffffff;"
    p.forEach(paragraph => { paragraph.style.color = "#b3b3b3";});
    a.style.color = "#b3b3b3";
    sectionProjetoContainer.style.backgroundColor = "#1A1818";
    footer.style.backgroundColor = "#000000";

});
*/