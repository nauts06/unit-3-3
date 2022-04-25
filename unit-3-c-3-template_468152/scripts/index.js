// Store the wallet amount to your local storage with key "amount"


// let d =JSON.parse(localStorage.getItem("amount")) || []
// let addmpney = document.getElementById("wallet")
// addmpney.innerHTML = 

function submit(){
    
    let am = +document.getElementById("amount").value 

    am = am + Number(localStorage.getItem("amount")||0)

    localStorage.setItem("amount",am)

    document.getElementById("wallet").innerHTML = am

    document.getElementById("amount").value = ""
    
}


