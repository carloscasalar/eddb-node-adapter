import zlib from 'zlib'
import csv from 'csv-streamify'
import got from 'got'

import defaultConfig from '../config/config.json' assert { type: 'json' }
import { priceTransformer } from './priceTransformer'
import { Readable } from 'stronger-typed-streams'
import { Price } from './schema'

export class PricesLoader {
  constructor (private url = defaultConfig.eddbapi.prices.url) {}

  stream (): Readable<Price> {
    const unzipStream = zlib.createGunzip()
    const { url } = this
    const { headers } = defaultConfig
    const csvStreamer = csv({ columns: true })

    return got.stream(url, { headers, decompress: false })
      .pipe(unzipStream)
      .pipe(csvStreamer)
      .pipe(priceTransformer)
  }
}
