// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo(){

    let amigoNuevo = document.getElementById('amigo').value;

    //Validacion de campos vacios
    if(amigoNuevo === ''){
        alert("Por favor, inserte un nombre.");
        return;
    }

    //Listado de los amigos agregados
    amigos.push(amigoNuevo);
    document.getElementById('amigo').value = "";
}
