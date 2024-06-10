// QUERYSELECTORALL RETORNA UNA LISTA CON LOS ELEMENTOS HTML CON LA ETIQUETA DENTRO DEL () ASI QUE
// SI QUEREMOS AGREGAR EL ELEMENTO ON CLICK DE CADA BOTON HAY QUE RECORRER LA LISTA
const botones = document.querySelectorAll(".btn");
// PARA RECORRER LISTAS USAMOS "listName".FOREACH
// LUEGO EN EL PARENTESIS EL PRIMER PARAMETRO ES EL QUE TOMA EL VALOR DE LA ITERRACION
// Y LA FLECHA => INDIQUE QUE LO QUE SIGUE ES UNA FUNCION, ESTE SIMBOLO REMPLAZA A LA PALABRA FUNCTION

botones.forEach(boton => {

  // LA FUNCION QUE SE EJECUTA DESPUES DE LA FLECHA LLEVA COMO ATRIBUTO EVENT, QUE ES UN OBJETO
  // PROVENIENTE DEL EVENTO REALIZADO, ESTE TIENE SUS ATRIBUTOS PROPIOS Y PARA ENFOCARSE EN EL QUE CONTIENE EL VALOR
  // ES LA PROPIEDAD TARGET (TARGET ES REALMENTE LA ETIQUETA DEL HTML COMPLETA), DENTRO DE ESTA ESTAN LAS PROPIEDADES DE 
  // LA ETIQUETA ENTRE ELLAS LA PROPIEDAD ID, CLASS Y LA QUE NOS IMPORTA AQUI VALUE

  boton.addEventListener("click", function (event) {
    // PODEMOS GUARDAR LOS VALORES EN UNA VARIABLE
    // let operacion = parseInt(event.target.value);

    // O EJECUTARLOS DIRECTAMENTE
    operaciones(parseInt(event.target.value));
  });
});

function operaciones(op) {
  // AL PONER .value AL GETLEMENT SE OBTIENE EL VALUE DEL ELEMENTO
  const num1 = parseInt(document.getElementById("num1").value);
  const num2 = parseInt(document.getElementById("num2").value);
  const resultado = document.getElementById("resultado");
  let total = 0;
  switch (op) {
    case 1: {
      total = num1 + num2;
      break;
    }
    case 2: {
      total = num1 - num2;
      break;
    }
    case 3: {
      total = num1 * num2;
      break;
    }
    case 4: {
      total = num1 / num2;
      break;
    }
    default: {
      alert("no valido");
      break;
    }
  }
  // .innerText es para modificar los valores dentro de las etiquetas
  resultado.innerText = "Resultado: " + total
}
