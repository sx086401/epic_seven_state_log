import * as Yup from 'yup'
import { BaseInput } from 'common'
import { Box, FormLabel, Typography, styled } from '@mui/material'
import { pathName } from 'constant'
import { useEffect, useMemo } from 'react'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { userApi } from 'apiClient'
import BackgroundImage from 'assets/Briar-Witch-Iseria-portrait.png'
import BaseButton from 'common/BaseButton'
import useAuth from 'app/useAuth'

interface FormValues {
  username: string
  password: string
}

const StyledCenter = styled(Box)({
  position: 'absolute',
  top: '50%',
  left: '10%',
  transform: 'translate(0%, -50%)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: 480,
  height: 480,
  borderRadius: 4,
  '& .MuiInputBase-root, .MuiButtonBase-root': {
    marginTop: '30px',
  },
  '& .MuiFormLabel-root': {
    marginTop: '5px',
  },
})

function LoginPage() {
  const { t } = useTranslation(['app', 'errors'])
  const navigate = useNavigate()
  const { login } = useAuth()
  const [callLoginApi, { isSuccess, isError, data }] = userApi.useLoginMutation()

  useEffect(() => {
    if (isSuccess && data?.username) {
      login(data?.username)
      navigate(pathName.states)
    }
  }, [data, isSuccess, login, navigate])

  const validationSchema = useMemo(
    () =>
      Yup.object().shape({
        username: Yup.string().required(t('errors:required')),
        password: Yup.string().required(t('errors:required')),
      }),
    [t]
  )

  const { errors, touched, getFieldProps, submitForm } = useFormik<FormValues>({
    initialValues: { username: '', password: '' },
    validationSchema,
    onSubmit: (values) => {
      callLoginApi(values)
    },
  })

  return (
    <Box
      width="100%"
      height="100vh"
      sx={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '100% 100%',
      }}
    >
      <StyledCenter>
        <Typography variant="h4" sx={{ margin: '70px 0 50px 0' }}>
          {t('app:title')}
        </Typography>
        <BaseInput
          placeholder={t('app:login.name')}
          width={280}
          error={!!errors.username && touched.username}
          {...getFieldProps('username')}
        />
        <BaseInput
          placeholder={t('app:login.password')}
          width={280}
          type="password"
          error={!!errors.password && touched.password}
          {...getFieldProps('password')}
        />
        {isError && <FormLabel error={true}>{t('app:login.error')}</FormLabel>}
        <BaseButton buttonText={t('app:login.login')} onClick={submitForm} />
      </StyledCenter>
    </Box>
  )
}

export default LoginPage
