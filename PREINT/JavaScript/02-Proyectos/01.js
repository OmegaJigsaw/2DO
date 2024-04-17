/**
 * 8K 7680 x 4320
 * 4K 3840 x 2160 
 * FHD 1920 x 1080
 * HD 1280 x 720
 */

function Resolucion (largo, ancho){
    if (largo >= 7680 && ancho >= 4320){
        return "Resolucion: 8K";
    }
    else if (largo >= 3840 && ancho >= 2160){
        return "Resolucion: 4K";
    }

    else if (largo >= 1920 && ancho >= 1080){
        return "Resolucion: FHD";
    }

    else if (largo >= 1280 && ancho >= 720){
        return "Resolucion: HD";
    }

    else{
        return"Resolucion no valida";
    }
}

let valorResolucion = Resolucion(8000, 5000)
console.log(valorResolucion)