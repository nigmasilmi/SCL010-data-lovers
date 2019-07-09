//boton mostrar
const containerDatos = document.getElementById("container_datos");
document.getElementById("clickme").addEventListener("click", (showPageData));


//seleccion de rango de tiempo
function changeYearsToList(years) {
  let year = [];
  for (let i = 0; i < years.length; i = i + 5) {
    year.push(years.substring(i, i + 4));
  }
  return year;
}

//crear tablas
function drawTable(year, transport) {
  loadData();
  year = changeYearsToList(year);
  let rows = "";
  let totals = [];

  for (let i = 0; i < dataModified.get(year[0])[transport].length; i++) {
    let totalRow = 0;
    rows += "<tr>" + "<td>" + dataModified.get(year[0])[transport][i].nameSpanish + "</td>";
    for (let j = 0; j < year.length; j++) {
      let value = dataModified.get(year[j])[transport][i].value;
      totalRow += value;

      if (value === null) {
        value = "Sin datos"
      }
      rows += "<td>" + value + "</td>";

    }
    rows += "<tr>";
    totals.push({
      "nameSpanish": dataModified.get(year[0])[transport][i].nameSpanish,
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

//calculado la cantidad de incidentes por medio de tranporte
function showTotalIncident(transport) {
  let total = dataModified.get("1960")[transport].length;
  document.getElementById("showTotalIncident").innerHTML = total;
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

  // Create the data table.
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Incidentes');
  data.addColumn('number', 'Totales');
  for (let i = 0; i < totals.length; i++) {
    data.addRow([totals[i].nameSpanish, totals[i].totalRow])
  }

  // Set chart options
  var options = {
    'title': 'Incidentes totales por año',
    'width': 800,
    'height': 300
  };

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.PieChart(document.getElementById('chart'));
  chart.draw(data, options);
}

//funcion para el promedio
function percent() {
  let years = document.getElementById("selectYear").value;
  year = changeYearsToList(years);
  let totalYeartotalsland = 0;
  let totalsWater = 0;
  let totalsAir = 0;
  let percentair = 0;

  for (let j = 0; j < year.length; j++) {
    totalsland = dataModified.get(year[j]).totalLand;
    totalsWater = dataModified.get(year[j]).totalWater;
    totalsAir = dataModified.get(year[j]).totalAir;
  }
  percentair = (totalsAir * 100) / (totalsland + totalsWater + totalsAir);
  percentland = (totalsland * 100) / (totalsland + totalsWater + totalsAir);
  percentWater = (totalsWater * 100) / (totalsland + totalsWater + totalsAir);

  return {percentair ,percentland,percentWater};

}
