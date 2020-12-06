const listas = document.getElementsByClassName('listas');

function resaltar(element) {
    const lista = element.getAttribute("value");
    for (objetoLista of listas) {
        objetoLista.style.background = '#8188D8'
        objetoLista.style.color = 'white'
    }
    element.style.background = '#4F70FA';
    element.style.color = 'orange';
}