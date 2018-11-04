'use strict';

const { eddbapi } = require('./config/config');
const CommoditiesLoader = require('./commodities/CommoditiesLoader');
const loader = new CommoditiesLoader(eddbapi.commodities);


const loadStream = loader.stream();
loadStream.on('data', (data) => console.log(JSON.stringify(data)));
loadStream.on('error', (err) => console.log('unexpected error', err));
loadStream.on('end', () => console.log('Load finished'));

