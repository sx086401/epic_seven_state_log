import { BaseCenter, BaseInput } from 'common'
import { Box, Typography, styled } from '@mui/material'
import { useTranslation } from 'react-i18next'
import BackgroundImage from 'assets/Briar-Witch-Iseria-portrait.png'
import BaseButton from 'common/BaseButton'

const StyledCenter = styled(BaseCenter)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: 480,
  height: 480,
  borderRadius: 4,
  '& .MuiInputBase-root, .MuiButtonBase-root': {
    marginTop: '30px',
  },
})

function LoginPage() {
  const { t } = useTranslation('app')

  return (
    <Box
      width="100%"
      height="100vh"
      sx={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '115% 100%',
      }}
    >
      <StyledCenter>
        <Typography variant="h4" sx={{ margin: '70px 0 50px 0' }}>
          {t('title')}
        </Typography>
        <BaseInput placeholder={t('login.name')} width={280} />
        <BaseInput placeholder={t('login.password')} width={280} type="password" />
        <BaseButton buttonText={t('login.login')} />
      </StyledCenter>
    </Box>
  )
}

export default LoginPage
