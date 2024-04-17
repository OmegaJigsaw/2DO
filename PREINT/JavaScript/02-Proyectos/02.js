/**
 * CREAR FUNCION QUE RECIBIENDO UN ARREGLO Y UN INDICE RETRONE EL VALOR DE ESTE DENTRO DEL ARREGLO
 * VALIDAR LA EXISTENCIA DEL INDICE, ES DECIR QUE ESTE NO SEA MENOR A 0 NI MAYOR AL LARGO DEL ARREGLO
 */

function Consulta(arreglo, indx){
    if (indx >= 0 && indx <= arreglo.length){
        return arreglo[indx];
    }
    else {
        return "Indice no valido";
    }
}

let nombres = ["Jean", "Pedro", "Matilda", "Javier"];
let duda = Consulta(nombres, 2);
console.log(duda);