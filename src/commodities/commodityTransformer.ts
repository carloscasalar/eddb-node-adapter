import { Commodity, RemoteCommodity } from './schema';
import { Transform } from 'stronger-typed-streams';

type TransformerCallback = (error: Error | null, commodity: Commodity) => void;
type CommodityTransformer = (
  commodity: RemoteCommodity,
  chunk: unknown,
  done: TransformerCallback,
) => void;
const transform: CommodityTransformer = (commodity, _, done) => {
  const {
    id: idStr,
    name,
    category_id: categoryIdStr,
    average_price: averagePrice,
    is_rare,
    max_buy_price: maxBuyPrice,
    max_sell_price: maxSellPrice,
    min_buy_price: minBuyPrice,
    min_sell_price: minSellPrice,
    buy_price_lower_average: buyPriceLowerAverage,
    sell_price_upper_average: sellPriceUpperAverage,
    is_non_marketable,
    ed_id: edId,
    category,
  } = commodity;

  const id = parseInt(idStr);
  const categoryId = parseInt(categoryIdStr);
  const isRare = is_rare === 1;
  const isNonMarketable = is_non_marketable === 1;

  done(null, {
    id,
    name,
    categoryId,
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
    category,
  });
};

export const commodityTransformer = new Transform<RemoteCommodity, Commodity>({
  objectMode: true,
  transform,
});
