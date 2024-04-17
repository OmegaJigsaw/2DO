/**
 * Crear una funcion que elija el numero menor y el mayor de un arreglo
 */

// PARA HACER ESTA FUNCION BASADA EN COMPARACIONES DEBEMOS ASIGNAR PRIMERO VALORES A LAS VARIABLES QUE BUSCAMOS
function MayorMenor(arreglo){
    let mayor = arreglo[0]; // A AMBAS VARIABLES LE ASIGNAMOS EL PRIMER VALOR DEL ARREGLO
    let menor = arreglo[0];
    for (n of arreglo){ //HACEMOS UN FOR OF AGREGANDO UNA VARIABLE QUE SERA LA QUE TOME EL VALOR DEL NUMERO DE ITERACION
        menor = menor < n ? menor : n; // LE CAMBIAMOS EL VALOR A LAS VARIABLES INICIALES CON UN OPERADOR TERNARIO
        mayor = mayor > n ? mayor : n;      // EN EL CASO DE ESTA LINEA PREGUNTAMOS SI LA VARIABLE "MAYOR" ES MAYOR AL VALOR QUE TIENE EL NUMERO DE ITERACION EN EL ARREGLO 
    }                                       // DE SER ASI EL PRIMER VALOR PUESTO EN EL OPERADOR TERNARIO SERA EL QUE REMPLAZA AL VALOR INICIAL 
    return [menor, mayor]                   // DE LO CONTRARIO LA VARIABLE TENDRA EL VALOR DEL ARREGLO EN ESA ITERACION HASTA QUE NO HAYA UN VALOR MAYOR A ESE AL FINALIZAR EL CICLO
}                                   

numero = [21, 10 , 2 , 0, -6, -15]
console.log(MayorMenor(numero))