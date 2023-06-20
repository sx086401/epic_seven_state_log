import { Box, Card, styled } from '@mui/material'
import { charData } from 'dummyData'
import StateInfo from './StateInfo'

const StyledCard = styled(Card)({
  display: 'flex',
  justifyContent: 'space-around',
  padding: '10px 20px',
  width: '950px',
  height: '320px',
  marginBottom: '10px',
})

function CharInfo() {
  return (
    <StyledCard>
      <Box display="flex" flexDirection="column" justifyContent="center" width="120px">
        <img src={charData.url} />
        {charData.name}
      </Box>
      <StateInfo />
    </StyledCard>
  )
}

export default CharInfo
