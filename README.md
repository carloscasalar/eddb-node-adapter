# eddb node adapter [![CircleCI](https://circleci.com/gh/carloscasalar/eddb-node-adapter.svg?style=svg)](https://circleci.com/gh/carloscasalar/eddb-node-adapter) [![Codacy Badge](https://api.codacy.com/project/badge/Grade/4c2d34ee7c47482d90c7e22d945a960a)](https://www.codacy.com/app/castillo.st/eddb-node-adapter?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=carloscasalar/eddb-node-adapter&amp;utm_campaign=Badge_Grade)
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
 
