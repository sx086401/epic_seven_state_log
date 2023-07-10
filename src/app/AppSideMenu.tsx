import {
  Box,
  Collapse,
  List,
  ListItemButton,
  ListItemText,
  Typography,
  styled,
} from '@mui/material'
import { elementList, size } from 'constant'
import { theme } from 'styles'
import { useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useUrlProps } from 'hooks'

const SideMenu = styled(Box)({
  width: size.sideMenuWidth,
  backgroundColor: theme.background.dark,
})

const HeaderOffset = styled('div')({
  minHeight: size.navbarHeight,
})

const StyledList = styled(List)({
  marginTop: '10px',
  '& .MuiButtonBase-root': {
    width: '100%',
  },
})

function AppSideMenu() {
  const { t } = useTranslation(['app', 'common'])
  const [open, setOpen] = useState<boolean>(true)
  const { element, setElement } = useUrlProps()

  const handleCharacterHeaderClick = useCallback(() => {
    setOpen((prev) => !prev)
  }, [])

  const handleElementTabClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      setElement(e.currentTarget.name)
    },
    [setElement]
  )

  return (
    <SideMenu>
      <HeaderOffset />
      <StyledList>
        <ListItemButton disableRipple={true} onClick={handleCharacterHeaderClick}>
          <ListItemText>{t('app:characterElement')}</ListItemText>
        </ListItemButton>
        <Collapse in={open}>
          <List disablePadding={true}>
            {elementList.map(({ key, icon }) => (
              <ListItemButton
                key={key}
                component="button"
                name={key.toString()}
                disableRipple={true}
                selected={element === key}
                onClick={handleElementTabClick}
                sx={{ paddingLeft: 4 }}
              >
                {icon}
                <Typography sx={{ paddingLeft: '3px' }}>{t(`common:${key}`)}</Typography>
              </ListItemButton>
            ))}
          </List>
        </Collapse>
      </StyledList>
    </SideMenu>
  )
}

export default AppSideMenu
