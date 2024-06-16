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

Carga(areas, areaSelect);
areaSelect.addEventListener("change", function () {
  let areaid = this.value;
  carreraSelect.innerHTML = "<option value='-1'>NO SELECCIONADA</option>";
  switch (areaid) {
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

btnMatricula.addEventListener("click", function () {
  //Validacion campo invalido
  if (
    nombre.value !== "" &&
    apellido.value !== "" &&
    areaSelect.value !== "-1" &&
    carreraSelect.value !== "-1"
  ) {
      //DATOS CARRERA PARA VALIDAR CUPO
      const carreraOption = carreraSelect.options[carreraSelect.selectedIndex];
      const carreraId = carreraOption.value;
      const areaId = areaSelect.options[areaSelect.selectedIndex].value;
      let hasCupo = true;

      //VALIDACION CUPO Y CREACION DE OBJ PARA MODIFICACION DE CUPO
      if (areaId == 1) {
        obj = carrerasInfo.find((x) => x.id == carreraId);
        hasCupo = obj.cupo > 0;
      } else if (areaId == 2) {
        obj = carrerasSalud.find((x) => x.id == carreraId);
        hasCupo = obj.cupo > 0;
      } else {
        obj = carrerasHoteleria.find((x) => x.id == carreraId);
        hasCupo = obj.cupo > 0;
      }
      if (!hasCupo) {
        alert("La carrera no tiene cupo.");
        return;
      }

      //CAPTURA DE DATOS PARA MATRICULA
      const datosMatricula = {
        nombre: nombre.value,
        apellido: apellido.value,
        area: areaSelect.options[areaSelect.selectedIndex].text,
        carrera: carreraSelect.options[carreraSelect.selectedIndex].text,
      };

      //Disminuir cupo
      obj.cupo--;

      //Boton eliminar config
      const eliminar = document.createElement("button");
      eliminar.className = "btn btn-danger";
      eliminar.textContent = "Eliminar";
      eliminar.addEventListener("click", function () {
        tbody.removeChild(rowTable);
        obj.cupo++;
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
  } 
  else {
    alert("Por favor, complete todos los campos");
  }
});
