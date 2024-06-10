const carreras = ["Informatica", "Enfermeria", "Turismo", "Gastronomia"]
// Con las listas pasa lo mismo que con los objetos en el localStorage
localStorage.setItem("listaCarreras", JSON.stringify(carreras))

//Colocar en una lista desordenada

//Definir el arreglo
const arrayCarreras = JSON.parse(localStorage.getItem("listaCarreras"))

//Crear el padre de los elementos
const ulTag = document.querySelector("#ulCarrera")

//forEach para recorrer el arreglo y insertar los datos
arrayCarreras.forEach(i => {
    const listItem = document.createElement("li")
    listItem.innerText = i
    ulTag.appendChild(listItem)
})
