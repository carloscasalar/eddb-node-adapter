import { Readable } from 'stream';
import zlib from 'zlib';
import request from 'request';
import csv from 'csv-streamify';

import defaultConfig from '../config/config.json';
import { priceTransformer } from './priceTransformer';

export class PricesLoader {
  constructor(private url = defaultConfig.eddbapi.prices.url) {}

  stream(): Readable {
    const unzipStream = zlib.createGunzip();
    const { url } = this;
    const { headers } = defaultConfig;
    const csvStreamer = csv({ columns: true });

    return request({ url, headers }).pipe(unzipStream).pipe(csvStreamer).pipe(priceTransformer);
  }
}
