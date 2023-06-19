import { Box, Card, IconButton, styled } from '@mui/material'
import { useCallback, useState } from 'react'
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline'
import StateInfo from './StateInfo'

const StyledCard = styled(Card)({
  display: 'flex',
  justifyContent: 'space-around',
  padding: '10px 20px',
  width: '900px',
  height: '320px',
  marginBottom: '10px',
})

function CharInfo() {
  const [editing, setEditing] = useState<boolean>(false)

  const handleEditClick = useCallback(() => setEditing((prev) => !prev), [])

  return (
    <StyledCard>
      <Box display="flex" alignItems="center" width="120px">
        <img
          src="https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c6062_s.png"
          alt="ALA"
        />
      </Box>
      <StateInfo editing={editing} />
      <Box display="flex" alignItems="center">
        <IconButton disableRipple={true} onClick={handleEditClick} sx={{ width: 30, height: 30 }}>
          <DriveFileRenameOutlineIcon />
        </IconButton>
      </Box>
    </StyledCard>
  )
}

export default CharInfo
