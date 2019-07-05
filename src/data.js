
let dataModified = new Map();

function loadData(){
  
    for (let i=0; i<INJURIES.length; i++){
  
    let year= INJURIES[i].Year.substring(0,4);
     
    //data para transporete aereo
    let air= [
      {
        "name": "Total_Injured_Persons_Air",
        "nameSpanish":"Total de personas lesionadas en transporte aereo",
        "value":INJURIES[i].Total_Injured_Persons_Air
      },
      {
        "name":"Total_Injured_Persons_On_Demand_Air_Taxi",
        "nameSpanish":"Total de personas lesionadas en aviacion tipo taxis",
        "value":INJURIES[i].Total_Injured_Persons_On_Demand_Air_Taxi
      },
      {
        "name":"Total_Injured_Persons_US_Air_Carrier",
        "nameSpanish":"Total de personas lesionadas en Aerolínea Estadounidense",
        "value":INJURIES[i].Total_Injured_Persons_US_Air_Carrier
      },
      {
        "name":"Total_Injured_Persons_General_Aviation",
        "nameSpanish":"Total de personas lesionadas en Aerolínea no Estadounidense",
        "value":INJURIES[i].Total_Injured_Persons_General_Aviation
      }];

    //data para transporete terrestre
    let land=[
    {
      "name":"Total_Injured_Persons_Pedalcyclists",
      "nameSpanish":"Total de personas lesionadas en bicicleta",
      "value":INJURIES[i].Total_Injured_Persons_Pedalcyclists
    },

    {
      "name":"Total_Injured_Persons_Motorcyclists",
      "nameSpanish":"Total de personas lesionadas en motocicleta",
      "value":INJURIES[i].Total_Injured_Persons_Motorcyclists
    },
    {
      "name":"Total_Injured_Persons_Passenger_Car_Occupants",
      "nameSpanish":"Total de personas lesionadas ocupamtes de un carro",
      "value":INJURIES[i].Total_Injured_Persons_Passenger_Car_Occupants
    },
    {
      "name":"Total_Injured_Persons_Bus_Occupants",
      "nameSpanish":"Total de personas lesionadas ocupamtes de un bus",
      "value":INJURIES[i].Total_Injured_Persons_Bus_Occupants
    },
    {
      "name":"Total_Injured_Persons_Rail",
      "nameSpanish":"Total de personas lesionadas ocupamtes de un tren",
      "value":INJURIES[i].Total_Injured_Persons_Rail
    }];
    //data para transporete terrestre
    let water=[
      {
        "name":"Total_Injured_Persons_Passenger_Vessel",
        "nameSpanish":"Total de personas lesionadas ocupantes de embarcaciones",
        "value":INJURIES[i].Total_Injured_Persons_Passenger_Vessel
      },
      {
        "name":"Total_Injured_Persons_Recreational_Boating",
        "nameSpanish":"Total de personas lesionadas en embarcaciones de recreo",
        "value":INJURIES[i].Total_Injured_Persons_Recreational_Boating
      },
      {
        "name":"Total_Injured_Persons_Water_Vessel_Related",
        "nameSpanish":"Total de personas lesionadas en embarcaciones de recreo",
        "value":INJURIES[i].Total_Injured_Persons_Water_Vessel_Related
      },
      
      {
        "name":"Total_Injured_Persons_Water",
        "nameSpanish":"Total de personas lesionadas en embarcaciones de recreo",
        "value":INJURIES[i].Total_Injured_Persons_Water
      }];
      
      
      dataModified.set(year,{water,air,land});
    } 
  } 
   
    
 


