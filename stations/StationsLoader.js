const zlib = require('zlib');
const request = require('request');
const JSONStream = require('JSONStream');

const stationTransformer = require('./stationTransformer');
const defaultConfig = require('../config/config');

class StationsLoader {
  constructor(url = defaultConfig.eddbapi.stations.url) {
    this.url = url;
  }

  stream() {
    const unzipStream = zlib.createGunzip();
    const { url } = this;
    const { headers } = defaultConfig;
    return request({ url, headers })
      .pipe(unzipStream)
      .pipe(JSONStream.parse('*'))
      .pipe(stationTransformer);
  }
}

module.exports = StationsLoader;
