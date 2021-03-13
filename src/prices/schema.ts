export interface Price {
  id: number;
  stationId: number;
  commodityId: number;
  supply: number;
  supplyBracket: number;
  buyPrice: number;
  sellPrice: number;
  demand: number;
  demandBracket: number;
  collectedAt: number;
}

export interface RemotePrice {
  id: string;
  station_id: string;
  commodity_id: string;
  supply: string;
  supply_bracket: string;
  buy_price: string;
  sell_price: string;
  demand: string;
  demand_bracket: string;
  collected_at: string;
}
