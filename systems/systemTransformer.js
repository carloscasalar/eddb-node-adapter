const { Transform } = require('stream');

const systemTransformer = new Transform({
  objectMode: true,
  transform(system, _, done) {
    const {
      id,
      edsm_id: edsmId,
      name,
      x,
      y,
      z,
      population,
      is_populated: isPopulated,
      government_id: governmentId,
      government,
      allegiance_id: allegianceId,
      allegiance,
      state_id: stateId,
      state,
      security_id: securityId,
      security,
      primary_economy_id: primaryEconomyId,
      primary_economy: primaryEconomy,
      power,
      power_state: powerState,
      power_state_id: powerStateId,
      needs_permit: needsPermit,
      updated_at: updatedAt,
      simbad_ref: simbadRef,
      controlling_minor_faction_id: controllingMinorFactionId,
      controlling_minor_faction: controllingMinorFaction,
      reserve_type_id: reserveTypeId,
      reserve_type: reserveType,
      minor_faction_presences,
      ...unexpectedAttributes
    } = system;

    const minorFactionPresences = minor_faction_presences
      .map(({
        minor_faction_id: minorFactionId,
        state_id: factionStateId,
        influence,
        state: factionState
      }) => ({
        minorFactionId,
        stateId: factionStateId,
        influence,
        state: factionState
      }));

    done(null, {
      id,
      edsmId,
      name,
      x,
      y,
      z,
      population,
      isPopulated,
      governmentId,
      government,
      allegianceId,
      allegiance,
      stateId,
      state,
      securityId,
      security,
      primaryEconomyId,
      primaryEconomy,
      power,
      powerState,
      powerStateId,
      needsPermit,
      updatedAt,
      simbadRef,
      controllingMinorFactionId,
      controllingMinorFaction,
      reserveTypeId,
      reserveType,
      minorFactionPresences,
      ...unexpectedAttributes
    })
  }
});

module.exports = systemTransformer;
