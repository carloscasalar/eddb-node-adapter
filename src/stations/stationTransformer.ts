import { Transform } from 'stronger-typed-streams'
import { LandingPadSize, RemoteStation, Station } from './schema'
import { SettlementSecurity, SettlementSize } from '../settlements/schema'

type TransformCallback = (error?: Error | null, station?: Station) => void;
type StationTransformer = (
  station: RemoteStation,
  chunk: unknown,
  done: TransformCallback,
) => void;

const transform: StationTransformer = (station, _, done) => {
  const {
    id,
    name,
    system_id: systemId,
    updated_at: updatedAt,
    max_landing_pad_size: maxLandingPadSize,
    distance_to_star: distanceToStar,
    government_id: governmentId,
    government,
    allegiance_id: allegianceId,
    allegiance,
    states,
    type_id: typeId,
    type,
    has_blackmarket: hasBlackMarket,
    has_market: hasMarket,
    has_refuel: hasRefuel,
    has_repair: hasRepair,
    has_rearm: hasRearm,
    has_outfitting: hasOutfitting,
    has_shipyard: hasShipyard,
    has_docking: hasDocking,
    has_commodities: hasCommodities,
    import_commodities: importCommodities,
    export_commodities: exportCommodities,
    prohibited_commodities: prohibitedCommodities,
    economies,
    shipyard_updated_at: shipyardUpdatedAt,
    outfitting_updated_at: outfittingUpdatedAt,
    market_updated_at: marketUpdatedAt,
    is_planetary: isPlanetary,
    selling_ships: sellingShips,
    selling_modules: sellingModules,
    settlement_size_id: settlementSizeId,
    settlement_size: settlementSize,
    settlement_security_id: settlementSecurityId,
    settlement_security: settlementSecurity,
    body_id: bodyId,
    controlling_minor_faction_id: controllingMinorFactionId,
    ...unexpectedAttributes
  } = station

  done(null, {
    id,
    name,
    systemId,
    updatedAt,
    maxLandingPadSize: maxLandingPadSize as LandingPadSize,
    distanceToStar,
    governmentId,
    government,
    allegianceId,
    allegiance,
    states,
    typeId,
    type,
    hasBlackMarket,
    hasMarket,
    hasRefuel,
    hasRepair,
    hasRearm,
    hasOutfitting,
    hasShipyard,
    hasDocking,
    hasCommodities,
    importCommodities,
    exportCommodities,
    prohibitedCommodities,
    economies,
    shipyardUpdatedAt,
    outfittingUpdatedAt,
    marketUpdatedAt,
    isPlanetary,
    sellingShips,
    sellingModules,
    settlementSizeId,
    settlementSize: settlementSize as SettlementSize,
    settlementSecurityId,
    settlementSecurity: settlementSecurity as SettlementSecurity,
    bodyId,
    controllingMinorFactionId,
    ...unexpectedAttributes
  })
}

export const stationTransformer = new Transform<RemoteStation, Station>({
  objectMode: true,
  transform
})
