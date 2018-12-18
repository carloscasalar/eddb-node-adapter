const { newDummyReadStream, newDummyWriteStream } = require('../test/dummyStreams');

const commodityTransformer = require('./commodityTransformer');

describe('commodityTransformer tests', () => {
  test('should transform underscore attributes into camelcase ones', (done) => {
    // eslint-disable-next-line
    let transformedCommodity = {};

    const readStream = newDummyReadStream();
    readStream.push({
      'id': 335,
      'name': 'Time Capsule',
      'category_id': 16,
      'average_price': 4055,
      'is_rare': 1,
      'max_buy_price': 100,
      'max_sell_price': 5223,
      'min_buy_price': 50,
      'min_sell_price': 428,
      'buy_price_lower_average': 0,
      'sell_price_upper_average': 5038,
      'is_non_marketable': 0,
      'ed_id': 128672163,
      'category': { 'id': 16, 'name': 'Salvage' }
    });
    readStream.push(null);

    const writeStream = newDummyWriteStream((data) => transformedCommodity = data);

    const fullStream = readStream
      .pipe(commodityTransformer)
      .pipe(writeStream);

    fullStream.on('end', () => {
      expect(transformedCommodity).toEqual({
        'id': 335,
        'name': 'Time Capsule',
        'averagePrice': 4055,
        'isRare': true,
        'maxBuyPrice': 100,
        'maxSellPrice': 5223,
        'minBuyPrice': 50,
        'minSellPrice': 428,
        'buyPriceLowerAverage': 0,
        'sellPriceUpperAverage': 5038,
        'isNonMarketable': false,
        'edId': 128672163,
        'category': { 'id': 16, 'name': 'Salvage' }
      });
      done();
    });

    fullStream.on('error', (err) => done(err));

  });
});
