const mascota = {
    nombre: "Misifu",
    tipo: "Gato",
    edad: 2,
    peso: 10.23,
    registrado: true
};

// Al guardar un objeto en localStorage como TEXTO plano, asi que para que este se guarde como debe
// Hay que usar una herramienta de JSON (JSON.stringify(objeto))
localStorage.setItem("mascota", JSON.stringify(mascota));

// Ahora para leer este objeto desde el localStorage utilizamos la otra funcion JSON (JSON.parse(localStorage.getItem("claveObjeto")))
// De no usar esto al usar getItem este sera visible como cadena de texto y no objeto
const mascota_JSON = JSON.parse(localStorage.getItem("mascota"));

//COLOCAR EN UNA TABLA

//FILA
const tableRow = document.querySelector("#fila");

//COLUMNAS
const tableCol = document.createElement("td");
const tableCol1 = document.createElement("td");
const tableCol2 = document.createElement("td");
const tableCol3 = document.createElement("td");
const tableCol4 = document.createElement("td");

//DATOS
tableCol.innerText = mascota_JSON.nombre;
tableCol1.innerText = mascota_JSON.tipo;
tableCol2.innerText = mascota_JSON.edad;
tableCol3.innerText = mascota_JSON.peso;
tableCol4.innerText = mascota_JSON.registrado ? "Si" : "No";

//INSERTAR
tableRow.appendChild(tableCol);
tableRow.appendChild(tableCol1);
tableRow.appendChild(tableCol2);
tableRow.appendChild(tableCol3);
tableRow.appendChild(tableCol4);