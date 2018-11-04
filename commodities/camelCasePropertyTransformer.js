'use strict';

const { Transform } = require('stream');

const camelCasePropertyTransformer = new Transform({
  objectMode: true,
  transform(commodity, _, done) {
    const {
      id,
      name,
      category_id: categoryId,
      average_price: averagePrice,
      is_rare: isRare,
      max_buy_price: maxBuyPrice,
      max_sell_price: maxSellPrice,
      min_buy_price: minBuyPrice,
      min_sell_price: minSellPrice,
      buy_price_lower_average: buyPriceLowerAverage,
      sell_price_upper_average: sellPriceUpperAverage,
      is_non_marketable: isNonMarketable,
      ed_id: edId,
      category,
      ...unexpectedAttributes
    } = commodity;
    done(null, {
      id,
      name,
      category,
      averagePrice,
      isRare,
      maxBuyPrice,
      maxSellPrice,
      minBuyPrice,
      minSellPrice,
      buyPriceLowerAverage,
      sellPriceUpperAverage,
      isNonMarketable,
      edId,
      ...unexpectedAttributes
    })
  }
});

module.exports = camelCasePropertyTransformer;
