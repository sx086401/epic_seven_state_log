import { Box, FormHelperText, OutlinedInput, OutlinedInputProps, styled } from '@mui/material'
import { theme } from 'styles'

const StyledTextField = styled(OutlinedInput, { shouldForwardProp: (prop) => prop !== 'width' })(
  ({ width = 200, disabled }: Omit<Props, 'helperText'>) => ({
    height: '40px',
    width,
    padding: '0px 8px 0px 8px',
    backgroundColor: disabled ? theme.palette.secondary.main : 'none',
    '& .MuiInputBase-input': {
      padding: '4px',
      height: '1rem',
    },
  })
)

interface Props extends OutlinedInputProps {
  width?: number
  helperText?: string
}

function BaseInput({ helperText, ...restProps }: Props) {
  return (
    <Box>
      <StyledTextField {...restProps} />
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </Box>
  )
}

export default BaseInput
