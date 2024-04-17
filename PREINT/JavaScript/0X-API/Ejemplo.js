// Realiza una solicitud GET a la API
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json()) // Convierte la respuesta a JSON
  .then(data => {
    // data es un arreglo de objetos recibidos de la API
    // Aquí puedes trabajar con los datos y almacenarlos en un arreglo de objetos
    let arregloObjetos = data.map(item => {
      return {
        id: item.id,
        name: item.name,
        username: item.username,
        address : item.address
        // Agrega otras propiedades según la estructura de los datos de la API
      };
    });

    // Ahora tienes un arreglo de objetos listo para usar
    console.log(arregloObjetos);
  })
  .catch(error => {
    console.error('Hubo un problema con la solicitud:', error);
  });
