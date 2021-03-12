import { CommoditiesLoader } from '../commodities/CommoditiesLoader';

const commoditiesLoader = new CommoditiesLoader();

const loadStream = commoditiesLoader.stream();

loadStream.on('data', (commodity) =>
  console.dir(commodity, { depth: null, colors: true }),
);
loadStream.on('error', (err) => console.log('unexpected error', err));
loadStream.on('end', () => console.log('Load finished'));
