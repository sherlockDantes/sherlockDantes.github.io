addEventListener("message", recibirMensaje, false);

function recibirMensaje(e) {
    let respuesta = "El texto escrito en el cuadro es " + e.data;

    postMessage(respuesta);
}