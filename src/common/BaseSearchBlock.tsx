import { InputAdornment, OutlinedInput, OutlinedInputProps, styled } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

const StyledTextField = styled(OutlinedInput, { shouldForwardProp: (prop) => prop !== 'width' })(
  ({ width }: { width: number }) => ({
    height: 40,
    width,
    padding: '0px 8px',
    '& .MuiInputBase-input': {
      padding: 4,
      height: '1.2rem',
      width: width ? width - 50 : '100px',
    },
  })
)

interface Props extends OutlinedInputProps {
  defaultValue?: string
  width?: number
  placeholder?: string
  onKeyUp?: (e: React.KeyboardEvent<HTMLInputElement>) => void
}

function BaseSearchBlock({ defaultValue, width = 150, placeholder = '', onKeyUp, ...rest }: Props) {
  return (
    <StyledTextField
      defaultValue={defaultValue}
      onKeyUp={onKeyUp}
      placeholder={placeholder}
      width={width}
      endAdornment={
        <InputAdornment position="end">
          <SearchIcon />
        </InputAdornment>
      }
      {...rest}
    />
  )
}

export default BaseSearchBlock
