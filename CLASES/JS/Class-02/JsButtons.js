function sumar(){
    const num1 = document.getElementById("num1")
    const num2 = document.getElementById("num2")
    const resultado = document.getElementById("resultado")
    // Para cambiar el tipo de dato de un str a int se puede usar el parseINT(valor)
    resultado.value = parseInt(num1.value) + parseInt(num2.value)
    // Tambien se puede hacer de esta manera
    // resultado.value = +num1.value + +num2.value
}

function restar(){
    const num1 = document.getElementById("num1")
    const num2 = document.getElementById("num2")
    const resultado = document.getElementById("resultado")
    resultado.value = parseInt(num1.value) - parseInt(num2.value)
}

function multi(){
    const num1 = document.getElementById("num1")
    const num2 = document.getElementById("num2")
    const resultado = document.getElementById("resultado")
    resultado.value = parseInt(num1.value) * parseInt(num2.value)
}

function div(){
    const num1 = document.getElementById("num1")
    const num2 = document.getElementById("num2")
    const resultado = document.getElementById("resultado")
    resultado.value = parseInt(num1.value) / parseInt(num2.value)
}
function clear(){
    const num1 = document.getElementById("num1")
    const num2 = document.getElementById("num2")
    const resultado = document.getElementById("resultado")
    num1.value = no
    num2.value = null
    resultado.value = null
}