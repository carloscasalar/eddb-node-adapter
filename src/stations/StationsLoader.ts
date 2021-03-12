import { Readable } from 'stream';
import zlib from 'zlib';
import request from 'request';
import JSONStream from 'JSONStream';
import { stationTransformer } from './stationTransformer';
import defaultConfig from '../config/config.json';

export class StationsLoader {
  constructor(private url = defaultConfig.eddbapi.stations.url) {}

  stream(): Readable {
    const unzipStream = zlib.createGunzip();
    const { url } = this;
    const { headers } = defaultConfig;
    return request({ url, headers })
      .pipe(unzipStream)
      .pipe(JSONStream.parse('*'))
      .pipe(stationTransformer);
  }
}
