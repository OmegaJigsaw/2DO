let i = 0;

/** WHILE
 * ES COMO EL DE PYTHON
 */

while (i < 2) {
    if (i % 2 == 0) {
        // LAS COMILLAS INVERTIDAS (``) se usa ALTGR Y SU SIMBOLO EN EL TECLADO 2 VECES
        console.log(`(WHILE) Numero par: ${i}`)
    } 
    i++;   
}  
console.log("END WHILE")

/** DO WHILE
 * ESTE FUNCIONA DISTINTO
 * LO QUE HACE ES REALIZAR LA CONDICION PLANTEADA DENTRO DEL "DO" PRIMERO
 * Y LUEGO SE PREGUNTA EN EL "WHILE" SI LA CONDICION DE ARRIBA PERMITE EL 
 * "BREAK" DEL CICLO WHILE, DE NO SER ASI SE REALIZA OTRA ITERACION
 */
let a = 2
do {
    if(a % 2 == 0){
        console.log(`(DO WHILE) Numero par: ${a}`)
    }
    a++
} while (a < 2);
