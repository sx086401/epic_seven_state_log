import { Box, Typography, styled } from '@mui/material'
import { Formik } from 'formik'
import { StateType, StateValues } from './types'
import { useTranslation } from 'react-i18next'
import EquipmentList from './EquipmentList'
import StateList from './StateList'

const dummyData: StateValues = {
  current: {
    atk: 1200,
    def: 1500,
    health: 15000,
    spd: 220,
    cri: 15,
    crd: 150,
    eff: 150,
    res: 130,
    weapon: 92,
    helmet: 101,
    armor: 89,
    necklace: 89,
    ring: 96,
    boots: 94,
    weaponSet: 'spd',
    helmetSet: 'spd',
    armorSet: 'hit',
    necklaceSet: 'spd',
    ringSet: 'spd',
    bootsSet: 'hit',
    set1: 'spd',
    set2: 'hit',
    set3: '',
  },
  expect: {
    atk: 2000,
    def: 2000,
    health: 20000,
    spd: 220,
    eff: 200,
    res: 200,
    set1: 'spd',
    set2: 'hit',
    set3: '',
  },
  username: 'Test1',
}

const Title = styled(Typography)({
  fontSize: '18px',
  paddingLeft: '10px',
  marginBottom: '5px',
})

interface Props {
  editing?: boolean
}

function StateInfo({ editing = false }: Props) {
  const { t } = useTranslation('states')

  return (
    <Box display="flex" flexDirection="column" margin="0px 4px">
      <Formik<StateValues> initialValues={dummyData} onSubmit={(values) => console.log(values)}>
        {({ values }) => (
          <Box display="flex">
            <Box>
              <Title>{t('currentState')}</Title>
              <StateList type={StateType.Current} editing={editing} />
            </Box>
            <Box>
              <Title>{t('currentEquipment')}</Title>
              <EquipmentList type={StateType.Current} editing={editing} />
            </Box>
            <Box>
              <Title>{t('expectState')}</Title>
              <StateList type={StateType.Expect} editing={editing} />
            </Box>
            <Box>
              <Title>{t('expectEquipment')}</Title>
              <EquipmentList type={StateType.Expect} editing={editing} />
            </Box>
            <Box width="110px">
              <Title>{t('editor')}</Title>
              <Typography paddingLeft="10px" marginTop="100px">
                {values.username}
              </Typography>
            </Box>
          </Box>
        )}
      </Formik>
    </Box>
  )
}

export default StateInfo
