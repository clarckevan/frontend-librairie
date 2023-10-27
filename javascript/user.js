let formulaire = document.querySelector("form")
formulaire.addEventListener("submit", event => {
    console.log('kjk:!');
    event.preventDefault()

    let email = event.target.email
    let password = event.target.password

    const formData = new FormData()

    formData.append("email", email.value)
    formData.append("password", password.value)

    fetch('https://librairie-ce-book.onrender.com/api/user/login',{
        method:"POST",
        body: new URLSearchParams(formData)
    })
    .then(res => res.json())
    .then(succes => {
        console.log(succes)

        if(succes.statut == true){
            alert("bien connecter")

            window.location.href = "./index.html"
        }
        console.log(succes);
    })
})