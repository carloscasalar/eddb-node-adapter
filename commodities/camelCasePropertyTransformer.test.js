'use strict';

const { newDummyReadStream, newDummyWriteStream } = require('../test/dummyStreams');

const camelCasePropertyTransformer = require('./camelCasePropertyTransformer');

describe('camelCasePropertyTransformer tests', () => {
  test('should transform underscore attributes into camelcase ones', (done) => {
    // eslint-disable-next-line
    let transformedCommodity = {};

    const readStream = newDummyReadStream();
    readStream.push({
      'id': 335,
      'name': 'Time Capsule',
      'category_id': 16,
      'average_price': 4055,
      'is_rare': 0,
      'max_buy_price': null,
      'max_sell_price': 5223,
      'min_buy_price': null,
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
      .pipe(camelCasePropertyTransformer)
      .pipe(writeStream);

    fullStream.on('end', () => {
      expect(transformedCommodity).toEqual({
        'id': 335,
        'name': 'Time Capsule',
        'averagePrice': 4055,
        'isRare': 0,
        'maxBuyPrice': null,
        'maxSellPrice': 5223,
        'minBuyPrice': null,
        'minSellPrice': 428,
        'buyPriceLowerAverage': 0,
        'sellPriceUpperAverage': 5038,
        'isNonMarketable': 0,
        'edId': 128672163,
        'category': { 'id': 16, 'name': 'Salvage' }
      });
      done();
    });

    fullStream.on('error', (err) => done(err));

  });
});
