const areas = [
  { id: 1, nombre: "Informática" },
  { id: 2, nombre: "Salud" },
  { id: 3, nombre: "Hotelería" },
];
const carrerasInfo = [
  { id: 1, nombre: "Ingeniería en Informática", cupo: 2 },
  { id: 2, nombre: "Analista Programador", cupo: 1 },
  { id: 3, nombre: "Telecomunicaciones", cupo: 0 },
];

const carrerasSalud = [
  { id: 1, nombre: "Técnico en Enfemería", cupo: 2 },
  { id: 2, nombre: "Técnico en Odontología", cupo: 1 },
  { id: 3, nombre: "Laboratorista Clínico", cupo: 0 },
];

const carrerasHoteleria = [
  { id: 1, nombre: "Gastronomía", cupo: 2 },
  { id: 2, nombre: "Turismo", cupo: 1 },
];

//Declaracion Variables

//HTML
const nombre = document.querySelector("#nombre");
const apellido = document.querySelector("#apellido");
const areaSelect = document.querySelector("#area");
const carreraSelect = document.querySelector("#carrera");
const btnMatricula = document.querySelector("#btnMatricula");
const tbody = document.querySelector("#cuerpoTabla");

//Funcion que carga los select
function Carga(arreglo, select) {
  arreglo.forEach(i => {
    let option = document.createElement("option");
    option.value = i.id;
    option.innerText = i.nombre;
    select.appendChild(option);
  });
}

//Carga areas
Carga(areas, areaSelect);

//Carga dependiendo del area
areaSelect.addEventListener("change", function () {
  //El evento change se activa al realizar un cambio en el select
  //areaid toma el valor del id del area en la que se encuentra el select luego del cambio ("this" representa al objeto actualmente en el select)
  let areaid = this.value; 

  //Resetear al valor original
  carreraSelect.innerHTML = "<option value='-1'>NO SELECCIONADA</option>"; 

  //Creamos un bloque switch para preguntar el valor de areaid de antes por cada id en el arreglo de areas
  switch (areaid) {
    //Dependiendo de la id cargamos los elementos correspondientes
    case "1":
      Carga(carrerasInfo, carreraSelect); 
      break;
    case "2":
      Carga(carrerasSalud, carreraSelect);
      break;
    case "3":
      Carga(carrerasHoteleria, carreraSelect);
      break;
  }
});

//Config Boton Matricular
btnMatricula.addEventListener("click", function () {
  if (
    nombre.value !== "" &&
    apellido.value !== "" &&
    areaSelect.value !== "-1" &&
    carreraSelect.value !== "-1"
  ) {
    //Obtener datos de la carrera
    const carreraOption = carreraSelect.options[carreraSelect.selectedIndex];
    const carreraId = carreraOption.value;

    //Datos del area
    const areaId = areaSelect.options[areaSelect.selectedIndex].value;

    //Variable que verifica si hay cupo
    let hasCupo = true;
    
    //IF QUE PREGUNTA SI EL CUPO DE LA CARRERA DENTRO DEL AREAID CORRESPONDIENTE ES MAYOR A 0
    if (areaId == 1) {

      //X REPRESENTA AL ELEMENTO BUSCADO EN EL CICLO DE BUSQUEDA | IGUAL AL i EN UN forEACH
      //!!ACLARACION obj PASA A TOMAR LOS VALORES DE LA CARRERA SELECCIONADA Y MEDIANTE ESTE SE PUEDEN MODIFICAR LOS ATRIBUTOS
      obj = carrerasInfo.find((x) => x.id == carreraId);
      hasCupo = obj.cupo > 0;
      
    } else if (areaId == 2) {
      obj = carrerasSalud.find((x) => x.id == carreraId);
      hasCupo = obj.cupo > 0;

    } else {
      obj = carrerasHoteleria.find((x) => x.id == carreraId);
      hasCupo = obj.cupo > 0;
    }

    //INVIERTE EL IF EN VEZ DE PREGUNTAR SI ES VERDADERO PREGUNTA SI ES FALSO
    if (!hasCupo) {
      alert("La carrera no tiene cupo.");
      return;//FINALIZA EL PROCESO
    }

    //Los valores elegidos los almacenamos en un objeto para insertarlos mas facilmente
    const datosMatricula = {
      nombre: nombre.value,
      apellido: apellido.value,
      area: areaSelect.options[areaSelect.selectedIndex].text,
      carrera: carreraSelect.options[carreraSelect.selectedIndex].text,
    };

    obj.cupo--

    //Crear boton ELIMINAR y configurarlo
    const eliminar = document.createElement("button");
    eliminar.className = "btn btn-danger";
    eliminar.textContent = "Eliminar";
    eliminar.addEventListener("click", function () {
      tbody.removeChild(rowTable);
      obj.cupo++
    });

    //Fila
    const rowTable = document.createElement("tr");

    //Columna
    const colTable = document.createElement("td");
    const colTable2 = document.createElement("td");
    const colTable3 = document.createElement("td");
    const colTable4 = document.createElement("td");
    const colTable5 = document.createElement("td");

    colTable.innerText = datosMatricula.nombre;
    colTable2.innerText = datosMatricula.apellido;
    colTable3.innerText = datosMatricula.area;
    colTable4.innerText = datosMatricula.carrera;

    tbody.appendChild(rowTable);
    rowTable.appendChild(colTable);
    rowTable.appendChild(colTable2);
    rowTable.appendChild(colTable3);
    rowTable.appendChild(colTable4);

    //BOTON ELIMINAR
    rowTable.appendChild(colTable5);
    colTable5.appendChild(eliminar);

  } else {
    alert("Por favor, complete todos los campos");
  }
});
