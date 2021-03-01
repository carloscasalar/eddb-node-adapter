import {Readable, Stream, Writable} from 'stream';

export const newDummyReadStream = ():Stream => new Readable({
  objectMode: true,
  // eslint-disable-next-line no-empty-function,@typescript-eslint/no-empty-function
  read: () =>{},
});

export type SaveIncomingChunkFn<DataType> = (data: DataType) => void
export const newDummyWriteStream = <DataType>(saveIncomingChunkFn: SaveIncomingChunkFn<DataType>):Stream => new Writable({
  objectMode: true,
  write(data: DataType) {
    if(saveIncomingChunkFn)
      saveIncomingChunkFn(data);

    this.emit('end');
  },
});
