import { Price, RemotePrice } from 'prices/schema'
import { Transform } from 'stronger-typed-streams'

type TransformCallback = (error?: Error | null, price?: Price) => void;
type PriceTransformer = (
  price: RemotePrice,
  chunk: unknown,
  done: TransformCallback,
) => void;
const transform: PriceTransformer = (price, _, done) => {
  const {
    id: idStr,
    station_id: stationIdStr,
    commodity_id: commodityIdStr,
    supply: supplyStr,
    supply_bracket: supplyBracketStr,
    buy_price: buyPriceStr,
    sell_price: sellPriceStr,
    demand: demandStr,
    demand_bracket: demandBracketStr,
    collected_at: collectedAtStr,
    ...unexpectedAttributes
  } = price

  const id = parseInt(idStr)
  const stationId = parseInt(stationIdStr)
  const commodityId = parseInt(commodityIdStr)
  const supply = parseInt(supplyStr)
  const supplyBracket = parseInt(supplyBracketStr)
  const buyPrice = parseInt(buyPriceStr)
  const sellPrice = parseInt(sellPriceStr)
  const demand = parseInt(demandStr)
  const demandBracket = parseInt(demandBracketStr)
  const collectedAt = parseInt(collectedAtStr)

  done(null, {
    id,
    stationId,
    commodityId,
    supply,
    supplyBracket,
    buyPrice,
    sellPrice,
    demand,
    demandBracket,
    collectedAt,
    ...unexpectedAttributes
  })
}

export const priceTransformer = new Transform<RemotePrice, Price>({
  objectMode: true,
  transform
})
