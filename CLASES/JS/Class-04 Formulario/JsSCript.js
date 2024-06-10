const nombre = document.querySelector("#nombre")
const apellido = document.querySelector("#apellido")
// const alertaNombre = document.querySelector("#alertaNombre")
const cityName = document.querySelector("#cityName")
const btnGuardar = document.querySelector("#btnG")

// EVENTO "blur" OCURRE CUANDO SE DESENFOCA EL INPUT
nombre.addEventListener("blur", function(){

    //PARA SABER SI SE EL CAMPO ESTA VACIO SE PUEDE USAR UN IF
    //PREGUNTANDO POR EL VALOR DE "nombre" Y SI ESTE SE ENCUENTRA VACIO

    if (nombre.value === ""){
        //PARA CAMBIAR EL DISPLAY NO ES NECESARIO CREAR UNA VARIABLE SE PUEDE MOVER DIRECTAMENTE
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

// cityName.addEventListener("change", function(){
//     //El valor de cityName en <select> es el "value" de la <option> elegida
//     alert("ciudad seleccionada: "+ cityName.value);
// })

// AGREGAR EVENTO CLICK AL BOTON | VALIDAR CAMPOS VACIOS | SI PASA LA VALIDACION MOSTRAR DATOS EN UNA TABLA

btnGuardar.addEventListener("click", function (){

    // PARA HACER MULTIPLES RESTRICCIONES AND ES && Y PARA HACER CON VARIAS POSIBILIDADES ES DECIR UN OR ES CON ||
    if(nombre.value !== "" && apellido.value !== "" && cityName.value > -1){

        var NomIN = document.querySelector("#NomIN");
        var ApeIN = document.querySelector("#ApeIN");
        var CityIN = document.querySelector("#CityIN");
        var tabla = document.querySelector("#tablaDatos");

        //CREAR UNA TABLA
        
        tabla.style.display="block"
        NomIN.innerText = nombre.value
        ApeIN.innerText = apellido.value
        switch (cityName.value) {
            case "1":
                    CityIN.innerText= "Santiago"
                break;
        
            case "2":
                    CityIN.innerText= "Temuco"
                break;
        
            case "3":
                    CityIN.innerText= "Valdivia"
                break;
        
            case "4":
                    CityIN.innerText= "Osorno"
                break;
        
            default:
                alert("?")
                break;
        }
    }
    else{
        alert("Debe completar todos los campos")
    }
})