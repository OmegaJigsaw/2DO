// Sintaxis funcion

function Saludo() {
    console.log("Hola!!!")
};

Saludo();

function Sumar(){
    return 10+10 //Se usa return para devolver datos
}

// Se puede hacer de esta manera declarando una variable
let resultado = Sumar()
console.log(resultado)

// O de esta manera en la que no declaramos
console.log(Sumar())

//Funciones con argumentos
function SumarConArgumentos(numero1, numero2){
    return numero1 + numero2
}

console.log(SumarConArgumentos(5,35))
