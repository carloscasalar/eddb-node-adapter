import { newDummyReadStream, newDummyWriteStream } from '../test/dummyStreams'

import { systemTransformer } from './systemTransformer'
import { System } from './schema'

describe('systemTransformer tests', () => {
  test('should transform underscore attributes into camelcase ones', (done) => {
    // eslint-disable-next-line
    let transformedSystem = {};

    const readStream = newDummyReadStream()
    readStream.push({
      id: 17797994,
      edsm_id: 22972695,
      name: 'Nyeajaae VU-Y a27-9',
      x: -3374,
      y: -42.375,
      z: 6907.96875,
      population: 0,
      is_populated: true,
      government_id: 208,
      government: 'Prison',
      allegiance_id: 4,
      allegiance: 'Independent',
      states: ['None'],
      security_id: 64,
      security: 'Anarchy',
      primary_economy_id: 10,
      primary_economy: 'None',
      power: 'Yuri Grom',
      power_state: 'Exploited',
      power_state_id: 32,
      needs_permit: false,
      updated_at: 333,
      simbad_ref: 'abc',
      controlling_minor_faction_id: 75876,
      controlling_minor_faction: 'Independent Detention Foundation',
      reserve_type_id: 3,
      reserve_type: 'Common',
      minor_faction_presences: [
        {
          minor_faction_id: 75876,
          happiness_id: 1,
          influence: 0,
          active_states: [{ id: 67, name: 'Expansion' }],
          pending_states: [{ id: 67, name: 'Expansion' }],
          recovering_states: [{ id: 67, name: 'Expansion' }]
        }
      ]
    })
    readStream.push(null)

    const writeStream = newDummyWriteStream<System>(
      (data) => (transformedSystem = data)
    )

    const fullStream = readStream.pipe(systemTransformer).pipe(writeStream)

    fullStream.on('end', () => {
      expect(transformedSystem).toEqual({
        id: 17797994,
        edsmId: 22972695,
        name: 'Nyeajaae VU-Y a27-9',
        x: -3374,
        y: -42.375,
        z: 6907.96875,
        population: 0,
        isPopulated: true,
        governmentId: 208,
        government: 'Prison',
        allegianceId: 4,
        allegiance: 'Independent',
        states: ['None'],
        securityId: 64,
        security: 'Anarchy',
        primaryEconomyId: 10,
        primaryEconomy: 'None',
        power: 'Yuri Grom',
        powerState: 'Exploited',
        powerStateId: 32,
        needsPermit: false,
        updatedAt: 333,
        simbadRef: 'abc',
        controllingMinorFactionId: 75876,
        controllingMinorFaction: 'Independent Detention Foundation',
        reserveTypeId: 3,
        reserveType: 'Common',
        minorFactionPresences: [
          {
            minorFactionId: 75876,
            happinessId: 1,
            influence: 0,
            activeStates: [{ id: 67, name: 'Expansion' }],
            pendingStates: [{ id: 67, name: 'Expansion' }],
            recoveringStates: [{ id: 67, name: 'Expansion' }]
          }
        ]
      })
      done()
    })

    fullStream.on('error', (err) => done(err))
  })
})
