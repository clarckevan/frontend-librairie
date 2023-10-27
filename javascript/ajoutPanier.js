const button = document.querySelectorAll(".btn-panier")
const countPanier = localStorage.getItem("panier") ? JSON.parse(localStorage.getItem("panier")) : [];
const count = document.querySelector(".count");
count.textContent = countPanier.length
// grace au parent on recupere les enfant les infos de l'enfant
button.forEach(elem => {
  elem.addEventListener("click", (e) => {
    let enfant = e.target;
    let parent = enfant.closest(".juste");
    let imgjuste = parent.querySelector(".imgjuste").src;
    let resume = parent.querySelector(".resume").textContent;
    let dateSortie = parent.querySelector(".date").textContent;
    let prix = parent.querySelector(".prix").textContent;
    const extraitPrix = prix.split(":")[1].split("F")[0] 

    // declare une variable a qui on affecte les infos
    let allId = countPanier[countPanier.length - 1] === undefined ? 1 : countPanier[countPanier.length - 1].id + 1;

    let article = {
      id: allId,
      imgjuste: imgjuste,
      resume: resume,
      date: dateSortie,
      prix: Number(extraitPrix)
    };
    let panier = localStorage.getItem("panier");
    if (panier == null) {
      panier = [];
      panier.push(article); 
    }
    else {
      panier = JSON.parse(panier);
      panier.push(article);
    }
    localStorage.setItem("panier", JSON.stringify(panier));
    window.location.reload();

  });
})
