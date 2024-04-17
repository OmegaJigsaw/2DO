// EJEMPLO
// La plabrea const indica que la varible a crear es constante, es decir que no se puede modificar su valor
// Pero esto tratandose de objetos nosotros podemos modificarle los atributos ya que no estamos haciendo modificaciones a los {} del objeto

const user = {
    name : 'Matias Ruiz',
    username : 'Rmatias@deck.io',
    address : {
        street : 'Calle falsa',
        number : 123
    },
    active: true,

    // Esto es un "METODO" anonimo, ya que no posee nombre, sino que usa el nombre de la propiedad para ser llamado en este caso userRecovery
    userRecovery : function(){
        console.log('In Progress');
    }

}

console.log(user);

// De esta manera uno puedo modificar los valores de las propiedades del objeto
user.name = 'Jose Alma';
user.username = 'Ajose@deck.io';
console.log(user);

// Al igual que lo anterior, tambien se le puede agregar propiedades o metodos nuevos a el objeto de la sgte manera
user.guardar = function(){
    console.log('Guardando');
}
user.guardar();
console.log(user);

// Y teniendo en cuenta que se pueden añadir propiedades, tambien se pueden eliminar

delete user.username;
console.log(user);

// Si se quiere crear un objeto que no pueda ser modificado de ninguna manera se realiza con un Object.freeze
const user1 = Object.freeze({
    id : 200
})
console.log(user1)

// Pese a haber modificado el objeto añadiendole una propiedad este no deberia cambiar
user1.name = 'Aguero'
console.log(user1)

// En caso de querer crear un objeto que pueda recibir modificaciones solamente a las propiedades asignadas se usa un Object.seal
const user2 = Object.seal({
    id : 10, 
    username : 'Gato123'
})

console.log(user2)

user2.gato = function(){
    console.log('ESTO NO DEBERIA SER VISIBLE PORQUE NO SE APLICA AL OBJETO AL SER DE TIPO SEAL')
}

user2.username = '#123'
console.log(user2)