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
    actualizarListaAmigos();
}

function actualizarListaAmigos(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    //Se agregan los amigos y se muestran cada uno
    for(let i = 0; i < amigos.length; i++){
        lista.innerHTML += `${i + 1}. ${amigos[i]}<br>`;
    }
}

function sortearAmigo(){
    //Verifica si la lista de amigos esta vacia
    if(amigos.length == 0){
        alert('La lista de amigos no puede estar vacía.');
        return;
    }

    // Genera un índice aleatorio basado en el tamaño del arreglo
    let numeroAleatorio = Math.floor(Math.random() * amigos.length);
    // Muestra el nombre del amigo seleccionado aleatoriamente
    let ganador = document.getElementById('resultado');
    ganador.innerHTML = amigos[numeroAleatorio];
}