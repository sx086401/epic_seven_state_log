import { ArmorIcon, BootsIcon, HelmetIcon, NecklaceIcon, RingIcon, WeaponIcon } from 'common'
import { Box } from '@mui/material'
import { StateType, StateValues } from './types'
import { equipmentSetIconMap } from 'constant'
import { get } from 'lodash'
import { useFormikContext } from 'formik'
import { useMemo } from 'react'
import EditableCell from './EditableCell'
import SetSelect from './SetSelect'

interface Props {
  type: StateType
  editing?: boolean
}

function SetCell({ field, editing }: { field: string; editing: boolean }) {
  const { getFieldProps } = useFormikContext<StateValues>()
  const fieldProps = useMemo(() => getFieldProps(field), [getFieldProps, field])

  return editing ? <SetSelect {...fieldProps} /> : get(equipmentSetIconMap, fieldProps.value)
}

function EquipmentList({ type, editing = false }: Props) {
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
      <EditableCell
        icon={<ArmorIcon />}
        field={`${type}.armor`}
        editing={editing}
        setKey={`${type}.armorSet`}
      />
      <EditableCell
        icon={<NecklaceIcon />}
        field={`${type}.necklace`}
        editing={editing}
        setKey={`${type}.necklaceSet`}
      />
      <EditableCell
        icon={<RingIcon />}
        field={`${type}.ring`}
        editing={editing}
        setKey={`${type}.ringSet`}
      />
      <EditableCell
        icon={<BootsIcon />}
        field={`${type}.boots`}
        editing={editing}
        setKey={`${type}.bootsSet`}
      />
      <Box marginTop="20px" display="flex" justifyContent={editing ? 'space-around' : ''}>
        <SetCell field={`${type}.set1`} editing={editing} />
        <SetCell field={`${type}.set2`} editing={editing} />
        <SetCell field={`${type}.set3`} editing={editing} />
      </Box>
    </Box>
  )
}

export default EquipmentList
