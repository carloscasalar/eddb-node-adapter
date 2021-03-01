import { StationId } from 'stations/schema';
import { CommodityId } from 'commodities/schema';

export type PriceId = number;

export interface Price {
  id: PriceId,
  stationId: StationId,
  commodityId: CommodityId,
  supply: number,
  supplyBracket: number,
  buyPrice: number,
  sellPrice: number,
  demand: number,
  demandBracket: number,
  collectedAt: number,
}

export interface RemotePrice {
  id: string,
  station_id: string,
  commodity_id: string,
  supply: string,
  supply_bracket: string,
  buy_price: string,
  sell_price: string,
  demand: string,
  demand_bracket: string,
  collected_at: string,
}
