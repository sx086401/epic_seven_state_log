import * as yup from 'yup'
import { BaseButton, BaseModal, useSnackbar } from 'common'
import { Box, IconButton, Typography, styled } from '@mui/material'
import { Formik, FormikProps } from 'formik'
import { StateFields, StateType, StateValues } from './types'
import { getUserToken } from 'app/utils'
import { includes } from 'lodash'
import { statesApi } from 'apiClient'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline'
import EquipmentList from './EquipmentList'
import StateList from './StateList'

const Title = styled(Typography)({
  fontSize: '18px',
  paddingLeft: '10px',
  marginBottom: '5px',
})

interface Props {
  stateData: StateValues
  isCreate?: boolean
  onCreate?: (values: StateValues) => void
}

const StateNumberFields = [
  'atk',
  'defense',
  'health',
  'spd',
  'cri',
  'crd',
  'eff',
  'res',
  'weapon',
  'helmet',
  'armor',
  'necklace',
  'ring',
  'boots',
]

function convertStateFields(raw: StateFields): StateFields {
  const newEntries = Object.entries(raw).map(([key, value]) =>
    includes(StateNumberFields, key) && value === '' ? [key, null] : [key, value]
  )

  return Object.fromEntries(newEntries)
}

const stateValidationSchema = yup.object({
  atk: yup.number().min(0).nullable(),
  defense: yup.number().min(0).nullable(),
  health: yup.number().min(0).nullable(),
  spd: yup.number().min(0).nullable(),
  cri: yup.number().min(0).nullable(),
  crd: yup.number().min(0).nullable(),
  eff: yup.number().min(0).nullable(),
  res: yup.number().min(0).nullable(),
  weapon: yup.number().min(0).nullable(),
  helmet: yup.number().min(0).nullable(),
  armor: yup.number().min(0).nullable(),
  necklace: yup.number().min(0).nullable(),
  ring: yup.number().min(0).nullable(),
  boots: yup.number().min(0).nullable(),
  weaponSet: yup.string().nullable(),
  helmetSet: yup.string().nullable(),
  armorSet: yup.string().nullable(),
  necklaceSet: yup.string().nullable(),
  ringSet: yup.string().nullable(),
  bootsSet: yup.string().nullable(),
  set1: yup.string().nullable(),
  set2: yup.string().nullable(),
  set3: yup.string().nullable(),
})

const validationSchema = yup.object({
  [StateType.Current]: stateValidationSchema,
  [StateType.Expect]: stateValidationSchema,
})

function StateInfo({ stateData, isCreate = false, onCreate }: Props) {
  const { t } = useTranslation(['states', 'common'])
  const [editing, setEditing] = useState<boolean>(isCreate)
  const [deleteModalOpen, setDeleteModalOpen] = useState<boolean>(false)
  const formikRef = useRef<FormikProps<StateValues>>(null)
  const [updateState, { isSuccess: isUpdateSuccess, isError: isUpdateError, isLoading }] =
    statesApi.useUpdateStateMutation()
  const [deleteState, { isSuccess: isDeleteSuccess, isError: isDeleteError }] =
    statesApi.useDeleteStateMutation()
  const setSnackbar = useSnackbar()
  const currentUser = getUserToken()

  const handleEditClick = useCallback(() => setEditing(true), [])

  const handleCancelClick = useCallback(() => {
    formikRef.current?.resetForm()
    setEditing(false)
  }, [])

  useEffect(() => {
    if (isUpdateSuccess || isDeleteSuccess) {
      setSnackbar({
        severity: 'success',
        message: isUpdateSuccess ? t('common:updateSucceed') : t('common:deleteSucceed'),
      })
      setEditing(false)
    }

    if (isUpdateError || isDeleteError) {
      setSnackbar({
        severity: 'error',
        message: isUpdateError ? t('common:updateFailed') : t('common:deleteFailed'),
      })
    }
  }, [isDeleteError, isDeleteSuccess, isUpdateError, isUpdateSuccess, setSnackbar, t])

  const handleSubmit = useCallback(
    ({ expectState, currentState, ...rest }: StateValues) => {
      const value = {
        ...rest,
        expectState: convertStateFields(expectState),
        currentState: convertStateFields(currentState),
      }

      if (isCreate && onCreate) {
        onCreate(value)

        return
      }

      updateState(value)
    },
    [onCreate, isCreate, updateState]
  )

  const displayEditButton = useMemo(
    () => currentUser === stateData.editor && !editing,
    [currentUser, editing, stateData.editor]
  )

  const handleDelete = useCallback(() => {
    if (!stateData.id) {
      return
    }
    deleteState(stateData.id)
  }, [deleteState, stateData.id])

  const handleDeleteModalClose = useCallback(() => setDeleteModalOpen(false), [])

  const handleDeleteModalOpen = useCallback(() => setDeleteModalOpen(true), [])

  return (
    <Box display="flex" flexDirection="column" margin="0px 4px">
      <Formik<StateValues>
        initialValues={stateData}
        validationSchema={validationSchema}
        innerRef={formikRef}
        onSubmit={handleSubmit}
      >
        {({ values, submitForm }) => (
          <Box display="flex">
            <Box>
              <Title>{t('states:currentState')}</Title>
              <StateList type={StateType.Current} editing={editing} />
            </Box>
            <Box>
              <Title>{t('states:currentEquipment')}</Title>
              <EquipmentList type={StateType.Current} editing={editing} />
            </Box>
            <Box>
              <Title>{t('states:expectState')}</Title>
              <StateList type={StateType.Expect} editing={editing} />
            </Box>
            <Box>
              <Title>{t('states:expectEquipment')}</Title>
              <EquipmentList type={StateType.Expect} editing={editing} />
            </Box>
            {isCreate ? null : (
              <Box width="110px">
                <Title>{t('states:editor')}</Title>
                <Typography paddingLeft="10px" marginTop="100px">
                  {values.editor}
                </Typography>
              </Box>
            )}
            <Box display="flex" alignItems="center" justifyContent="center" width="70px">
              {editing && (
                <Box sx={{ '& .MuiButtonBase-root': { width: '40px', marginBottom: '10px' } }}>
                  <BaseButton
                    buttonText={t('common:save')}
                    type="submit"
                    onClick={submitForm}
                    loading={isLoading}
                  />
                  {isCreate ? null : (
                    <>
                      <BaseButton buttonText={t('common:cancel')} onClick={handleCancelClick} />
                      <BaseButton
                        buttonText={t('common:delete')}
                        onClick={handleDeleteModalOpen}
                        sx={{
                          backgroundColor: 'red',
                          '&:hover': { backgroundColor: 'red', opacity: 0.8 },
                        }}
                      />
                    </>
                  )}
                </Box>
              )}
              {displayEditButton && (
                <IconButton
                  disableTouchRipple={true}
                  onClick={handleEditClick}
                  sx={{ width: 30, height: 30 }}
                >
                  <DriveFileRenameOutlineIcon />
                </IconButton>
              )}
            </Box>
          </Box>
        )}
      </Formik>
      <BaseModal
        open={deleteModalOpen}
        onClose={handleDeleteModalClose}
        hideDivider={true}
        PaperProps={{ sx: { padding: '8px 16px' } }}
        actionButtons={
          <>
            <BaseButton
              buttonText={t('common:delete')}
              onClick={handleDelete}
              sx={{
                width: 100,
                backgroundColor: 'red',
                '&:hover': { backgroundColor: 'red', opacity: 0.8 },
              }}
            />
            <BaseButton
              buttonText={t('common:cancel')}
              onClick={handleDeleteModalClose}
              sx={{ width: 100 }}
            />
          </>
        }
      >
        <Typography>{t('common:confirmDelete')}</Typography>
      </BaseModal>
    </Box>
  )
}

export default StateInfo
