'use strict';

const zlib = require('zlib');
const request = require('request');
const JSONStream = require('JSONStream');

const camelCasePropertyTransformer = require('./camelCasePropertyTransformer');

class CommoditiesLoader {
  constructor({ url, headers }) {
    this.url = url;
    this.headers = headers;
  }

  stream() {
    const unzip_stream = zlib.createGunzip();
    const { url, headers } = this;
    return request({ url, headers })
      .pipe(unzip_stream)
      .pipe(JSONStream.parse('*'))
      .pipe(camelCasePropertyTransformer);
  }
}

module.exports = CommoditiesLoader;
