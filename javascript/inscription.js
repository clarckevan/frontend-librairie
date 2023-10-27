let formulaire = document.querySelector('form')

formulaire.addEventListener('submit',(e)=>{
  console.log("bonjour");
  e.preventDefault()
  let nom = e.target.firstname
  let email = e.target.email
  let password = e.target.password

  const formData = new FormData()

  formData.append("nom", nom.value)
  formData.append("email", email.value)
  formData.append("password", password.value)

  fetch('https://librairie-ce-book.onrender.com/api/user',{
    method: "POST",
    body: new URLSearchParams(formData)
  }).then(res => res.json())
  .then(succes =>{
    if(succes.statut){
      alert("inscrit")
      window.location.href='./connexion.html'
    }
  })
})