import { BaseModal } from 'common'
import { Box, IconButton } from '@mui/material'
import { MouseEvent, useCallback, useMemo, useState } from 'react'
import { characterApi } from 'apiClient'
import { useTranslation } from 'react-i18next'
import SearchBar from './SearchBar'

interface Props {
  open: boolean
  onClose: () => void
}

function AddStateModal({ open, onClose }: Props) {
  const { t } = useTranslation('states')
  const [role, setRole] = useState('')
  const [rank, setRank] = useState('')
  const [element, setElement] = useState('')
  const { data: characters } = characterApi.useGetCharactersQuery({})

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
    <BaseModal
      open={open}
      dialogTitle={t('addState')}
      onClose={onClose}
      PaperProps={{ sx: { width: '900px', maxWidth: 1000 } }}
    >
      <SearchBar
        searchElement={element}
        searchRole={role}
        searchRank={rank}
        onElementClick={handleElementClick}
        onRoleClick={handleRoleClick}
        onRankClick={handleRankClick}
      />
      <Box
        display="flex"
        alignContent="flex-start"
        height="400px"
        flexWrap="wrap"
        overflow="scroll"
        paddingLeft="15px"
      >
        {displayCharacter?.map(({ id, imageUrl }) => (
          <IconButton key={id} sx={{ height: '60px', width: '60px' }}>
            <img src={imageUrl} width="50px" height="50px" />
          </IconButton>
        ))}
      </Box>
    </BaseModal>
  )
}

export default AddStateModal
