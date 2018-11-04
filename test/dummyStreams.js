'use strict';

const { Readable, Writable } = require('stream');

const newDummyReadStream = () => new Readable({
  objectMode: true,
  // eslint-disable-next-line
  read() {}
});

const newDummyWriteStream = (saveIncomingChunkFn) => new Writable({
  objectMode: true,
  write(data) {
    if(saveIncomingChunkFn)
      saveIncomingChunkFn(data);

    this.emit('end');
  }
});

module.exports = {
  newDummyReadStream,
  newDummyWriteStream
};
