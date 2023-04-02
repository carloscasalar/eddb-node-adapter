import { SettlementSecurity, SettlementSize } from '../settlements/schema'

// TODO find all distinct pad sizes
export type LandingPadSize = 'M';

export interface Station {
  id: number;
  name: string;
  systemId: number;
  updatedAt: number;
  maxLandingPadSize: LandingPadSize;
  distanceToStar: number;
  governmentId: number;
  government: string;
  allegianceId: number;
  allegiance: string;
  states: string[];
  typeId: number;
  type: string;
  hasBlackMarket: boolean;
  hasMarket: boolean;
  hasRefuel: boolean;
  hasRepair: boolean;
  hasRearm: boolean;
  hasOutfitting: boolean;
  hasShipyard: boolean;
  hasDocking: boolean;
  hasCommodities: boolean;
  importCommodities: string[];
  exportCommodities: string[];
  prohibitedCommodities: string[];
  economies: string[];
  shipyardUpdatedAt: number;
  outfittingUpdatedAt: number;
  marketUpdatedAt: number;
  isPlanetary: boolean;
  sellingShips: number[];
  sellingModules: number[];
  settlementSizeId: number;
  settlementSize: SettlementSize;
  settlementSecurityId: number;
  settlementSecurity: SettlementSecurity;
  bodyId: number;
  controllingMinorFactionId: number;
}

export interface RemoteStation {
  id: number;
  name: string;
  system_id: number;
  updated_at: number;
  max_landing_pad_size: string;
  distance_to_star: number;
  government_id: number;
  government: string;
  allegiance_id: number;
  allegiance: string;
  states: string[];
  type_id: number;
  type: string;
  has_blackmarket: boolean;
  has_market: boolean;
  has_refuel: boolean;
  has_repair: boolean;
  has_rearm: boolean;
  has_outfitting: boolean;
  has_shipyard: boolean;
  has_docking: boolean;
  has_commodities: boolean;
  import_commodities: string[];
  export_commodities: string[];
  prohibited_commodities: string[];
  economies: string[];
  shipyard_updated_at: number;
  outfitting_updated_at: number;
  market_updated_at: number;
  is_planetary: boolean;
  selling_ships: number[];
  selling_modules: number[];
  settlement_size_id: number;
  settlement_size: string;
  settlement_security_id: number;
  settlement_security: string;
  body_id: number;
  controlling_minor_faction_id: number;
}
