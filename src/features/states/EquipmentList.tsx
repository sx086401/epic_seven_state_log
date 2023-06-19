import { ArmorIcon, BootsIcon, HelmetIcon, NecklaceIcon, RingIcon, WeaponIcon } from 'common'
import { Box } from '@mui/material'
import { StateType } from './types'
import { equipmentSetIconMap } from 'constant'
import EditableCell from './EditableCell'
import SetSelect from './SetSelect'

interface Props {
  type: StateType
  editing?: boolean
}

function EquipmentList({ type, editing }: Props) {
  return (
    <Box width="160px">
      <EditableCell
        icon={<WeaponIcon />}
        field={`${type}.weapon`}
        editing={editing}
        setKey={`${type}.weaponSet`}
      />
      <EditableCell
        icon={<HelmetIcon />}
        field={`${type}.helmet`}
        editing={editing}
        setKey={`${type}.helmetSet`}
      />
      <EditableCell icon={<ArmorIcon />} field={`${type}.armor`} editing={editing} />
      <EditableCell icon={<NecklaceIcon />} field={`${type}.necklace`} editing={editing} />
      <EditableCell icon={<RingIcon />} field={`${type}.ring`} editing={editing} />
      <EditableCell icon={<BootsIcon />} field={`${type}.boots`} editing={editing} />
      <Box marginTop="20px" display="flex" justifyContent={editing ? 'space-around' : ''}>
        {editing ? <SetSelect value={'spd'} /> : equipmentSetIconMap['spd']}
        {editing ? <SetSelect value={'spd'} /> : equipmentSetIconMap['spd']}
        {editing ? <SetSelect value={'spd'} /> : equipmentSetIconMap['spd']}
      </Box>
    </Box>
  )
}

export default EquipmentList
