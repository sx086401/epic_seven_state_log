import { Box, Typography, styled } from '@mui/material'
import { useTranslation } from 'react-i18next'
import EditableCell from './EditableCell'

interface Props {
  editing?: boolean
}

const Title = styled(Typography)({
  fontSize: '18px',
  marginTop: '40px',
  marginBottom: '5px',
})

function ArtifactList({ editing = false }: Props) {
  const { t } = useTranslation('states')

  return (
    <Box width="110px">
      <EditableCell field="artifact1" editing={editing} />
      <EditableCell field="artifact2" editing={editing} />
      <EditableCell field="artifact3" editing={editing} />
      <Title>{t('exclusiveEquipment')}</Title>
      <EditableCell field="exclusiveEquipment" editing={editing} />
    </Box>
  )
}

export default ArtifactList
