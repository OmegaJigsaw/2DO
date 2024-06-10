personajes = [
{nombre: "Eren Jaeger", anime: "Shingeki no Kiojin", calificacion: 10},
{nombre: "Goku", anime: "Dragon Ball", calificacion: 8},
{nombre: "Naruto", anime: "Naruto", calificacion: 9},   
{nombre: "Luffy", anime: "One Piece", calificacion: 8}
]

//Guardar lista en localStorage
//Sacar los elementos de ahi
//Insertar dentro de la tabla mediante javaScript

localStorage.setItem("listaPersonajes", JSON.stringify(personajes))

const arrayPersonaje = JSON.parse(localStorage.getItem("listaPersonajes"))
const tbody = document.querySelector("#tbody")

personajes.forEach(i => {
    const row = document.createElement("tr");

    const col = document.createElement("td");
    const col2 = document.createElement("td");
    const col3 = document.createElement("td");

    col.innerText = i.nombre;
    col2.innerText = i.anime;
    col3.innerText = i.calificacion;

    tbody.appendChild(row);
    row.appendChild(col);
    row.appendChild(col2);
    row.appendChild(col3);
});