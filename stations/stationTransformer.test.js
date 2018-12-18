'use strict';

const { newDummyReadStream, newDummyWriteStream } = require('../test/dummyStreams');

const stationTransformer = require('./stationTransformer');

describe('stationTransformer tests', () => {
  test('should transform underscore attributes into camelcase ones', (done) => {
    let transformedCommodity = {};

    const readStream = newDummyReadStream();
    readStream.push({
      id: 35580,
      name: 'Cherry Hub',
      system_id: 5957,
      updated_at: 1534561688,
      max_landing_pad_size: 'M',
      distance_to_star: 2162,
      government_id: 64,
      government: 'Corporate',
      allegiance_id: 4,
      allegiance: 'Independent',
      state_id: 64,
      state: 'Civil War',
      type_id: 6,
      type: 'Mining Outpost',
      has_blackmarket: false,
      has_market: true,
      has_refuel: true,
      has_repair: true,
      has_rearm: false,
      has_outfitting: true,
      has_shipyard: false,
      has_docking: true,
      has_commodities: true,
      import_commodities: [ 'Polymers', 'Aluminium', 'H.E. Suits' ],
      export_commodities: [ 'Hydrogen Fuel', 'Slaves', 'Scrap' ],
      prohibited_commodities:
        [ 'Narcotics',
          'Combat Stabilisers',
          'Slaves',
          'Battle Weapons',
          'Toxic Waste',
          'Thargoid Scout Tissue Sample' ],
      economies: [ 'Extraction', 'Industrial' ],
      shipyard_updated_at: 1534561638,
      outfitting_updated_at: 1502974010,
      market_updated_at: 1502974310,
      is_planetary: false,
      selling_ships: [155],
      selling_modules: [ 738,739,740],
      settlement_size_id: 64,
      settlement_size: '+++',
      settlement_security_id: 1,
      settlement_security: 'Low',
      body_id: 1502417,
      controlling_minor_faction_id: 55468
    });
    readStream.push(null);

    const writeStream = newDummyWriteStream((data) => transformedCommodity = data);

    const fullStream = readStream
      .pipe(stationTransformer)
      .pipe(writeStream);

    fullStream.on('end', () => {
      expect(transformedCommodity).toEqual({
        id: 35580,
        name: 'Cherry Hub',
        systemId: 5957,
        updatedAt: 1534561688,
        maxLandingPadSize: 'M',
        distanceToStar: 2162,
        governmentId: 64,
        government: 'Corporate',
        allegianceId: 4,
        allegiance: 'Independent',
        stateId: 64,
        state: 'Civil War',
        typeId: 6,
        type: 'Mining Outpost',
        hasBlackMarket: false,
        hasMarket: true,
        hasRefuel: true,
        hasRepair: true,
        hasRearm: false,
        hasOutfitting: true,
        hasShipyard: false,
        hasDocking: true,
        hasCommodities: true,
        importCommodities: [ 'Polymers', 'Aluminium', 'H.E. Suits' ],
        exportCommodities: [ 'Hydrogen Fuel', 'Slaves', 'Scrap' ],
        prohibitedCommodities:
          [ 'Narcotics',
            'Combat Stabilisers',
            'Slaves',
            'Battle Weapons',
            'Toxic Waste',
            'Thargoid Scout Tissue Sample' ],
        economies: [ 'Extraction', 'Industrial' ],
        shipyardUpdatedAt: 1534561638,
        outfittingUpdatedAt: 1502974010,
        marketUpdatedAt: 1502974310,
        isPlanetary: false,
        sellingShips: [155],
        sellingModules: [ 738,739,740],
        settlementSizeId: 64,
        settlementSize: '+++',
        settlementSecurityId: 1,
        settlementSecurity: 'Low',
        bodyId: 1502417,
        controllingMinorFactionId: 55468
      });
      done();
    });

    fullStream.on('error', (err) => done(err));

  });
});
