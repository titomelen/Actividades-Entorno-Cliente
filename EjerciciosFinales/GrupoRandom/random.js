var nombre = document.getElementById('nombreAlumno');
var alumno = document.getElementById('añadirAlumno');
var aleatorizar = document.getElementById('hacerGrupos')
var lista = document.getElementById('listaAlumnos');
var cajaGrupos = document.getElementById('cajaGrupos')

var alumnos = [];

function botonAñadir() {
  var nuevoAlumno = nombre.value;
  nombre.value = '';
  
  alumnos.push(nuevoAlumno);
  var nuevoObjeto = document.createElement('li');
  nuevoObjeto.appendChild(document.createTextNode(nuevoAlumno));
  lista.appendChild(nuevoObjeto);
}

function grupoVacio(numAlumnos, maxSize) {
  var g = [];
  for (var i = 0; i < Math.ceil(numAlumnos / maxSize); i++) {
    g.push([]);
  }

  return g;
}

function gruposAleatorios() {
  var grupos = grupoVacio(alumnos.length, 4);

  for (var i = 0; i < alumnos.length; i++) {
    var grupo;
    do {
      grupo = Math.floor(Math.random() * grupos.length);
    } while (grupos[grupo].length >= 4);
    grupos[grupo].push(alumnos[i]);
  }

  return grupos;
}

function hacerGrupos(grupo) {
  var list = document.createElement('ul');
    
  for (var i = 0; i < grupo.length; i++) {
    var objeto = document.createElement('li');
    objeto.appendChild(document.createTextNode(grupo[i]));
    list.appendChild(objeto);
  }
  
  return list;
}

function botonAleatorizar() {
  var grupos = gruposAleatorios();
  
  for (var i = 0; i < grupos.length; i++) {
    var listaGrupo = hacerGrupos(grupos[i])
    
    var titulo = document.createElement('h2');
    titulo.appendChild(document.createTextNode('Grupo ' + (i + 1)));
    
    var caja = document.createElement('div');
    caja.appendChild(titulo);
    caja.appendChild(listaGrupo);
    cajaGrupos.appendChild(caja);
  }
}

alumno.addEventListener('click', botonAñadir);
aleatorizar.addEventListener('click', botonAleatorizar);