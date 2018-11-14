'use strict';

const zlib = require('zlib');
const request = require('request');
const JSONStream = require('JSONStream');

const defaultConfig = require('../config/config');
const systemTransformer = require('./systemTransformer');

class PopulatedSystemsLoader {
  constructor(url = defaultConfig.eddbapi.populatedSystems.url) {
    this.url = url;
  }

  stream() {
    const unzipStream = zlib.createGunzip();
    const { url } = this;
    const { headers } = defaultConfig;
    return request({ url, headers })
      .pipe(unzipStream)
      .pipe(JSONStream.parse('*'))
      .pipe(systemTransformer);
  }
}

module.exports = PopulatedSystemsLoader;
