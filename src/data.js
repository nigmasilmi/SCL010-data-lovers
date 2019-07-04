/* Manejo de data 

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

const example = () => {
  return 'example';
};

window.example = example;*/

//Haciendo lista de la Data
var dataModified = new Map();
var container=[];

function loadData(){
let year=null;
 
 for (let i=0; i<INJURIES.length; i++){
 
   year= INJURIES[i].Year.substring(0,4);
    
   //data para transporete aereo
   let air= 
     {"Total_Injured_Persons_Air":INJURIES[i].Total_Injured_Persons_Air,
     "Total_Injured_Persons_US_Air_Carrier":INJURIES[i].Total_Injured_Persons_US_Air_Carrier,
     "Total_Injured_Persons_General_Aviation":INJURIES[i].Total_Injured_Persons_General_Aviation,
     "Total_Injured_Persons_On_Demand_Air_Taxi":INJURIES[i].Total_Injured_Persons_On_Demand_Air_Taxi};
   

   //data para transporete terrestre
   let land=
     {"Total_Injured_Persons_Pedalcyclists":INJURIES[i].Total_Injured_Persons_Pedalcyclists,
     "Total_Injured_Persons_Motorcyclists":INJURIES[i].Total_Injured_Persons_Motorcyclists,
     "Total_Injured_Persons_Passenger_Car_Occupants":INJURIES[i].Total_Injured_Persons_Passenger_Car_Occupants,
     "Total_Injured_Persons_Bus_Occupants":INJURIES[i].Total_Injured_Persons_Bus_Occupants,
     "Total_Injured_Persons_Rail":INJURIES[i].Total_Injured_Persons_Rail};

   //data para transporete terrestre
   let water=
    {"Total_Injured_Persons_Passenger_Vessel":INJURIES[i].Total_Injured_Persons_Passenger_Vessel,
    "Total_Injured_Persons_Recreational_Boating":INJURIES[i].Total_Injured_Persons_Recreational_Boating,
    "Total_Injured_Persons_Water_Vessel_Related":INJURIES[i].Total_Injured_Persons_Water_Vessel_Related,
     "Total_Injured_Persons_Water":INJURIES[i].Total_Injured_Persons_Water};33.
   
    
     dataModified.set(year,{
       water,
       air,
       land
     });
    //container.push(dataModified);
    // console.log(container);
    //console.log(dataModified);
    //console.log(year); 
 }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
}

