import { BasePageCenter } from 'common'
import { Box } from '@mui/material'
import CharInfo from './CharInfo'

function StatesPage() {
  return (
    <BasePageCenter>
      <Box>
        <CharInfo />
        <CharInfo />
      </Box>
    </BasePageCenter>
  )
}

export default StatesPage
