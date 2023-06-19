import { Box, BoxProps, styled } from '@mui/material'

const StyledBox = styled(Box)({
  padding: '2rem 3rem 2rem 2rem',
})

function BasePageBody(props: BoxProps) {
  return <StyledBox {...props} />
}

export default BasePageBody
