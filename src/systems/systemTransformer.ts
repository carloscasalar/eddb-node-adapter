import { Transform } from 'stream';
import { RemoteSystem, System } from './schema';

type TransformCallback = (error?: Error | null, system?: System) => void;
type SystemTransformer = (
  system: RemoteSystem,
  chunk: unknown,
  done: TransformCallback,
) => void;

const transform: SystemTransformer = (system, _, done) => {
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
    states,
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
  } = system;

  const minorFactionPresences = minor_faction_presences.map(
    ({
      minor_faction_id: minorFactionId,
      happiness_id: happinessId,
      influence,
      active_states: activeStates,
      pending_states: pendingStates,
      recovering_states: recoveringStates,
    }) => ({
      minorFactionId,
      happinessId,
      influence,
      activeStates,
      pendingStates,
      recoveringStates,
    }),
  );

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
    states,
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
  });
};

export const systemTransformer = new Transform({
  objectMode: true,
  transform,
});
