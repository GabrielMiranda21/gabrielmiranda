let desktopContainer = document.querySelector(".desktop-container");
let modo = desktopContainer.querySelector(".modo");
let claroEscuro = modo.querySelector(".claroEscuro");
let logo = document.querySelector(".logo");

let dark = claroEscuro.querySelector("#dark");
let light = claroEscuro.querySelector("#light");

// Elementos para troca de cor

let header = document.querySelector('header');
let body = document.querySelector('body');
let p = document.querySelectorAll('p');

let a = document.getElementById('navegacao');


dark.classList.add('hidden');

light.addEventListener('click', () => {
    light.classList.add('hidden');
    dark.classList.remove('hidden');

    body.style.backgroundColor = "#ffffff";
    header.style.backgroundColor = "#CFCFCF";
    p.forEach(paragraph => { paragraph.style.color = "#c0c0c0";});
    a.style.color = "#F5F5DC";
});

dark.addEventListener('click', () => {
    dark.classList.add('hidden');
    light.classList.remove('hidden');

    body.style.backgroundColor = "#121212";
    header.style.backgroundColor = "#000000";
    a.style.color = "#b3b3b3";
});
