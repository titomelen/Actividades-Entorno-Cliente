const lista1 = document.getElementById('lista1');
const lista2 = document.getElementById('lista2');

function mover(element) {
    if (element.getAttribute("value") === 'lista1') {
        element.setAttribute("value", "lista2");
        lista2.appendChild(element)
    } else {
        element.setAttribute("value", "lista1");
        lista1.appendChild(element);
    }
}