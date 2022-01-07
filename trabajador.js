let puertos = [];

function conectar(e) {
    puertos.push(e.ports[0]);

    e.ports[0].onmessage = enviar;
}

function enviar(e) {
    for (let i = 0; i < puertos.length; i++) {
        puertos[i].postMessage("El texto que has puesto es :" + e.data);
    }
}

addEventListener("connect", conectar, false);