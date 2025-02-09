// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    const entradaAmigo = document.getElementById('amigo');
    const nombre = entradaAmigo.value.trim();

    if (!nombre) {
        alert('Por favor, ingrese un nombre válido');
        return;
    }

    amigos.push(nombre);
    actualizarListaAmigos();
    entradaAmigo.value = '';
}

function actualizarListaAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    const resultado = document.getElementById('resultado');
    
    if (amigos.length < 2) {
        alert('Agregue al menos 2 amigos para sortear');
        return;
    }

    resultado.innerHTML = '';
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const li = document.createElement('li');
    li.textContent = `Tu amigo secreto es: ${amigos[indiceAleatorio]}`;
    resultado.appendChild(li);
}