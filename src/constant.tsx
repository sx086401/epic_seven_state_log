import {
  AttackSetIcon,
  CounterSetIcon,
  CriticalSetIcon,
  DefenseSetIcon,
  DestructionSetIcon,
  HealthSetIcon,
  HitSetIcon,
  ImmunitySetIcon,
  InjurySetIcon,
  LifeStealSetIcon,
  PenetrationSetIcon,
  ProtectionSetIcon,
  RageSetIcon,
  ResistSetIcon,
  RevengeSetIcon,
  SpeedSetIcon,
  TorrentSetIcon,
  UnitySetIcon,
} from 'common'
import { CharacterElement, ElementIcon, EquipmentSet } from 'types'
import Dark from 'assets/dark.png'
import Earth from 'assets/earth.png'
import Fire from 'assets/fire.png'
import Ice from 'assets/ice.png'
import Light from 'assets/light.png'

export const pathName = {
  login: '/login',
  states: '/states',
}

export const size = {
  navbarHeight: '56px',
  sideMenuWidth: '200px',
}

export const localStorageKey = {
  userToken: 'username',
}

export const elementList: ElementIcon[] = [
  {
    key: CharacterElement.Fire,
    icon: <img src={Fire} style={{ width: '40px', height: '40px' }} />,
  },
  { key: CharacterElement.Ice, icon: <img src={Ice} style={{ width: '40px', height: '40px' }} /> },
  {
    key: CharacterElement.Earth,
    icon: <img src={Earth} style={{ width: '40px', height: '40px' }} />,
  },
  {
    key: CharacterElement.Light,
    icon: <img src={Light} style={{ width: '40px', height: '40px' }} />,
  },
  {
    key: CharacterElement.Dark,
    icon: <img src={Dark} style={{ width: '40px', height: '40px' }} />,
  },
]

export const equipmentSetIconMap = {
  [EquipmentSet.Atk]: <AttackSetIcon />,
  [EquipmentSet.Counter]: <CounterSetIcon />,
  [EquipmentSet.Cri]: <CriticalSetIcon />,
  [EquipmentSet.Def]: <DefenseSetIcon />,
  [EquipmentSet.Destruction]: <DestructionSetIcon />,
  [EquipmentSet.Health]: <HealthSetIcon />,
  [EquipmentSet.Hit]: <HitSetIcon />,
  [EquipmentSet.Immunity]: <ImmunitySetIcon />,
  [EquipmentSet.Injury]: <InjurySetIcon />,
  [EquipmentSet.Penetration]: <PenetrationSetIcon />,
  [EquipmentSet.Protection]: <ProtectionSetIcon />,
  [EquipmentSet.Rage]: <RageSetIcon />,
  [EquipmentSet.Res]: <ResistSetIcon />,
  [EquipmentSet.Rev]: <RevengeSetIcon />,
  [EquipmentSet.Spd]: <SpeedSetIcon />,
  [EquipmentSet.Steal]: <LifeStealSetIcon />,
  [EquipmentSet.Tor]: <TorrentSetIcon />,
  [EquipmentSet.Uni]: <UnitySetIcon />,
}
