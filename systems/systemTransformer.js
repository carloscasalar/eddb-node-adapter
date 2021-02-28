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
        happiness_id: happinessId,
        influence,
        state: factionState,
        active_states:activeStates,
        pending_states:pendingStates,
        recovering_states:recoveringStates,
      }) => ({
        minorFactionId,
        stateId: factionStateId,
        happinessId,
        influence,
        state: factionState,
        activeStates,
        pendingStates,
        recoveringStates,
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
