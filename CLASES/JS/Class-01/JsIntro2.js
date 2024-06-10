// Para acceder a los elementos de html (input, forms, etc)
// Se hace con las propiedades de este (id, class, etc)
function Saludo(){
    const nombre = document.getElementById("Nombre")
    // Para sacar un elemento dentro de la variable que almacena el input
    // Se hace como si se estuviera recorriendo un diccionario NombreVariable["ID/Clase/Etc"]
    // alert(`Hola ${nombre["value"]}`)
    // O se puede hacer con punto (.)
    alert(`Hola ${nombre.value}`)
}
function Click(){
    const nombre = document.getElementById("Nombre")
    const apellido = document.getElementById("Apellido")
    // Para obtener datos del html, tambien se puede hacer con document.querySelector donde se colocan los tag de css ((#), (.), etc)
    // Para el checbox combiene usar este (desconosco porque)
    const beca = document.querySelector("#beca")
    if(beca.checked === true){
        alert(`${nombre.value} ${apellido.value} su beca esta aprovada`);
    }
    else{
        alert(`${nombre.value} ${apellido.value} su beca NO esta aprovada`)
    }
}