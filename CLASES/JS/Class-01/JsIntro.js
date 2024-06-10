// Generar alertas emergentes es con alert("{Texto de la alerta}")
// alert("Texto de la alerta")
// Generar texto en consola
//console.log("Texto en consola")

//Para las funciones se escribe function nombreFunc(valores de entrada si recibe){}
//Variables
function Varibles() {
    // Varibles con var
    var nombre = "Francisca"
    // Para concatenar texto con variables se usan comillas invertidas (altgr + })
    // y se coloca el signo ${aqui_variable}
    console.log(`Nombre: ${nombre}`)

    //Constantes
    //Estas "variables" no pueden cambiar sus datos una vez establecido
    const apellido = "Ojeda"
    console.log(`Nombre: ${nombre} | Apellido ${apellido}`)
}

//Condiciones
function Condiciones() {
    const edad = 15
    //En JS las condiciones van en () y el inicio-cierre del if se hace con llaves
    if (edad >= 18) {
        console.log("Mayor de edad")
    }
    else {
        console.log("Menor de edad")
    }
}

//Switch
function F_Switch(){
    let total = 0;
    let num1 = 10;
    let num2 = 2;
    let op = "Resta";
    // Las cajas switch remplazan el if | else if | else
    // Se declaran asi y deben de finalizar con un break
    // En el () del switch va la variable que se va a comparar en cada caso (case)
    // Y para indicar donde comienza el caso se usa :
    switch (op){
        // Acciones en caso de ser Multiplicacion
        case "Multiplicacion":
            total = num1 * num2;
            alert(total);
            break;
        // Acciones en caso de ser Suma
        case "Suma":
            total = num1 + num2;
            alert(total);
            break;
        // Acciones en caso de ser Resta
        case "Resta":
            total = num1 - num2;
            alert(total);
            break;
        // Acciones en caso de ser Division
        case "Division":
            total = num1 / num2;
            alert(total);
            break;
        // En caso de que no se cumpla ningun caso se usa default
        default:
            alert("Error")
            break;
    }
}
//Llamado de funcion
// F_Switch()

//Ciclos for
function cicloFor(){
    // Se usan 3 argunmentos
    // El primero indica la variable que recorre el for, es decir se debe declarar una variable
    // El segundo es la condicion que debe cumplirse para que el ciclo continue
    // El tercero es el incremento de la variable
    // Cada uno se separa por ;
    for(let x = 0; x < 5; x++){
        console.log(x)
    }
}
cicloFor()