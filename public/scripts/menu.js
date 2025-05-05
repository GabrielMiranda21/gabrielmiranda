let menuVertical = document.getElementById("menuVertical");
let headerMobile = document.querySelector(".container");
let headerDesktop = document.querySelector(".desktop-container");


let menuHamburguer = document.querySelector("#menu");
let ul = document.querySelector("ul");

function checkScreenWidth() {
    if (window.innerWidth > 790) {
        headerDesktop.style.display = "flex";
        headerMobile.style.display = "none";
        menuVertical.style.display = "none";
    } else {
        headerDesktop.style.display = "none";
        headerMobile.style.display = "flex";
        menuVertical.style.display = "block";
    }
}

checkScreenWidth();

// Adicionar evento de clique ao menu vertical
menuVertical.addEventListener('click', () => { 
    if (headerMobile.style.display === "block" || getComputedStyle(headerMobile).display === "block") { 
        menuHamburguer.style.display = "none"; 
        menuVertical.style.display = "block"
    } else { 
        menuHamburguer.style.display = "block"; 
        menuVertical.style.display = "none";
    } 
});

// Fechar o menu mobile se clicar fora dele
document.addEventListener('click', (e) => {
    if (getComputedStyle(menuHamburguer).display === "block") {
        if (!menuHamburguer.contains(e.target) && !menuVertical.contains(e.target)) {
            menuHamburguer.style.display = "none";
            menuVertical.style.display = "block";
        }
    }
});

// Adicionar evento de redimensionamento da janela
window.addEventListener('resize', checkScreenWidth);
