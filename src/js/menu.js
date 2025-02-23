let expand = [...document.querySelectorAll(".expand")];
let cardProcess = [...document.querySelectorAll(".card-process")];

expand.map((e, index) => {
  e.addEventListener("click", () => {
    // Fechar todas as outras respostas
    cardProcess.forEach((cad, i) => {
      if (i !== index) {
        cad.classList.add("close");
      }
    });

    // Abrir ou fechar a resposta associada à pergunta clicada
    let cad = cardProcess[index];
    cad.classList.toggle("close");
  });
});

/* menu */
const menu = document.getElementById("menu");
const backDrop = document.querySelector(".backDrop");

function toggleMenu() {
  menu.classList.toggle("active");
  backDrop.classList.toggle("active");
}
document.getElementById("bars").addEventListener("click", toggleMenu);
document.getElementById("close").addEventListener("click", toggleMenu);

backDrop.addEventListener("click", toggleMenu);

/* MENU COLOR*/

window.addEventListener("scroll", () => {
  let header = document.querySelector(".header-content");
  header.classList.toggle("scroll-color", window.scrollY > 0);
});
