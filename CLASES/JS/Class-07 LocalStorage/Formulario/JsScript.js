// AGREGAR JUGADORES A UN ARREGLO
// GUARDARLO EN LOCALSTORAGE
// MOSTRAR LOS JUGADORES EN UNA LISTA
// VALIDAR CAMPOS VACIOS

const ulList = document.querySelector("#ulList");
const listaJugadores = [];

const btnGuardar = document.querySelector("#btnGuardar");
btnGuardar.addEventListener("click", function(){
    //CREAR JUGADOR Y AGREGARLO A LOCALSTORAGE
    const jugador = document.querySelector("#jugador");
    if (jugador.value !== ""){
        listaJugadores.push(jugador.value);
        localStorage.setItem("jugadores", JSON.stringify(listaJugadores));
    
        //LEER LOCALSTORAGE
        const arrayJugadores = JSON.parse(localStorage.getItem("jugadores"));
        ulList.innerHTML = ""; //ESTO ES PARA RESETEAR LA LISTA Y QUE NO EXISTAN MAS "li" que numero de elementos en el arreglo
        arrayJugadores.forEach(i => {
            const itemList = document.createElement("li");
            itemList.innerText = i;
            ulList.appendChild(itemList);
        });
    }
    else{
       alert("Campo vacio no permitido")
    }
});