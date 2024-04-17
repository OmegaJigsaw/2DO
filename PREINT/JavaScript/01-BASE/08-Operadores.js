/** 
 * Los operadores Aritmeticos son los de siempre
 * Suma (+)
 * Resta (-)
 * Multi (*)
 * Div (/)
 * Modulo / Resto de div (%) 
 * Potencias (**)
 * Comparacion (<, <=, >, >=)
 * 
 * Comparacion de desigualdad (!=)
 * 
 * Comparacion de desigualdad de valor y tipo de dato (!==)
 *      Compara lo dicho antes si el valor o el tipo de dato es distinto
 *      entoces da true
 * 
 * Comparacion de igualdad (==)
 *      Compara el valor del dato
 * 
 * Comparacion de valor y dato (===) 
 *      Esto compara si el valor es igual al otro y 
 *      ademas compara si el tipo de dato es igual
 *      si uno de los 2 no es igual al otro se toma como false
 * 
 * Comparacion
 * */ 

let n1 = 7;
let n2 = 6;

let n3 = "7";
let n4 = "6";

// Comparaciones
console.log(n1 == n2); // Deberia dar false
console.log(n1 != n2); // Deberia dar true
console.log(n1 == n3); // Deberia dar true
console.log(n1 === n3); // Deberia dar false
console.log(n2 !== n4); // Deberia dar true

// Operador de incremento en un numero
console.log(n1);
console.log(++n1);

// Operador de Disminucion en un numero
console.log(n2);
console.log(--n2);

// Para aumentar o disminuir el valor en mas de 1 se puede hacer asi
// En este punto por las op anteriores n1 = 8 y n2 = 5
let x = 10;
n1 = n1 + x;
console.log(n1);

n2 = n2 - x
console.log(n2);

// Operador logico
// Estos cambian respecto a python

// OPERADOR AND = &&
// PARA ASIGNAR EL VALOR TRUE AMBOS VALORES A CONSULTAR DEBEN SER TRUE
console.log(true && false); 
console.log(true && true);

// OPERADOR OR = ||
// PARA QUE DE FALSE AMBOS DEBEN SER FALSOS
console.log(true || false); //true
console.log(false || false); //false

// OPERADOR NOT = !(variable)
let mayor = true;
console.log(mayor)
console.log(!mayor)