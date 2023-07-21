import { Box, Card, Typography, styled } from '@mui/material'
import { StateValues } from './types'
import StateInfo from './StateInfo'

const StyledCard = styled(Card, { shouldForwardProp: (prop) => prop !== 'isCreate' })(
  ({ isCreate }: { isCreate: boolean }) => ({
    display: 'flex',
    justifyContent: 'space-around',
    padding: '10px 20px',
    width: isCreate ? '850px' : '950px',
    height: '320px',
    marginBottom: '10px',
  })
)

interface Props {
  stateData: StateValues
  isCreate?: boolean
  isCreating?: boolean
  onCreate?: (values: StateValues) => void
}

function CharInfo({ stateData, isCreate = false, isCreating = false, onCreate }: Props) {
  return (
    <StyledCard isCreate={isCreate}>
      <Box display="flex" flexDirection="column" justifyContent="center" width="130px">
        <img src={stateData.character.imageUrl} />
        <Typography textAlign="center">{stateData.character.name}</Typography>
      </Box>
      <StateInfo
        stateData={stateData}
        isCreate={isCreate}
        isCreating={isCreating}
        onCreate={onCreate}
      />
    </StyledCard>
  )
}

export default CharInfo
