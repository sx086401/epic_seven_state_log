import { BaseModal, useSnackbar } from 'common'
import { MouseEvent, useCallback, useEffect, useMemo, useState } from 'react'
import { StateType, StateValues } from './types'
import { characterApi, statesApi } from 'apiClient'
import { getUserToken } from 'app/utils'
import { useTranslation } from 'react-i18next'
import CharInfo from './CharInfo'
import CharacterSelectTable from './CharacterSelectTable'

const initialStateValue: StateValues = {
  [StateType.Current]: { set1: '', set2: '', set3: '' },
  [StateType.Expect]: { set1: '', set2: '', set3: '' },
  editor: '',
  character: { id: 0, name: '', imageUrl: '', element: '', star: 0, role: '' },
  characterId: 0,
}
interface Props {
  open: boolean
  onClose: () => void
}

function AddStateModal({ open, onClose }: Props) {
  const { t } = useTranslation()
  const { data: characters } = characterApi.useGetCharactersQuery({})
  const [createState, { isSuccess, isError, isLoading }] = statesApi.useCreateStateMutation()
  const [selectedId, setSelectedId] = useState<number | null>(null)
  const setSnackbar = useSnackbar()

  useEffect(() => {
    if (isSuccess) {
      setSnackbar({ severity: 'success', message: t('createSucceed') })
      setSelectedId(null)
      onClose()
    }

    if (isError) {
      setSnackbar({ severity: 'error', message: t('createFailed') })
    }
  }, [onClose, isError, isSuccess, setSnackbar, t])

  const handleCharacterClick = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    setSelectedId(Number(e.currentTarget.name))
  }, [])

  const handleClose = useCallback(() => {
    setSelectedId(null)
    onClose()
  }, [onClose])

  const handleCreate = useCallback(
    (values: StateValues) => {
      createState({ ...values, editor: getUserToken() ?? '' })
    },
    [createState]
  )

  const defaultValue: StateValues = useMemo(() => {
    if (!selectedId) {
      return initialStateValue
    }
    const character = characters?.find(({ id }) => id === selectedId)

    return character
      ? { ...initialStateValue, character, characterId: selectedId }
      : initialStateValue
  }, [characters, selectedId])

  return (
    <BaseModal
      open={open}
      dialogTitle={t('addState')}
      onClose={handleClose}
      PaperProps={{ sx: { width: '900px', maxWidth: 1000 } }}
    >
      {selectedId ? (
        <CharInfo
          stateData={defaultValue}
          isCreate={true}
          isCreating={isLoading}
          onCreate={handleCreate}
        />
      ) : (
        <CharacterSelectTable onCharacterClick={handleCharacterClick} />
      )}
    </BaseModal>
  )
}

export default AddStateModal
