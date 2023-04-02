import zlib from 'zlib'
import request from 'request'
import JSONStream from 'JSONStream'
import defaultConfig from '../config/config.json' assert { type: 'json' }
import { systemTransformer } from './systemTransformer'
import { Readable } from 'stronger-typed-streams'
import { System } from './schema'

export class PopulatedSystemsLoader {
  constructor (private url = defaultConfig.eddbapi.populatedSystems.url) {}

  stream (): Readable<System> {
    const unzipStream = zlib.createGunzip()
    const { url } = this
    const { headers } = defaultConfig
    return request({ url, headers })
      .pipe(unzipStream)
      .pipe(JSONStream.parse('*'))
      .pipe(systemTransformer)
  }
}
