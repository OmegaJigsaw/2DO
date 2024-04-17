/**
 * PARA LA CREACION DE OBJETOS A LO LARGO DEL CODIGO
 * CON EL FIN DE EVITAR LA REPETICION DE LOS MISMOS PARAMETROS
 * ESTOS SE CREAN MEDIANTE FUNCIONES QUE RETORNE LOS DATOS DEL OBJETO,
 * YA QUE NO EXISTE LA PALABRA CLASS DE PYTHON AQUI
 */

function addUser (name, username){
    return {
        name,
        username,
        active: true,
        userRecovery : function(){
            console.log('In Progress');
        }
    
    }
};

user1 = addUser('Gonzalo', 'Gato123');
user2 = addUser('Fabian', 'Usuario2');
console.log(user1, user2)

/**
 * SI BIEN NO EXISTE LA PALABRA CLASS PARA DEFINIR OBJETOS
 * ESTOS PUEDEN UTILIZAR EN SU "CONSTRUCTOR" ALGO SIMILAR AL
 * "SELF" DE PYTHON QUE EN JS PASA A SER "this"
 */

function Usuario(){
    this.id = 1;
    this.recuperarClave = function(){
        console.log('Recuperando')
    }
}

// A LA HORA DE CREAR OBJETOS DE ESTA MANERA NOSOTROS LO QUE HAREMOS NO ES SIMPLEMENTE IGUALAR UNA VARIABLE AL LLAMADO DE LA FUNCION
// SINO QUE DEBEMOS USAR LA PALABRA "NEW" ANTES DE DICHO LLAMADO

let newUser = new Usuario();
console.log(newUser)