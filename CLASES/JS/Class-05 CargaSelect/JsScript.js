const datos = ["Informatica", "Enfermeria", "Administracion", "Hoteleria"]

// LLENAR EL SELECT CON CARRERAS CON TANTOS OPTIONS COMO ELEMENTOS TENGA LA LISTA DATOS

const carSelect = document.querySelector("#carSelect")

// datos es un arreglo, asi que se puede iterar con un forEach
datos.forEach(i => {
    // para cargar el select primero creamos las option que van dentro de este con los comandos del document
    const option = document.createElement("option")
    option.innerText = i // luego para visualizarlas en el select le cambiamos el innerText a ese option creado con el valor guardado en i en esa iteracion
    carSelect.appendChild(option) // al final asignamos como hijo la option configurada a la etiqueta select que la contiene y el forEach sigue hasta acabarse el arreglo
})