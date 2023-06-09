import { Box } from '@mui/material'
import { styled } from '@mui/styles'

const BaseCenter = styled(Box)({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
})

export default BaseCenter
