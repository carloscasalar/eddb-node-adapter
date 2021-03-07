export type SystemId = number;

export interface FactionState {
  id: number;
  name: string;
}

export interface FactionPresence {
  minorFactionId: number;
  happinessId: number;
  influence: number;
  activeStates: FactionState[];
  pendingStates: FactionState[];
  recoveringStates: FactionState[];
}

export interface System {
  id: number;
  edsmId: number;
  name: string;
  x: number;
  y: number;
  z: number;
  population: number;
  isPopulated: boolean;
  governmentId: number;
  government: string;
  allegianceId: number;
  allegiance: string;
  states: string[];
  securityId: number;
  security: string;
  primaryEconomyId: number;
  primaryEconomy: string;
  power: string;
  powerState: string;
  powerStateId: number;
  needsPermit: boolean;
  updatedAt: number;
  simbadRef: string;
  controllingMinorFactionId: number;
  controllingMinorFaction: string;
  reserveTypeId: number;
  reserveType: string;
  minorFactionPresences: FactionPresence[];
}

export interface RemoteFactionPresence {
  minor_faction_id: number;
  happiness_id: number;
  influence: number;
  active_states: FactionState[];
  pending_states: FactionState[];
  recovering_states: FactionState[];
}

export interface RemoteSystem {
  id: number;
  edsm_id: number;
  name: string;
  x: number;
  y: number;
  z: number;
  population: number;
  is_populated: boolean;
  government_id: number;
  government: string;
  allegiance_id: number;
  allegiance: string;
  states: string[];
  security_id: number;
  security: string;
  primary_economy_id: number;
  primary_economy: string;
  power: string;
  power_state: string;
  power_state_id: number;
  needs_permit: boolean;
  updated_at: number;
  simbad_ref: string;
  controlling_minor_faction_id: number;
  controlling_minor_faction: string;
  reserve_type_id: number;
  reserve_type: string;
  minor_faction_presences: RemoteFactionPresence[];
}
