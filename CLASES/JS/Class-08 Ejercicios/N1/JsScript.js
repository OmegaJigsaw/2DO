//DECLARACION DE VARIABLES
const inputName = document.querySelector("#nombre")
const mainContainer = document.querySelector("#mainContainer")
const newDIV = document.createElement("div")
const alertLabel = document.createElement("label")
const bntIngresar = document.querySelector("#ingresar")

//CONFIGURACION NATIVA
inputName.value = "Miguel"
alertLabel.innerText = "Debe ingresar un nombre"
alertLabel.style.color = "red"
alertLabel.style.display = "none"

//CONFIGURACION EVENTO
bntIngresar.addEventListener("click", function(){
    if (inputName.value === ""){
        alertLabel.style.display = "block"
        //HACER FOCUS AL INPUT AL ESTAR VACIO
        inputName.focus()
    }
    else{
        alertLabel.style.display = "none"
    }
})

//ADJUNTAR HIJOS
mainContainer.appendChild(newDIV)
newDIV.appendChild(alertLabel)