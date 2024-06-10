const nombre = document.querySelector("#nombre")
const apellido = document.querySelector("#apellido")
const cityName = document.querySelector("#cityName")
const btnGuardar = document.querySelector("#btnG")

nombre.addEventListener("blur", function(){
    if (nombre.value === ""){
        document.querySelector("#alertaNombre").style.display ="block";
    }
    else{
        document.querySelector("#alertaNombre").style.display = "none";
    }
})

apellido.addEventListener("blur", function(){
    if (apellido.value === ""){
        document.querySelector("#alertaApellido").style.display ="block";
    }
    else{
        document.querySelector("#alertaApellido").style.display ="none";
    }
})

// AGREGAR EVENTO CLICK AL BOTON | VALIDAR CAMPOS VACIOS | SI PASA LA VALIDACION MOSTRAR DATOS EN UNA TABLA

btnGuardar.addEventListener("click", function (){
    if(nombre.value !== "" && apellido.value !== "" && cityName.value > -1){

        //CREAR UNA TABLA EN JS
        
        var tabla = document.querySelector("#DIVtablaDatos");
        const tbody = document.querySelector("#tbody"); //CREAMOS UNA VARIABLE QUE MANEJA EL TBODY
        
        tabla.style.display="block"; //PARA HACER VISIBLE LA TABLA

        //PARA ASIGNAR UNA MODIFICACION AL HTML SE PUEDE USAR EL METODO document.createElement()
        //ESTE RECIBE POR PARAMETRO UN STR CON EL NOMBRE DEL ELEMENTO (EL TAG)

        const fila = document.createElement("tr"); //ESTE SE CREA EN MEMORIA ASI QUE HAY QUE VINCULARLO COMO HIJO DE OTRA ETIQUETA
        tbody.appendChild(fila); //PARA AGREGAR UN HIJO A UNA ETIQUETA ES ASI CON .appendChild()

        const col1 = document.createElement("td");
        const col2 = document.createElement("td");
        const col3 = document.createElement("td");

        fila.appendChild(col1);
        fila.appendChild(col2);
        fila.appendChild(col3);

        //ASIGNAR DATOS

        col1.innerText = nombre.value;
        col2.innerText = apellido.value;

        // cityName.OPTIONS ELIGE TODAS LAS OPCIONES DEL SELECT Y LAS COLOCA EN UN ARREGLO
        // [cityName.selectedIndex].text ELIGE DENTRO DEL ARREGLO LA OPCION SELECCIONADA Y LO PASA A TEXTO
        col3.innerText = cityName.options[cityName.selectedIndex].text;

    }
    else{
        alert("Debe completar todos los campos");
    }
})