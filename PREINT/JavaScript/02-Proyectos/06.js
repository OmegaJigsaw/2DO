/**
 * Crear una funcion que retorne un arreglo que esta incluido en otro
 */

let objectList = [{
        id : 1,
        name : 'Juan'
    },
    {
        id : 2,
        name : 'Daniel'
    },
    {
        id : 3,
        name : 'Felipe'
    },
    {
        id : 4, 
        name : 'Sergio'
    }]


function NArreglo(arreglo){
    let arregloNuevo = [];
    let idx = 0;
    for (let elementoArreglo of arreglo){
        arregloNuevo.push([idx, elementoArreglo]);
        idx++
    }
    return arregloNuevo;
}

Resultado = NArreglo(objectList)
console.log(Resultado)