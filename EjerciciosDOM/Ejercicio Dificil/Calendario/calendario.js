var data = new Date();
	var ano = data.getFullYear();
	var mes = data.getMonth();
	var dia = data.getDate();
	var diaSemana = data.getDay();

	var a_mes = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo",	"Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"); 
	var a_diaSem = new Array("D", "L", "M", "X", "J", "V", "S");

	data.setDate(1);

	calendario = "<center><table><thead><tr><th colspan='7'>"+ a_mes[mes]+ " de "+ ano +"</th></tr></thead>";

	calendario += "<tr>";
	for(var i=0;i<7;i++){
		if(diaSemana == i){
			calendario += "<td><b>"+ a_diaSem[i] + "</b></td>";
		} else {
			calendario += "<td>"+ a_diaSem[i] + "</td>";
		}

	}
	calendario += "</tr>";
  calendario += "<tr>";


	for(i=0;i<data.getDay();i++){
		calendario += "<td></td>";
	}

	for (i=0;i<31;i++) {
		if (data.getDate()>i) {
			diaSemana = data.getDay();
			if (diaSemana == 0) {
				calendario += "</tr><tr>";
			}
			if (diaSemana != 7) {
				if (dia == data.getDate()) {
					calendario +="<td><b>"+(i+1)+"</b></td>";
				} else {
					calendario +="<td>"+(i+1)+"</td>";
				}
			}

			if (diaSemana == 7) {
				calendario += "</tr>";
			}
		}
		data.setDate(data.getDate()+1);
	}

	calendario += "</tr></table></center>";

document.getElementById("calendar").innerHTML = calendario;