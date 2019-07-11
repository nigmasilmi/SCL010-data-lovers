//boton mostrar
const containerDatos = document.getElementById("container_datos");
document.getElementById("clickme").addEventListener("click", (showPageData));

//crear tablas
function drawTable(year, transport) {
  data.loadData();
  year = data.changeYearsToList(year);
  let rows = "";
  let totals = [];

  for (let i = 0; i < data.dataModified.get(year[0])[transport].length; i++) {
    let totalRow = 0;
    rows += "<tr>" + "<td>" + data.dataModified.get(year[0])[transport][i].nameSpanish + "</td>";
    for (let j = 0; j < year.length; j++) {
      let value = data.dataModified.get(year[j])[transport][i].value;
      totalRow += value;

      if (value === null) {
        value = "Sin datos"
      }
      rows += "<td>" + value + "</td>";

    }
    rows += "<tr>";
    totals.push({
      "nameSpanish": data.dataModified.get(year[0])[transport][i].nameSpanish,
      "totalRow": totalRow
    });
  }
  let tabla = "<table>" + "<tr>" + "<th>" + "Personas Lesionadas" + "</th>";

  for (let i = 0; i < year.length; i++) {
    tabla += "<th>" + year[i] + "</th>";
  }
  tabla += "</tr>" + rows + "</table>";

  containerDatos.innerHTML = tabla;

  showIncidentsWihtMoreInjuries(totals);

  return totals;
}


//calculado la cantidad de incidentes por medio de tranporte
function showTotalIncident(transport) {
  let total = data.dataModified.get("1960")[transport].length;
  let years = document.getElementById("selectYear").value;

  document.getElementById("showTotalIncident").innerHTML = total;
  document.getElementById("percent1").innerHTML = "Aire = " + data.percent(years).percentair + " %";
  document.getElementById("percent2").innerHTML = "Tierra = " + data.percent(years).percentland + " %";
  document.getElementById("percent3").innerHTML = "Agua = " + data.percent(years).percentWater + " %";

}
//calcular los dos incidentes con mas leccionados
function showIncidentsWihtMoreInjuries(totals) {
  let max1 = {
    "nameSpanish": "",
    "totalRow": 0
  };
  let max2 = {
    "nameSpanish": "",
    "totalRow": 0
  };
  for (let i = 0; i < totals.length; i++) {
    if (max1.totalRow < totals[i].totalRow) {
      max2 = max1;
      max1 = totals[i];
    } else if (max2.totalRow < totals[i].totalRow) {
      max2 = totals[i];
    }
  }
  document.getElementById("mainIncident1").innerHTML = max1.nameSpanish;
  document.getElementById("mainIncident2").innerHTML = max2.nameSpanish;
}

//Inicializando graficos de google

google.charts.load('current', {
  'packages': ['corechart']
});
google.charts.setOnLoadCallback(showPageData);

function showPageData() {
  // 
  let transport = document.body.id;
  let years = document.getElementById("selectYear").value;
  let totals = drawTable(years, transport);
  showTotalIncident(transport);

  //Crear la tabla de datos.
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Incidentes');
  data.addColumn('number', 'Totales');
  for (let i = 0; i < totals.length; i++) {
    data.addRow([totals[i].nameSpanish, totals[i].totalRow])
  }

  //Establecer opciones de gráfico
  var options = {
    'title': 'Incidentes totales por Período',
    'width': 800,
    'height': 300
  };

  //Crea una instancia y dibuja la gráfica, pasando algunas opciones.
  var chart = new google.visualization.PieChart(document.getElementById('chart'));
  chart.draw(data, options);
}
