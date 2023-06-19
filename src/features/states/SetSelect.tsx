import { BaseSelect } from 'common'
import { EquipmentSet } from 'types'
import { equipmentSetIconMap } from 'constant'

const options = [
  { label: 'none', value: '' },
  { label: equipmentSetIconMap[EquipmentSet.Spd], value: EquipmentSet.Spd },
  { label: equipmentSetIconMap[EquipmentSet.Destruction], value: EquipmentSet.Destruction },
  { label: equipmentSetIconMap[EquipmentSet.Counter], value: EquipmentSet.Counter },
  { label: equipmentSetIconMap[EquipmentSet.Steal], value: EquipmentSet.Steal },
  { label: equipmentSetIconMap[EquipmentSet.Cri], value: EquipmentSet.Cri },
  { label: equipmentSetIconMap[EquipmentSet.Penetration], value: EquipmentSet.Penetration },
  { label: equipmentSetIconMap[EquipmentSet.Hit], value: EquipmentSet.Hit },
  { label: equipmentSetIconMap[EquipmentSet.Res], value: EquipmentSet.Res },
  { label: equipmentSetIconMap[EquipmentSet.Immunity], value: EquipmentSet.Immunity },
  { label: equipmentSetIconMap[EquipmentSet.Injury], value: EquipmentSet.Injury },
  { label: equipmentSetIconMap[EquipmentSet.Def], value: EquipmentSet.Def },
  { label: equipmentSetIconMap[EquipmentSet.Health], value: EquipmentSet.Health },
  { label: equipmentSetIconMap[EquipmentSet.Rage], value: EquipmentSet.Rage },
  { label: equipmentSetIconMap[EquipmentSet.Tor], value: EquipmentSet.Tor },
  { label: equipmentSetIconMap[EquipmentSet.Rev], value: EquipmentSet.Rev },
  { label: equipmentSetIconMap[EquipmentSet.Atk], value: EquipmentSet.Atk },
  { label: equipmentSetIconMap[EquipmentSet.Protection], value: EquipmentSet.Protection },
  { label: equipmentSetIconMap[EquipmentSet.Uni], value: EquipmentSet.Uni },
]

interface Props {
  value?: string
  onChange?: (value: any) => void
}

function SetSelect({ value = '', onChange, ...rest }: Props) {
  return (
    <BaseSelect
      options={options}
      value={value}
      onChange={onChange}
      sx={{
        '.MuiSelect-outlined': {
          padding: '5px 20px 2px 5px !important',
          height: '25px !important',
        },
        '.MuiSelect-iconOutlined': { right: '1px' },
      }}
      {...rest}
    />
  )
}

export default SetSelect
