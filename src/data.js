/*global loadData INJURIES Map Chart:true*/

/*eslint no-undef: "error"*/

let dataModified = new Map();

function loadData() {

  for (let i = 0; i < INJURIES.length; i++) {

    let year = INJURIES[i].Year.substring(0, 4);


    //data para transporete aereo
    let air = [{
        "name": "Total_Injured_Persons_Air",
        "nameSpanish": "Total de personas lesionadas en transporte aereo",
        "value": INJURIES[i].Total_Injured_Persons_Air
      },
      {
        "name": "Total_Injured_Persons_On_Demand_Air_Taxi",
        "nameSpanish": "Total de personas lesionadas en aviacion tipo taxis",
        "value": INJURIES[i].Total_Injured_Persons_On_Demand_Air_Taxi
      },
      {
        "name": "Total_Injured_Persons_US_Air_Carrier",
        "nameSpanish": "Total de personas lesionadas en Aerolínea Estadounidense",
        "value": INJURIES[i].Total_Injured_Persons_US_Air_Carrier
      },
      {
        "name": "Total_Injured_Persons_General_Aviation",
        "nameSpanish": "Total de personas lesionadas en Aerolínea no Estadounidense",
        "value": INJURIES[i].Total_Injured_Persons_General_Aviation
      }
    ];

    //data para transporete terrestre
    let land = [{
        "name": "Total_Injured_Persons_Pedalcyclists",
        "nameSpanish": "Total de personas lesionadas en bicicleta",
        "value": INJURIES[i].Total_Injured_Persons_Pedalcyclists
      },

      {
        "name": "Total_Injured_Persons_Motorcyclists",
        "nameSpanish": "Total de personas lesionadas en motocicleta",
        "value": INJURIES[i].Total_Injured_Persons_Motorcyclists
      },
      {
        "name": "Total_Injured_Persons_Passenger_Car_Occupants",
        "nameSpanish": "Total de personas lesionadas ocupamtes de un carro",
        "value": INJURIES[i].Total_Injured_Persons_Passenger_Car_Occupants
      },
      {
        "name": "Total_Injured_Persons_Bus_Occupants",
        "nameSpanish": "Total de personas lesionadas ocupamtes de un bus",
        "value": INJURIES[i].Total_Injured_Persons_Bus_Occupants
      },
      {
        "name": "Total_Injured_Persons_Rail",
        "nameSpanish": "Total de personas lesionadas ocupamtes de un tren",
        "value": INJURIES[i].Total_Injured_Persons_Rail
      }
    ];
    //data para transporte agua

    let water = [{
        "name": "Total_Injured_Persons_Motorcyclists",
        "nameSpanish": "Total de personas lesionadas en motocicleta",
        "value": INJURIES[i].Total_Injured_Persons_Motorcyclists
      },
      {
        "name": "Total_Injured_Persons_Passenger_Car_Occupants",
        "nameSpanish": "Total de personas lesionadas ocupamtes de un carro",
        "value": INJURIES[i].Total_Injured_Persons_Passenger_Car_Occupants
      },
      {
        "name": "Total_Injured_Persons_Bus_Occupants",
        "nameSpanish": "Total de personas lesionadas ocupamtes de un bus",
        "value": INJURIES[i].Total_Injured_Persons_Bus_Occupants
      },
      {
        "name": "Total_Injured_Persons_Water",
        "nameSpanish": "Total de personas lesionadas en embarcaciones de recreo",
        "value": INJURIES[i].Total_Injured_Persons_Water
      }
    ];


    dataModified.set(year, {
      water,
      air,
      land
    });
  }
}

dataModified.set(year, {
  water,
  air,
  land
});


//Función que crea los gráficos para Incidencias Aéreas
let airGraphGen = new Chart(airGraph, {
  type: 'bar', //puede ser bar, horizontalBar, pie, line, doughnut, radar, polarArea
  data: {
    labels: ['Ejemplo1', 'Ejemplo2', 'Ejemplo3', 'Ejemplo4', 'Ejemplo5', 'Ejemplo6'],
    datasets: [{
      label: 'DatosEjemplo1',
      data: [
        134,
        145,
        101,
        200,
        170

      ]
    }]
  },
  options: {}
});

//airGraph 

//Función que crea los gráficos para Incidencias Terrestres

//landGraph

//Función que crea los gráficos para Incidencias Acuáticas

//waterGraph
