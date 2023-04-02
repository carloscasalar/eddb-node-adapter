import zlib from 'zlib'
import got from 'got'
import JSONStream from 'JSONStream'

import { commodityTransformer } from './commodityTransformer'
import defaultConfig from '../config/config.json' assert { type: 'json' }
import { Readable } from 'stronger-typed-streams'
import { Commodity } from './schema'

export class CommoditiesLoader {
  constructor (private url = defaultConfig.eddbapi.commodities.url) {}

  stream (): Readable<Commodity> {
    const unzipStream = zlib.createGunzip()
    const { url } = this
    const { headers } = defaultConfig
    return got.stream(url, { headers, decompress: false })
      .pipe(unzipStream)
      .pipe(JSONStream.parse('*'))
      .pipe(commodityTransformer)
  }
}
