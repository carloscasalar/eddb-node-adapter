import { Readable } from 'stream';
import zlib from 'zlib';
import request from 'request';
import JSONStream from 'JSONStream';
import defaultConfig from '../config/config.json';
import { systemTransformer } from './systemTransformer';

export class PopulatedSystemsLoader {
  constructor(private url = defaultConfig.eddbapi.populatedSystems.url) {}

  stream(): Readable {
    const unzipStream = zlib.createGunzip();
    const { url } = this;
    const { headers } = defaultConfig;
    return request({ url, headers }).pipe(unzipStream).pipe(JSONStream.parse('*')).pipe(systemTransformer);
  }
}
