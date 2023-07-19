import { BaseInput } from 'common'
import { Box, Typography } from '@mui/material'
import { ReactNode, useMemo } from 'react'
import { StateValues } from './types'
import { equipmentSetIconMap } from 'constant'
import { get } from 'lodash'
import { useFormikContext } from 'formik'
import SetSelect from './SetSelect'

interface Props {
  icon: ReactNode
  field: string
  editing?: boolean
  setKey?: string
}

function EditableCell({ icon, field, editing, setKey = '' }: Props) {
  const { getFieldProps, errors } = useFormikContext<StateValues>()

  const { value, ...restFieldProps } = useMemo(() => getFieldProps(field), [field, getFieldProps])

  const baseInputSx = useMemo(() => ({ height: '28px', width: setKey ? '50px' : '80px' }), [setKey])

  const setFieldProps = useMemo(() => getFieldProps(setKey), [getFieldProps, setKey])

  return (
    <Box
      display="flex"
      margin="4px 0px"
      alignItems="center"
      justifyContent="space-between"
      height="30px"
      width="110px"
    >
      <Box display="flex">
        {icon}
        {editing ? (
          <BaseInput
            sx={baseInputSx}
            value={value ?? ''}
            error={!!get(errors, field)}
            {...restFieldProps}
          />
        ) : (
          <Typography margin="2px 0 2px 5px">{value ?? ''}</Typography>
        )}
      </Box>
      {setKey &&
        (editing ? (
          <Box marginLeft="5px">
            <SetSelect {...setFieldProps} />
          </Box>
        ) : (
          <Box height="100%" paddingTop="3px">
            {get(equipmentSetIconMap, setFieldProps.value)}
          </Box>
        ))}
    </Box>
  )
}

export default EditableCell
