const btnSumar = document.querySelector("#Suma")
const btnRestar = document.querySelector("#Resta")
const btnMulti = document.querySelector("#Multi")
const btnDiv = document.querySelector("#Div")

// addEventListener() es una funcion que espera 2 parametros
// el primero es para colocar el evento que espera en modo texto
// el segundo lo que ocurre despues del evento
btnSumar.addEventListener("click", function(){operaciones(1)})
btnRestar.addEventListener("click", function(){operaciones(2)})
btnMulti.addEventListener("click", function(){operaciones(3)})
btnDiv.addEventListener("click", function(){operaciones(4)})

function operaciones(op){
    const num1 = parseInt(document.getElementById("num1").value)
    const num2 = parseInt(document.getElementById("num2").value)
    const resultado = document.getElementById("resultado")
    switch(op){
        case 1:{
            resultado.value = num1 + num2;
            break;
        }
        case 2:{
            resultado.value = num1 - num2;
            break;
        }
        case 3:{
            resultado.value = num1 * num2;
            break;
        }
        case 4:{
            resultado.value = num1 / num2;
            break;
        }
        
    }
}
