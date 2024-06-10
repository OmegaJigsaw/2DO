function operaciones(op){
    const num1 = document.getElementById("num1")
    const num2 = document.getElementById("num2")
    const resultado = document.getElementById("resultado")
    switch(op){
        case 1:{
            resultado.value = parseInt(num1.value) + parseInt(num2.value);
            break;
        }
        case 2:{
            resultado.value = parseInt(num1.value) - parseInt(num2.value);
            break;
        }
        case 3:{
            resultado.value = parseInt(num1.value) * parseInt(num2.value);
            break;
        }
        case 4:{
            resultado.value = parseInt(num1.value) / parseInt(num2.value);
            break;
        }
    }
}
