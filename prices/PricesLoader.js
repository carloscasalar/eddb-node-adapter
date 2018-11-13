'use strict';

const zlib = require('zlib');
const request = require('request');
const csv = require('csv-streamify');

const defaultConfig = require('../config/config');

class PricesLoader {
  constructor(url = defaultConfig.eddbapi.prices.url) {
    this.url = url;
  }

  stream() {
    const unzipStream = zlib.createGunzip();
    const { url } = this;
    const { headers } = defaultConfig;
    const csvStreamer = csv({ columns: true });

    return request({ url, headers })
      .pipe(unzipStream)
      .pipe(csvStreamer);
  }
}

module.exports = PricesLoader;
