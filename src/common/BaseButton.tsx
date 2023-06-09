import { Button, ButtonProps, CircularProgress, styled } from '@mui/material'

const StyledButton = styled(Button)({
  width: '160px',
  height: '36px',
  backgroundColor: '#707070',
})

const ButtonText = styled('span', { shouldForwardProp: (prop) => prop !== 'hidden' })(
  ({ hidden }) => ({
    opacity: hidden ? 0 : 1,
  })
)

const LoadingIcon = styled(CircularProgress)({
  position: 'absolute',
})

interface Props extends ButtonProps {
  buttonText: string
  loading?: boolean
}

function BaseButton({ buttonText, loading, disabled, ...restProps }: Props) {
  return (
    <StyledButton disabled={loading || disabled} disableRipple={true} {...restProps}>
      <ButtonText hidden={loading}>{buttonText}</ButtonText>
      {loading && <LoadingIcon size={13} />}
    </StyledButton>
  )
}

export default BaseButton
