import { ReactNode } from 'react'

export enum CharacterElement {
  Fire = 'fire',
  Ice = 'ice',
  Earth = 'earth',
  Light = 'light',
  Dark = 'dark',
}

export interface ElementIcon {
  key: CharacterElement
  icon: ReactNode
}

export enum EquipmentSet {
  Spd = 'spd',
  Hit = 'hit',
  Cri = 'cri',
  Atk = 'atk',
  Counter = 'counter',
  Def = 'def',
  Destruction = 'destruction',
  Health = 'health',
  Immunity = 'immunity',
  Injury = 'injury',
  Steal = 'steal',
  Penetration = 'penetration',
  Protection = 'protection',
  Rage = 'rage',
  Res = 'res',
  Rev = 'rev',
  Tor = 'tor',
  Uni = 'uni',
}
