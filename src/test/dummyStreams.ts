const { Readable, Writable } = require('stream');

export const newDummyReadStream = () => new Readable({
  objectMode: true,
  // eslint-disable-next-line no-empty-function
  read: () =>{},
});

export type SaveIncomingChunkFn<DataType> = (data: DataType) => void
export const newDummyWriteStream = <DataType>(saveIncomingChunkFn: SaveIncomingChunkFn<DataType>) => new Writable({
  objectMode: true,
  write(data: DataType) {
    if(saveIncomingChunkFn)
      saveIncomingChunkFn(data);

    this.emit('end');
  },
});
