let nombre = "null";
let clase = null;
let tier = null;

// Creacion de objeto
let objeto = {
    nombre: "Franco",
    clase: "Mago",
    tier: "A"
};
console.log(objeto.clase);

// Modificar atributo
objeto.clase = "Clerigo";
console.log(objeto.clase)

// Borrar atributos
delete objeto.tier;
console.log(objeto)