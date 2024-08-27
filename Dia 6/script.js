document.getElementById('button1').addEventListener('click', obtenerTexto);

function obtenerTexto(){
    fetch('texto.txt')//se hace una solicitud al servidor de un archivo "texto.txt".
    .then(res  => res.text())//se lee la respuesta commo texto plano, lo cual devolverá el archivo como una cadena llamada "data".
    .then(data =>{//se dará manejo a data mediante imprimiendolo en consola.
        console.log(data)
        document.getElementById('output').innerHTML=data;//Importar un texto normal.
    })
    .catch(err =>{
        console.log("Hubo un error");
        document.getElementById('output').innerHTML=err;
    });
}//Es asincrono en su codigo y en su comportamiento es sincrono.

document.getElementById('button2').addEventListener('click', obtenerjson);
function obtenerjson(){
    fetch('es.json')
    .then(res => res.json())
    .then(data =>{
        console.log(data[0]["nombre"]);
        for (i in data){
            console.log(data[i]["nombre"])
        }
    })
}
