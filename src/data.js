/*global loadData INJURIES Map Chart:true*/

/*eslint no-undef: "error"*/
let dataModified = new Map();

function loadData(){
  
    for (let i=0; i<INJURIES.length; i++){
  
  let year= INJURIES[i].Year.substring(0,4);
     
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
     "Total_Injured_Persons_Water":INJURIES[i].Total_Injured_Persons_Water};
         
      dataModified.set(year,{water,air,land});
    
  }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
}


//Función que crea los gráficos para Incidencias Aéreas
let airGraphGen = new Chart(airGraph, {
  type:'bar', //puede ser bar, horizontalBar, pie, line, doughnut, radar, polarArea
  data:{
    labels : ['Ejemplo1', 'Ejemplo2', 'Ejemplo3', 'Ejemplo4', 'Ejemplo5', 'Ejemplo6'],
    datasets : [{
      label:'DatosEjemplo1',
      data:[
        134,
        145,
        101,
        200,
        170

      ]
    }]
  },

  options:{}


});

//airGraph 

//Función que crea los gráficos para Incidencias Terrestres

//landGraph

//Función que crea los gráficos para Incidencias Acuáticas

//waterGraph