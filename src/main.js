
/*global loadData INJURIES Map Chart dataModified:true*/

/*eslint no-undef: "error"*/


const containerDatos = document.getElementById("container_datos");
document.getElementById("clickme").addEventListener("click", (showTable));

//mostrar tabla
function showTable(){ 
    let transport = document.body.id;
    let years = document.getElementById("selectYear").value;
    drawTable(years,transport);
}

//seleccion de rango de tiempo
function changeYearsToList(years){
    let year = [];
    for (let i = 0; i < years.length; i=i+5) {
        year.push(years.substring(i,i+4));        
    }
    return year;
}
 
//crear tablas
function drawTable(year,transport){  
 loadData();
 year = changeYearsToList(year);
 let rows="";

 for (let i=0; i<dataModified.get(year[0])[transport].length; i++){

    rows +="<tr>"+"<td>"+ dataModified.get(year[0])[transport][i].nameSpanish +"</td>";
       
    for (let j=0; j<year.length; j++){

       rows += "<td>"+ dataModified.get(year[j])[transport][i].value +"</td>";
    }
   rows += "<tr>";
}

   let tabla = "<table>"+  "<tr>"+  "<th>"+"Incidentes"+"</th>";
 for (let i = 0; i < year.length; i++) {
     tabla+="<th>"+year[i]+"</th>";
     
 } 
 tabla+= "</tr>"+rows+"</table>";

 containerDatos.innerHTML = tabla;
 }

//Función que manipula el espacio de los gráficos para Incidencias Aéreas

let airGraph = document.getElementById('grafAereo').getContext('2d');

//Función que manipula el espacio de los gráficos para Incidencias Terrestres

let landGraph = document.getElementById('grafTerrestre').getContext('2d');

//Función que manipula el espacio de los gráficos para Incidencias Acuáticas

let waterGraph = document.getElementById('grafAcuatico').getContext('2d');

