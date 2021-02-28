import { StationID } from 'stations/schema';
import { CommodityID } from 'commodities/schema';

export type PriceID = number;

export interface Price {
  id: PriceID,
  stationID: StationID,
  commodityID: CommodityID,
  supply: number,
  supplyBucket: number,
  buyPrice: number,
  sellPrice: number,
  demand: number,
  demandBracket: number,
  collectedAt: number,
}
