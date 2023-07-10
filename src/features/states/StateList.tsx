import {
  AttackIcon,
  CrdIcon,
  CriIcon,
  DefenseIcon,
  EffIcon,
  HealthIcon,
  ResIcon,
  SpeedIcon,
} from 'common'
import { Box } from '@mui/material'
import { StateType } from './types'
import EditableCell from './EditableCell'

interface Props {
  type: StateType
  editing?: boolean
}

function StateList({ type, editing = false }: Props) {
  return (
    <Box width="120px">
      <EditableCell icon={<AttackIcon />} field={`${type}.atk`} editing={editing} />
      <EditableCell icon={<DefenseIcon />} field={`${type}.defense`} editing={editing} />
      <EditableCell icon={<HealthIcon />} field={`${type}.health`} editing={editing} />
      <EditableCell icon={<SpeedIcon />} field={`${type}.spd`} editing={editing} />
      <EditableCell icon={<CriIcon />} field={`${type}.cri`} editing={editing} />
      <EditableCell icon={<CrdIcon />} field={`${type}.crd`} editing={editing} />
      <EditableCell icon={<EffIcon />} field={`${type}.eff`} editing={editing} />
      <EditableCell icon={<ResIcon />} field={`${type}.res`} editing={editing} />
    </Box>
  )
}

export default StateList
