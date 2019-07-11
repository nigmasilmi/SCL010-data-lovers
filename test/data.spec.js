global.window = global;
global.assert = require('chai').assert;
require('../src/data/injuries/injuries.js');
require('../src/data.js');
require('./data.spec.js');

describe('data', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof data, 'object');
  });

  describe('data.dataModified', () => {

    it('debería ser una objeto', () => {
      assert.equal(typeof data.dataModified, 'object');
    });
  });

  describe('data.loadData', () => {

    it('debería ser una función', () => {
      assert.equal(typeof data.loadData, 'function');
    });

    it('debería dataModified tener del mismo tamaño que la data INJURIES', () => {
      data.loadData();
      assert.equal(INJURIES.length, data.dataModified.size);
    });
    it('debería retornar los incidentes según el medio seleccionado', () => {
      data.loadData();
      assert.deepEqual(data.dataModified.get("1960").water,
        [{
          "name": "Total_Injured_Persons_Passenger_Vessel",
          "nameSpanish": "Embarcaciones de carga",
          "value": INJURIES[0].Total_Injured_Persons_Passenger_Vessel
        },
        {
          "name": "Total_Injured_Persons_Water_Vessel_Related",
          "nameSpanish": "Relacionadas con embarcaciones de carga",
          "value": INJURIES[0].Total_Injured_Persons_Water_Vessel_Related
        },
        {
          "name": "Total_Injured_Persons_Recreational_Boating",
          "nameSpanish": "Botes de recreo",
          "value": INJURIES[0].Total_Injured_Persons_Recreational_Boating
        },
        {
          "name": "Total_Injured_Persons_Water",
          "nameSpanish": "Embarcaciones de recreo",
          "value": INJURIES[0].Total_Injured_Persons_Water
        }
        ]);
    });
  });


  describe('data.percent', () => {

    it('debería ser una función', () => {
      assert.equal(typeof data.percent, 'function');
    });
    it('debería retornar el prociento según el medio de tranporte y el año seleccionado', () => {
      assert.deepEqual(data.percent("2016,2015,2014,2013,2012,2011"), {
        percentair: "0.05",
        percentland: "99.42",
        percentWater: "0.53"
      });
    });

  });

  describe('data.changeYearsToList', () => {

    it('debería ser una función', () => {
      assert.equal(typeof data.changeYearsToList, 'function');
    });
    it('debería retornar un arreglo cuando lo paso un string de años', () => {
      assert.deepEqual(data.changeYearsToList("2016,2015,2014,2013,2012,2011"), ["2016", "2015", "2014", "2013", "2012", "2011"]);
    });
  });
});
