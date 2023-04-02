import zlib from 'zlib'
import got from 'got'
import JSONStream from 'JSONStream'
import { stationTransformer } from './stationTransformer'
import defaultConfig from '../config/config.json' assert { type: 'json' }
import { Station } from './schema'
import { Readable } from 'stronger-typed-streams'

export class StationsLoader {
  constructor (private url = defaultConfig.eddbapi.stations.url) {}

  stream (): Readable<Station> {
    const unzipStream = zlib.createGunzip()
    const { url } = this
    const { headers } = defaultConfig
    return got.stream(url, { headers, decompress: false })
      .pipe(unzipStream)
      .pipe(JSONStream.parse('*'))
      .pipe(stationTransformer)
  }
}
