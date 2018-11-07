'use strict';

const zlib = require('zlib');
const request = require('request');
const JSONStream = require('JSONStream');

const defaultConfig = require('../config/config');

class PopulatedSystemsLoader {
  constructor(url = defaultConfig.eddbapi.populatedSystems.url) {
    this.url = url;
  }

  stream() {
    const unzip_stream = zlib.createGunzip();
    const { url } = this;
    const { headers } = defaultConfig;
    return request({ url, headers })
      .pipe(unzip_stream)
      .pipe(JSONStream.parse('*'));
  }
}

module.exports = PopulatedSystemsLoader;
