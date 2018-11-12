'use strict';

const { PopulatedSystems } = require('../');

const populatedSystems = new PopulatedSystems();

const time = process.hrtime();
const loadStream = populatedSystems.stream();

loadStream.on('data', (system) => console.dir(system, { depth: null, colors: true }));
loadStream.on('error', (err) => console.log('unexpected error', err));
loadStream.on('end', () => {
  const [seconds, nanoseconds] = process.hrtime(time);
  console.log('Stream finished in %d seconds and %d nanoseconds', seconds, nanoseconds);
});
