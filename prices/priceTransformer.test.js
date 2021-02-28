const { newDummyReadStream, newDummyWriteStream } = require('../test/dummyStreams');

const priceTransformer = require('./priceTransformer');

describe('priceTransformer tests', () => {
  test('should transform underscore attributes into camelcase ones', (done) => {
    // eslint-disable-next-line
    let transformedPrice = {};

    const readStream = newDummyReadStream();
    readStream.push({
      id: '11120590',
      station_id: '63',
      commodity_id: '313',
      supply: '0',
      supply_bracket: '0',
      buy_price: '0',
      sell_price: '8427',
      demand: '50',
      demand_bracket: '3',
      collected_at: '1541874378',
    });
    readStream.push(null);

    const writeStream = newDummyWriteStream((data) => transformedPrice = data);

    const fullStream = readStream
      .pipe(priceTransformer)
      .pipe(writeStream);

    fullStream.on('end', () => {
      expect(transformedPrice).toEqual({
        id: 11120590,
        stationId: 63,
        commodityId: 313,
        supply: 0,
        supplyBracket: 0,
        buyPrice: 0,
        sellPrice: 8427,
        demand: 50,
        demandBracket: 3,
        collectedAt: 1541874378,
      });
      done();
    });

    fullStream.on('error', (err) => done(err));

  });
});
