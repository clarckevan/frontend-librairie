function afficherPanier() {
    let panierContainer = document.querySelector('#panier');
    // panierElement.innerHTML = '';
    if (localStorage.getItem('panier') && JSON.parse(localStorage.getItem('panier')).length){
      let countPanier = JSON.parse(localStorage.getItem('panier'));
      const somme = document.getElementById("somme");
      let sommation = 0;
      countPanier.forEach(a=>{
        sommation+=a.prix
      })
      console.log(sommation)
      somme.textContent = sommation;
    let contentPanier = document.getElementById("panier");
    countPanier.forEach((article) => {
        contentPanier.innerHTML  +=  `
        <div class="panierContent" id="cont">
        <div class="card">
          <p>article</p>
          <img src="${article.imgjuste}" alt="" height="150px" width="150px">
        </div>
        <div class="card">
          <p>resume: ${article.resume}</p>
          <p></p>
        </div>
        <div class="card">
          <p> ${article.date }</p>
        </div>
        <div class="card">
          <p> ${article.prix}</p>
        </div>
        <div class="card">
          <img src="" id="img">
        </div>
        <div class="card">
        <button class="supprimerArticle" id="${article.id}" key="${article.id}">Supprimer</button>

      </div>

        </div>
        `;
    });
    } 
};
afficherPanier()

 const buton = document.querySelectorAll(".supprimerArticle");
 buton.forEach(element =>{
  element.addEventListener("click",event =>{
     if(confirm("voulez vous supprimer l'article ?")){
      const id = event.target.id;
      let panier = JSON.parse(localStorage.panier);
      panier = panier.filter(element => element.id != id);
      localStorage.setItem("panier",JSON.stringify(panier));
      const panierContent = event.target.closest(".panierContent");
      panierContent.remove()
      console.log(panier);

     }
  }); 
 }); 

// btn.


// addEventListener("click",(e)=>{
// let id =e.target.getAttribute("key") 
// let newPanier = panier.filter((item)=>item.id != parseInt(id))
// localStorage.setItem("panier",JSON.stringify(newPanier))
// window.location.reload()

    
// })

    

 
