function recogerDia(day) {
    var days = ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado",
    ];
    var date = new Date(day);
    return days[date.getDay()];
}