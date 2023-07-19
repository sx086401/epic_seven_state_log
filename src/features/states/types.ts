export enum StateType {
  Current = 'currentState',
  Expect = 'expectState',
}

export interface StateFields {
  atk?: number
  defense?: number
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

export interface Character {
  id: number
  name: string
  imageUrl: string
  element: string
  star: number
  role: string
}

export interface StateValues {
  id?: number
  [StateType.Current]: StateFields
  [StateType.Expect]: StateFields
  characterId: number
  character: Character
  editor: string
}
