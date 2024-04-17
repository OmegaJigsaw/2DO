let arreglo1 = [1, 5, 3, 10, 11, -5, -3, -15, -7]

function Positivos(arreglo){
    let contadorPos = 0;
    for (i = 0 ; i < arreglo.length ; i++){
        if (arreglo[i] >= 0){
            contadorPos++
        };
    };
    console.log(contadorPos)
};

Positivos(arreglo1)