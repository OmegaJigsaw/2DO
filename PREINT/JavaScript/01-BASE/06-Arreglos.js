let animales = ["Cerdo", "Caballo"];
console.log(animales[0]) // Funciona igual a python 
console.log(animales[1]) 

// Agregar elementos
// animales[2] = "Jirafa"
animales[5] = "Jirafa"
console.log(animales)

// No agregar indices lejanos debido a que deja los espacios entre 
// datos como vacios y suman al total del arreglo
// Es decir en el caso anterior al darle el incice 5 nuestra lista va a tener 6 elementos
// De los cuales 3 estan vacios ya que solo estan definidos el 0, 1 y 5

console.log(animales.length)
