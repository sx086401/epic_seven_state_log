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
