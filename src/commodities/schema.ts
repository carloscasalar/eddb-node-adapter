export interface CommodityCategory {
  id: number;
  name: string;
}
export interface Commodity {
  id: number;
  name: string;
  categoryId: number;
  category: CommodityCategory;
  averagePrice: number;
  isRare: boolean;
  maxBuyPrice: number;
  maxSellPrice: number;
  minBuyPrice: number;
  minSellPrice: number;
  buyPriceLowerAverage: number;
  sellPriceUpperAverage: number;
  isNonMarketable: boolean;
  edId: string;
}

export interface RemoteCommodity {
  id: string;
  name: string;
  category_id: string;
  average_price: number;
  is_rare: 1 | 0;
  max_buy_price: number;
  max_sell_price: number;
  min_buy_price: number;
  min_sell_price: number;
  buy_price_lower_average: number;
  sell_price_upper_average: number;
  is_non_marketable: 1 | 0;
  ed_id: string;
  category: CommodityCategory;
}
