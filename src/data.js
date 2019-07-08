/*global loadData INJURIES Map Chart:true*/

/*eslint no-undef: "error"*/

let dataModified = new Map();

function loadData() {

  for (let i = 0; i < INJURIES.length; i++) {

    let year = INJURIES[i].Year.substring(0, 4);


    //data para transporete aereo
    let air = [{
        "name": "Total_Injured_Persons_Air",
        "nameSpanish": "Durante el vuelo",
        "value": INJURIES[i].Total_Injured_Persons_Air
      },
      {
        "name": "Total_Injured_Persons_On_Demand_Air_Taxi",
        "nameSpanish": "Taxis aéreos",
        "value": INJURIES[i].Total_Injured_Persons_On_Demand_Air_Taxi
      },
      {
        "name": "Total_Injured_Persons_US_Air_Carrier",
        "nameSpanish": "Aerolíneas nacionales",
        "value": INJURIES[i].Total_Injured_Persons_US_Air_Carrier
      },
      {
        "name": "Total_Injured_Persons_General_Aviation",
        "nameSpanish": "Aerolíneas internacionales",
        "value": INJURIES[i].Total_Injured_Persons_General_Aviation
      }
    ];

    //data para transporte terrestre
    let land = [{
        "name": "Total_Injured_Persons_Pedalcyclists",
        "nameSpanish": "Bicicletas",
        "value": INJURIES[i].Total_Injured_Persons_Pedalcyclists
      },

      {
        "name": "Total_Injured_Persons_Motorcyclists",
        "nameSpanish": "Motocicletas",
        "value": INJURIES[i].Total_Injured_Persons_Motorcyclists
      },
      {
        "name": "Total_Injured_Persons_Passenger_Car_Occupants",
        "nameSpanish": "Automóviles",
        "value": INJURIES[i].Total_Injured_Persons_Passenger_Car_Occupants
      },
      {
        "name": "Total_Injured_Persons_Bus_Occupants",
        "nameSpanish": "Buses",
        "value": INJURIES[i].Total_Injured_Persons_Bus_Occupants
      },
      {
        "name": "Total_Injured_Persons_Rail",
        "nameSpanish": "Trenes",
        "value": INJURIES[i].Total_Injured_Persons_Rail
      }
    ];
    //data para transporte agua

    let water = [{
        "name": "Total_Injured_Persons_Passenger_Vessel",
        "nameSpanish": "Embarcaciones de carga",
        "value": INJURIES[i].Total_Injured_Persons_Passenger_Vessel
      },

      {
        "name": "Total_Injured_Persons_Water_Vessel_Related",
        "nameSpanish": "Relacionadas con embarcaciones de carga",
        "value": INJURIES[i].Total_Injured_Persons_Water_Vessel_Related
      },

      {
        "name": "Total_Injured_Persons_Recreational_Boating",
        "nameSpanish": "Botes de recreo",
        "value": INJURIES[i].Total_Injured_Persons_Recreational_Boating
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
