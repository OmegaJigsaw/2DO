// Para guardar datos en localStorage se llama a la funcion setItem
// Esta espera 2 parametros ambos en formato string, el primero es la key y el segundo un valor dinamico (str, int, object, array, etc)

localStorage.setItem("Nombre","Gabriel")
localStorage.setItem("Apellido", "Achondo")

//localStorage.getItem("key") se usa para obtener el valor de la clave y guardarlo en una variable
const Nombre = localStorage.getItem("Nombre")
const Apellido = localStorage.getItem("Apellido")

//Colocar en label
const lblName = document.querySelector("#nombreCompleto")
console.log(lblName)
lblName.innerText = `${Nombre} ${Apellido}`