import {
  BaseButton,
  BaseSearchBlock,
  BaseStickyBar,
  DarkIcon,
  EarthIcon,
  FireIcon,
  IceIcon,
  KnightIcon,
  LightIcon,
  MageIcon,
  RangerIcon,
  SoulWeaverIcon,
  StarIcon,
  ThiefIcon,
  WarriorIcon,
} from 'common'
import { Box, IconButton, styled } from '@mui/material'
import { MouseEvent } from 'react'
import { useTranslation } from 'react-i18next'

const StyledButton = styled(IconButton, { shouldForwardProp: (prop) => prop !== 'selected' })(
  ({ selected }: { selected: boolean }) => ({
    border: '1px solid #5A4738',
    borderRadius: 0,
    height: '40px',
    padding: '8px',
    backgroundColor: selected ? '#5A4738' : 'none',
  })
)

interface SearchIconButtonProps {
  name: string
  icon: React.ReactNode
  selectedValue: string
  onClick: (e: MouseEvent<HTMLButtonElement>) => void
}

function SearchIconButton({ name, icon, selectedValue, onClick }: SearchIconButtonProps) {
  return (
    <StyledButton
      size="small"
      name={name}
      disableTouchRipple={true}
      selected={selectedValue === name}
      onClick={onClick}
    >
      {icon}
    </StyledButton>
  )
}

interface Props {
  searchElement: string
  searchRole: string
  searchRank: string
  onElementClick: (e: MouseEvent<HTMLButtonElement>) => void
  onRoleClick: (e: MouseEvent<HTMLButtonElement>) => void
  onRankClick: (e: MouseEvent<HTMLButtonElement>) => void
  onSearchKeyUp?: (e: React.KeyboardEvent<HTMLInputElement>) => void
}

function SearchBar({
  searchElement,
  searchRole,
  searchRank,
  onElementClick,
  onRoleClick,
  onRankClick,
  onSearchKeyUp,
}: Props) {
  const { t } = useTranslation('common')

  return (
    <BaseStickyBar>
      <Box display="flex" marginRight="30px">
        <SearchIconButton
          name=""
          selectedValue={searchElement}
          icon={'All'}
          onClick={onElementClick}
        />
        <SearchIconButton
          name="fire"
          selectedValue={searchElement}
          icon={<FireIcon />}
          onClick={onElementClick}
        />
        <SearchIconButton
          name="ice"
          selectedValue={searchElement}
          icon={<IceIcon />}
          onClick={onElementClick}
        />
        <SearchIconButton
          name="earth"
          selectedValue={searchElement}
          icon={<EarthIcon />}
          onClick={onElementClick}
        />
        <SearchIconButton
          name="light"
          selectedValue={searchElement}
          icon={<LightIcon />}
          onClick={onElementClick}
        />
        <SearchIconButton
          name="dark"
          selectedValue={searchElement}
          icon={<DarkIcon />}
          onClick={onElementClick}
        />
      </Box>
      <Box display="flex" marginRight="30px">
        <SearchIconButton name="" selectedValue={searchRole} icon={'All'} onClick={onRoleClick} />
        <SearchIconButton
          name="warrior"
          selectedValue={searchRole}
          icon={<WarriorIcon />}
          onClick={onRoleClick}
        />
        <SearchIconButton
          name="knight"
          selectedValue={searchRole}
          icon={<KnightIcon />}
          onClick={onRoleClick}
        />
        <SearchIconButton
          name="thief"
          selectedValue={searchRole}
          icon={<ThiefIcon />}
          onClick={onRoleClick}
        />
        <SearchIconButton
          name="ranger"
          selectedValue={searchRole}
          icon={<RangerIcon />}
          onClick={onRoleClick}
        />
        <SearchIconButton
          name="mage"
          selectedValue={searchRole}
          icon={<MageIcon />}
          onClick={onRoleClick}
        />
        <SearchIconButton
          name="soul_weaver"
          selectedValue={searchRole}
          icon={<SoulWeaverIcon />}
          onClick={onRoleClick}
        />
      </Box>
      <Box display="flex" marginRight="30px">
        <SearchIconButton name="" selectedValue={searchRank} icon={'All'} onClick={onRankClick} />
        <SearchIconButton
          name="3"
          selectedValue={searchRank}
          icon={
            <>
              3<StarIcon />
            </>
          }
          onClick={onRankClick}
        />
        <SearchIconButton
          name="4"
          selectedValue={searchRank}
          icon={
            <>
              4<StarIcon />
            </>
          }
          onClick={onRankClick}
        />
        <SearchIconButton
          name="5"
          selectedValue={searchRank}
          icon={
            <>
              5<StarIcon />
            </>
          }
          onClick={onRankClick}
        />
      </Box>
      <BaseSearchBlock placeholder={t('searchPlaceholder')} onKeyUp={onSearchKeyUp} width={250} />
      <BaseButton buttonText={t('addState')} sx={{ marginLeft: '20px', width: '80px' }} />
    </BaseStickyBar>
  )
}

export default SearchBar
