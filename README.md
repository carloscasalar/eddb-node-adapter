[![CircleCI](https://circleci.com/gh/carloscasalar/eddb-node-adapter.svg?style=svg)](https://circleci.com/gh/carloscasalar/eddb-node-adapter) [![Codacy Badge](https://api.codacy.com/project/badge/Grade/4c2d34ee7c47482d90c7e22d945a960a)](https://www.codacy.com/app/castillo.st/eddb-node-adapter?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=carloscasalar/eddb-node-adapter&amp;utm_campaign=Badge_Grade)
# eddb node adapter 
Node adapter for [EDDB API](https://eddb.io/api) v5.1.

## Install

    npm install ed-node-adapter --save

## Adapters

### Commodities

Adapter `CommoditiesLoader` is a class with a `stream` method that returns an stream witch emit a commodity in each 
chunk. The commodity is an object with a _shape_ like the one exposed in EDDB but with camel case attributes and 
with boolean attributes instead of 0/1 ones.

This is a commodity object example:
```json
{
  "id": 335,
  "name": "Time Capsule",
  "category": {
    "id": 16,
    "name": "Salvage"
  },
  "averagePrice": 4055,
  "isRare": false,
  "maxBuyPrice": null,
  "maxSellPrice": 5223,
  "minBuyPrice": null,
  "minSellPrice": 428,
  "buyPriceLowerAverage": 0,
  "sellPriceUpperAverage": 5038,
  "isNonMarketable": false,
  "edId": 128672163
}
```

This is an usage example:
```javascript
const { CommoditiesLoader } = require('eddb-node-adapter');
const commoditiesLoader = new CommoditiesLoader();

const loadStream = commoditiesLoader.stream();

loadStream.on('data', (commodity) => console.dir(commodity, { depth: null, colors: true }));
loadStream.on('error', (err) => console.log('unexpected error', err));
loadStream.on('end', () => console.log('Load finished'));
```

### Populated Systems

Adapter `PopulatedSystemsLoader` is a class with a `stream` method that returns an stream witch emit a populated system in each 
chunk. The system is an object with a _shape_ like the one exposed in EDDB but with camel case attributes.

This is a populated system object example:
```javascript
{ 
    id: 17517789,
    edsmId: 22592071,
    name: '14 Geminorum',
    x: 12.28125,
    y: 5.0625,
    z: -57.25,
    population: 36415759,
    isPopulated: true,
    governmentId: 96,
    government: 'Democracy',
    allegianceId: 3,
    allegiance: 'Federation',
    stateId: 80,
    state: 'None',
    securityId: 48,
    security: 'High',
    primaryEconomyId: 4,
    primaryEconomy: 'Industrial',
    power: 'Felicia Winters',
    powerState: 'Exploited',
    powerStateId: 32,
    needsPermit: false,
    updatedAt: 1541991880,
    simbadRef: '',
    controllingMinorFactionId: 3121,
    controllingMinorFaction: '15 Geminorum Democrats',
    reserveTypeId: 5,
    reserveType: 'Depleted',
    minorFactionPresences:
     [ { minorFactionId: 3121,
         stateId: 80,
         influence: 60.2,
         state: 'None' },
       { minorFactionId: 5669, stateId: 80, influence: 3, state: 'None' },
       { minorFactionId: 25195,
         stateId: 80,
         influence: 3,
         state: 'None' },
       { minorFactionId: 25197,
         stateId: 80,
         influence: 10.4,
         state: 'None' },
       { minorFactionId: 25198,
         stateId: 80,
         influence: 7,
         state: 'None' },
       { minorFactionId: 25199,
         stateId: 80,
         influence: 3,
         state: 'None' },
       { minorFactionId: 3362,
         stateId: 80,
         influence: 13.4,
         state: 'None' } ] 
}
```

This is an usage example:
```javascript
const { PopulatedSystems } = require('eddb-node-adapter');

const populatedSystems = new PopulatedSystems();

const time = process.hrtime();
const loadStream = populatedSystems.stream();

loadStream.on('data', (system) => console.dir(system, { depth: null, colors: true }));
loadStream.on('error', (err) => console.log('unexpected error', err));
loadStream.on('end', () => {
  const [seconds, nanoseconds] = process.hrtime(time);
  console.log('Stream finished in %d seconds and %d nanoseconds', seconds, nanoseconds);
});
```

### Prices

Adapter `PricesLoader` is a class with a `stream` method that returns an stream witch emit a price in each 
chunk. The price is an object with a _shape_ like the one exposed in EDDB but with camel case attributes and with
integer values instead of string ones.

This is a populated system object example:
```javascript
{ 
  id: 8094879,
  stationId: 116,
  commodityId: 2,
  supply: 0,
  supplyBracket: 0,
  buyPrice: 0,
  sellPrice: 125,
  demand: 42760,
  demandBracket: 1,
  collectedAt: 1542126307 
}
```

This is an usage example:
```javascript
const { PricesLoader } = require('eddb-node-adapter');

const pricesLoader = new PricesLoader();

const time = process.hrtime();
const loadStream = pricesLoader.stream();

loadStream.on('data', (price) => console.dir(price, { depth: null, colors: true }));
loadStream.on('error', (err) => console.log('unexpected error', err));
loadStream.on('end', () => {
  const [seconds, nanoseconds] = process.hrtime(time);
  console.log('Stream finished in %d seconds and %d nanoseconds', seconds, nanoseconds);
});
```
### Stations

Adapter `StationsLoader` is a class with a `stream` method that returns an stream witch emit an station in each 
chunk. The station is an object with a _shape_ like the one exposed in EDDB but with camel case attributes and with
integer values instead of string ones.

This is a station object example:
```javascript
{ id: 1378,
  name: 'Fabian Port',
  systemId: 9558,
  updatedAt: 1545073196,
  maxLandingPadSize: 'L',
  distanceToStar: 689,
  governmentId: 64,
  government: 'Corporate',
  allegianceId: 1,
  allegiance: 'Alliance',
  stateId: 67,
  state: 'Expansion',
  typeId: 8,
  type: 'Orbis Starport',
  hasBlackMarket: false,
  hasMarket: true,
  hasRefuel: true,
  hasRepair: true,
  hasRearm: true,
  hasOutfitting: true,
  hasShipyard: true,
  hasDocking: true,
  hasCommodities: true,
  importCommodities: [ 'Polymers', 'Aluminium', 'H.E. Suits' ],
  exportCommodities: [ 'Hydrogen Fuel', 'Slaves', 'Scrap' ],
  prohibitedCommodities:
   [ 'Narcotics',
     'Tobacco',
     'Combat Stabilisers',
     'Imperial Slaves',
     'Slaves',
     'Battle Weapons' ],
  economies: [ 'Refinery' ],
  shipyardUpdatedAt: 1543281128,
  outfittingUpdatedAt: 1543281128,
  marketUpdatedAt: 1543281128,
  isPlanetary: false,
  sellingShips:
   [ 'Adder',
     'Hauler',
     'Sidewinder Mk. I',
     'Type-9 Heavy',
     'Keelback',
     'Type-10 Defender',
     'Alliance Chieftain',
     'Alliance Crusader' ],
  sellingModules:
   [ 738,
     739,
     740,
     741,
     742 ],
  settlementSizeId: 64,
  settlementSize: '+++',
  settlementSecurityId: 1,
  settlementSecurity: 'Low',
  bodyId: 4419141,
  controllingMinorFactionId: 74921 
} 
```

This is an usage example:
```javascript
const { StationsLoader } = require('eddb-node-adapter');

const stationsLoader = new StationsLoader();

const time = process.hrtime();
const loadStream = stationsLoader.stream();

loadStream.on('data', (station) => console.dir(station, { depth: null, colors: true }));
loadStream.on('error', (err) => console.log('unexpected error', err));
loadStream.on('end', () => {
  const [seconds, nanoseconds] = process.hrtime(time);
  console.log('Stream finished in %d seconds and %d nanoseconds', seconds, nanoseconds);
}); 
```
