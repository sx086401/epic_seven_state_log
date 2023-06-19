import { FormControl, MenuItem, Select, SelectProps } from '@mui/material'
import { ReactNode, useMemo } from 'react'

type Option = {
  label: ReactNode
  value: NonNullable<any>
}

interface Props extends SelectProps {
  options: Option[]
  value: NonNullable<any>
  onChange?: (value: any) => void
  disabled?: boolean
}

function BaseSelect({ options, disabled, value, onChange, ...rest }: Props) {
  const selections = useMemo(
    () =>
      options.map(({ label, value }) => (
        <MenuItem key={value} value={value}>
          {label}
        </MenuItem>
      )),
    [options]
  )

  return (
    <FormControl disabled={disabled}>
      <Select value={value} onChange={onChange} {...rest}>
        {selections}
      </Select>
    </FormControl>
  )
}

export default BaseSelect
