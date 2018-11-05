'use strict';

const zlib = require('zlib');
const request = require('request');
const JSONStream = require('JSONStream');

const camelCasePropertyTransformer = require('./camelCasePropertyTransformer');
const defaultConfig = require('../config/config');

class CommoditiesLoader {
  constructor(url = defaultConfig.eddbapi.commodities.url) {
    this.url = url;
  }

  stream() {
    const unzip_stream = zlib.createGunzip();
    const { url } = this;
    const { headers } = defaultConfig;
    return request({ url, headers })
      .pipe(unzip_stream)
      .pipe(JSONStream.parse('*'))
      .pipe(camelCasePropertyTransformer);
  }
}

module.exports = CommoditiesLoader;
