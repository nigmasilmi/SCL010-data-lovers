/*global loadData INJURIES Map Chart:true*/

/*eslint no-undef: "error"*/

// mapa para buscar los objetos de la data
let dataModified = new Map();

//fucion  ue me captura los datos de la data
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
    let totalAir = INJURIES[i].Total_Injured_Persons_Air+INJURIES[i].Total_Injured_Persons_On_Demand_Air_Taxi
    + INJURIES[i].Total_Injured_Persons_US_Air_Carrier + INJURIES[i].Total_Injured_Persons_General_Aviation;

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
    let totalLand = INJURIES[i].Total_Injured_Persons_Pedalcyclists + INJURIES[i].Total_Injured_Persons_Motorcyclists
    + INJURIES[i].Total_Injured_Persons_Passenger_Car_Occupants + INJURIES[i].Total_Injured_Persons_Bus_Occupants
    + INJURIES[i].Total_Injured_Persons_Rail;
    
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
    let totalWater = INJURIES[i].Total_Injured_Persons_Passenger_Vessel + INJURIES[i].Total_Injured_Persons_Water_Vessel_Related
    + INJURIES[i].Total_Injured_Persons_Recreational_Boating + INJURIES[i].Total_Injured_Persons_Water;

    //añadir la data segun el año al mapa 
    dataModified.set(year, {
      water,
      air,
      land,
      totalAir,
      totalLand,
      totalWater
    });
  }
}
