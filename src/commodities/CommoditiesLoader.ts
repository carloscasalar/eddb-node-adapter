import zlib from 'zlib';
import request from 'request';
import JSONStream from 'JSONStream';

import { commodityTransformer } from './commodityTransformer';
import defaultConfig from '../config/config.json';
import { Readable } from 'stronger-typed-streams';
import { Commodity } from './schema';

export class CommoditiesLoader {
  constructor(private url = defaultConfig.eddbapi.commodities.url) {}

  stream(): Readable<Commodity> {
    const unzipStream = zlib.createGunzip();
    const { url } = this;
    const { headers } = defaultConfig;
    return request({ url, headers })
      .pipe(unzipStream)
      .pipe(JSONStream.parse('*'))
      .pipe(commodityTransformer);
  }
}
