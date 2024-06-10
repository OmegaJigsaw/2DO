const pokemon = [
    {id: 1, nombre: "Pikachu", tipo: "Electrico", shiny: false},
    {id: 2, nombre: "Ditto", tipo: "Normal", shiny: true},
    {id: 3, nombre: "Diglet", tipo: "Tierra", shiny: false},
    {id: 4, nombre: "Onix", tipo: "Roca", shiny: true},
    {id: 5, nombre: "Gengar", tipo: "Fantasma", shiny: false}
];

// Insertar arreglo pokemon en una tabla dinamica

pokemon.forEach(i => {

    const tbody = document.querySelector("#tbodyPok"); // creamos una const que contiene el "tbody"
    const fila = document.createElement("tr"); // creamos una const en la que creamos el elemento "tr" o en otras palabras la fila de la tabla
    tbody.appendChild(fila); // insertamos el elemento "tr" como hijo de la "const" que equivale al "tbody", para que este se ubique dentro del tag "tbody"

    // creamos variables que se encargan almacenar elementos de tipo "td" o en otras palabras las columnas de la tabla
    const pkCol = document.createElement("td");
    const pkCol2 = document.createElement("td");
    const pkCol3 = document.createElement("td");
    const pkCol4  = document.createElement("td");

    // AGREGAR EL BOTON Y SU COLUMNA QUE ELIMINE LA COLUMNA
    const pkButtonCol  = document.createElement("td"); //CREA UN TD O COLUMNA DEDICADO A COLOCAR UN BOTON
    const pkButton  = document.createElement("button"); //CREAR BOTON
    
    // modificamos el innerText de las variables anteriores con los datos del arreglo en base a la iteracion en la que este se encuentre
    pkCol.innerText = i.id;
    pkCol2.innerText = i.nombre;
    pkCol3.innerText = i.tipo;

    // Operador ternario para cambiar los valores de shiny
    // i.shiny pregunta la veracidad con (?), el primer valor luego de ? equivale a el valor que tomara si es true y el segundo luego de los (:) es el valor de false
    pkCol4.innerText = i.shiny ? "Si" : "No" //para negar el ternario, o decir que los valores se inviertan se coloca un (!) al inicio de la sintaxis de este (!i.shiny ?) en este caso

    // ATRIBUTOS DEL BOTON
    pkButton.className = "btn btn-danger" //MODIFICAR CLASE DEL BOTON
    pkButton.innerText = "Eliminar"; //MODIFICA EL TEXTO INTERNO DEL BOTON

    pkButton.addEventListener("click", function(){ //EVENTO CLICK QUE ELIMINA LA COLUMNA AL APRETAR EL BOTON
        tbody.removeChild(fila)
    });

    // finalmente agregamos estas variables como hijos de la variable que contiene el elemento "tr"
    fila.appendChild(pkCol);
    fila.appendChild(pkCol2);
    fila.appendChild(pkCol3);
    fila.appendChild(pkCol4);
    fila.appendChild(pkButtonCol); //AGREGAR A FILA LA COLUMNA DEL BOTON
    pkButtonCol.appendChild(pkButton); //AGREGAR A LA COL DEL BOTON, EL BOTON
})