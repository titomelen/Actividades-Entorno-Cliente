window.onload = iniciar;

const jugadores = [
    {nombre:"Melen", color:"grey", tipo:"jugador", votos: 0},
    {nombre:"Limon", color:"red", tipo:"jugador", votos: 0},
    {nombre:"Vladi", color:"green", tipo:"jugador", votos: 0},
    {nombre:"Villar", color:"white", tipo:"jugador", votos: 0},
    {nombre:"Reina", color:"purple", tipo:"jugador", votos: 0},
    {nombre:"Rafita", color:"pink", tipo:"jugador", votos: 0}
];

function votar(tableroAmongUs){
    jugadores[tableroAmongUs].votos+=1
    console.log(jugadores[tableroAmongUs])
    document.getElementById("votacion").innerHTML = jugadores[tableroAmongUs].nombre + " ha sido votado " + jugadores[tableroAmongUs].votos + " vez y fue suficiente pa expulsarlo, GG."
    for(a = 0; a < jugadores.length; a++){
            document.getElementById(jugadores[a].nombre).disabled=true;
    }
}

function iniciar(){
    const tablero = document.getElementById("tablero");
    tablero.innerHTML = '';
    jugadores.forEach((jugador, a) => {
        tablero.innerHTML+=`
        <tr>
            <td class="bordes" style="background-color:${jugador.color};" id="jugador">${jugador.nombre}</td>
            <td><button style="background-color=${jugador.color}" onclick="votar(${a})" id="${jugador.nombre}">Votar</button></td>
        </tr>
        `;
    });
}