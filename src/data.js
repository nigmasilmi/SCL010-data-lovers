/*global loadData INJURIES Map Chart:true*/

/*eslint no-undef: "error"*/

let dataModified = new Map();

function loadData() {

  for (let i = 0; i < INJURIES.length; i++) {

    let year = INJURIES[i].Year.substring(0, 4);


    //data para transporete aereo
    let air = [{
        "name": "Total_Injured_Persons_Air",
        "nameSpanish": "Transporte aereo",
        "value": INJURIES[i].Total_Injured_Persons_Air
      },
      {
        "name": "Total_Injured_Persons_On_Demand_Air_Taxi",
        "nameSpanish": "Aviacion tipo taxis",
        "value": INJURIES[i].Total_Injured_Persons_On_Demand_Air_Taxi
      },
      {
        "name": "Total_Injured_Persons_US_Air_Carrier",
        "nameSpanish": "Aerolínea Estadounidense",
        "value": INJURIES[i].Total_Injured_Persons_US_Air_Carrier
      },
      {
        "name": "Total_Injured_Persons_General_Aviation",
        "nameSpanish": "Aerolínea no Estadounidense",
        "value": INJURIES[i].Total_Injured_Persons_General_Aviation
      }
    ];

    //data para transporete terrestre
    let land = [{
        "name": "Total_Injured_Persons_Pedalcyclists",
        "nameSpanish": "Bicicleta",
        "value": INJURIES[i].Total_Injured_Persons_Pedalcyclists
      },

      {
        "name": "Total_Injured_Persons_Motorcyclists",
        "nameSpanish": "Motocicleta",
        "value": INJURIES[i].Total_Injured_Persons_Motorcyclists
      },
      {
        "name": "Total_Injured_Persons_Passenger_Car_Occupants",
        "nameSpanish": "Carro",
        "value": INJURIES[i].Total_Injured_Persons_Passenger_Car_Occupants
      },
      {
        "name": "Total_Injured_Persons_Bus_Occupants",
        "nameSpanish": "Bus",
        "value": INJURIES[i].Total_Injured_Persons_Bus_Occupants
      },
      {
        "name": "Total_Injured_Persons_Rail",
        "nameSpanish": "Tren",
        "value": INJURIES[i].Total_Injured_Persons_Rail
      }
    ];
    //data para transporte agua

    let water = [{
        "name": "Total_Injured_Persons_Passenger_Vessel",
        "nameSpanish": "Embarcaciones",
        "value": INJURIES[i].Total_Injured_Persons_Passenger_Vessel
      },
      {
        "name": "Total_Injured_Persons_Recreational_Boating",
        "nameSpanish": "Embarcaciones de recreo",
        "value": INJURIES[i].Total_Injured_Persons_Recreational_Boating
      },
      {
        "name": "Total_Injured_Persons_Water_Vessel_Related",
        "nameSpanish": "Embarcaciones de recreo",
        "value": INJURIES[i].Total_Injured_Persons_Water_Vessel_Related
      },

      {
        "name": "Total_Injured_Persons_Water",
        "nameSpanish": "Embarcaciones de recreo",
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
