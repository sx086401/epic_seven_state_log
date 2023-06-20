export enum StateType {
  Current = 'current',
  Expect = 'expect',
}

interface StateFields {
  atk?: number
  def?: number
  health?: number
  spd?: number
  cri?: number
  crd?: number
  eff?: number
  res?: number
  weapon?: number
  helmet?: number
  armor?: number
  necklace?: number
  ring?: number
  boots?: number
  weaponSet?: string
  helmetSet?: string
  armorSet?: string
  necklaceSet?: string
  ringSet?: string
  bootsSet?: string
  set1: string
  set2: string
  set3: string
}

export interface StateValues {
  [StateType.Current]: StateFields
  [StateType.Expect]: StateFields
  username: string
  url: string
  name: string
}
