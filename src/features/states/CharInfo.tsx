import { Box, Card, styled } from '@mui/material'
import { StateValues } from './types'
import StateInfo from './StateInfo'

const StyledCard = styled(Card)({
  display: 'flex',
  justifyContent: 'space-around',
  padding: '10px 20px',
  width: '950px',
  height: '320px',
  marginBottom: '10px',
})

interface Props {
  stateData: StateValues
}

function CharInfo({ stateData }: Props) {
  return (
    <StyledCard>
      <Box display="flex" flexDirection="column" justifyContent="center" width="120px">
        <img src={stateData.character.imageUrl} />
        {stateData.character.name}
      </Box>
      <StateInfo stateData={stateData} />
    </StyledCard>
  )
}

export default CharInfo
