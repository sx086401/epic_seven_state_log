import { BaseButton, useSnackbar } from 'common'
import { Box, IconButton, Typography, styled } from '@mui/material'
import { Formik, FormikProps } from 'formik'
import { StateType, StateValues } from './types'
import { statesApi } from 'apiClient'
import { useCallback, useEffect, useRef, useState } from 'react'
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
}

function StateInfo({ stateData }: Props) {
  const { t } = useTranslation(['states', 'common'])
  const [editing, setEditing] = useState<boolean>(false)
  const formikRef = useRef<FormikProps<StateValues>>(null)
  const [updateState, result] = statesApi.useUpdateStateMutation()
  const setSnackbar = useSnackbar()

  const handleEditClick = useCallback(() => setEditing(true), [])

  const handleCancelClick = useCallback(() => {
    formikRef.current?.resetForm()
    setEditing(false)
  }, [])

  const { isSuccess, isError, isLoading } = result

  useEffect(() => {
    if (isSuccess) {
      setSnackbar({ severity: 'success', message: t('common:updateSucceed') })
    }

    if (isError) {
      setSnackbar({ severity: 'error', message: t('common:updateFailed') })
    }
  }, [isError, isSuccess, result.data, setSnackbar, t])

  const handleSubmit = useCallback(
    (values: StateValues) => {
      updateState(values)
      setEditing(false)
    },
    [updateState]
  )

  return (
    <Box display="flex" flexDirection="column" margin="0px 4px">
      <Formik<StateValues> initialValues={stateData} innerRef={formikRef} onSubmit={handleSubmit}>
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
            <Box width="110px">
              <Title>{t('states:editor')}</Title>
              <Typography paddingLeft="10px" marginTop="100px">
                {values.editor}
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" justifyContent="center" width="70px">
              {editing ? (
                <Box>
                  <BaseButton
                    buttonText={t('common:save')}
                    type="submit"
                    onClick={submitForm}
                    loading={isLoading}
                    sx={{ width: '40px', marginBottom: '10px' }}
                  />
                  <BaseButton
                    buttonText={t('common:cancel')}
                    onClick={handleCancelClick}
                    sx={{ width: '40px' }}
                  />
                </Box>
              ) : (
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
    </Box>
  )
}

export default StateInfo
