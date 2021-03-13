import { StationsLoader } from '../stations/StationsLoader';
import { Station } from '../stations/schema';

const stationsLoader = new StationsLoader();

const time = process.hrtime();
const loadStream = stationsLoader.stream();

loadStream.on('data', (station: Station) =>
  console.dir(station, { depth: null, colors: true }),
);
loadStream.on('error', (err: Error) => console.log('unexpected error', err));
loadStream.on('end', () => {
  const [seconds, nanoseconds] = process.hrtime(time);
  console.log(
    'Stream finished in %d seconds and %d nanoseconds',
    seconds,
    nanoseconds,
  );
});
