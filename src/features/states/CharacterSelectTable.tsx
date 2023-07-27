import { Box, IconButton } from '@mui/material'
import { MouseEvent, useCallback, useMemo, useState } from 'react'
import { characterApi } from 'apiClient'
import SearchBar from './SearchBar'

interface Props {
  onCharacterClick: (e: MouseEvent<HTMLButtonElement>) => void
}

function CharacterSelectTable({ onCharacterClick }: Props) {
  const { data: characters } = characterApi.useGetCharactersQuery({})
  const [role, setRole] = useState('')
  const [rank, setRank] = useState('')
  const [element, setElement] = useState('')

  const displayCharacter = useMemo(() => {
    if (!role && !rank && !element) {
      return characters
    }

    return characters?.filter((character) => {
      if (role && character.role !== role) {
        return false
      }

      if (rank && character.star !== Number(rank)) {
        return false
      }

      if (element && character.element !== element) {
        return false
      }

      return true
    })
  }, [characters, element, rank, role])

  const handleElementClick = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      setElement(e.currentTarget.name)
    },
    [setElement]
  )

  const handleRoleClick = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    setRole(e.currentTarget.name)
  }, [])

  const handleRankClick = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    setRank(e.currentTarget.name)
  }, [])

  return (
    <>
      <SearchBar
        searchElement={element}
        searchRole={role}
        searchRank={rank}
        isTransparent={true}
        onElementClick={handleElementClick}
        onRoleClick={handleRoleClick}
        onRankClick={handleRankClick}
      />
      <Box
        display="flex"
        alignContent="flex-start"
        height="400px"
        flexWrap="wrap"
        paddingLeft="15px"
        sx={{ overflowY: 'scroll' }}
      >
        {displayCharacter?.map(({ id, imageUrl }) => (
          <IconButton
            key={id}
            name={id.toString()}
            onClick={onCharacterClick}
            sx={{ height: '60px', width: '60px' }}
          >
            <img src={imageUrl} width="50px" height="50px" />
          </IconButton>
        ))}
      </Box>
    </>
  )
}

export default CharacterSelectTable
