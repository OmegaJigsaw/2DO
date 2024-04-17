let accion = 'Buscar';

/** SWITCH
 * Las cajas de switch funcionan como si usaramos if, else if, else
 * una de las diferencias es que aqui se debe usar break al final de cada case
 */

switch (accion){
    case 'Buscar':
        console.log("BUSCANDO EN EL SISTEMA");
        break;
    case 'Almacenar':
        console.log("ALMACENANDO INFORMACION");
        break;
    default:
        console.log("ACCION NO VALIDA")
}