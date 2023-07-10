import { Box, CircularProgress } from '@mui/material'
import React from 'react'

const BaseLoading = React.memo(function RenderBaseLoading() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
      }}
    >
      <CircularProgress />
    </Box>
  )
})

export default BaseLoading
