import {
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
  value: string
  onClick: (e: MouseEvent<HTMLButtonElement>) => void
}

function SearchIconButton({ name, icon, value, onClick }: SearchIconButtonProps) {
  return (
    <StyledButton
      size="small"
      name={name}
      disableTouchRipple={true}
      selected={value === name}
      onClick={onClick}
    >
      {icon}
    </StyledButton>
  )
}

interface Props {
  searchElement: string
  searchClass: string
  searchRank: string
  onElementClick: (e: MouseEvent<HTMLButtonElement>) => void
  onClassClick: (e: MouseEvent<HTMLButtonElement>) => void
  onRankClick: (e: MouseEvent<HTMLButtonElement>) => void
}

function SearchBar({
  searchElement,
  searchClass,
  searchRank,
  onElementClick,
  onClassClick,
  onRankClick,
}: Props) {
  const { t } = useTranslation('common')

  return (
    <BaseStickyBar>
      <Box marginRight="30px">
        <SearchIconButton name="all" value={searchElement} icon={'All'} onClick={onElementClick} />
        <SearchIconButton
          name="fire"
          value={searchElement}
          icon={<FireIcon />}
          onClick={onElementClick}
        />
        <SearchIconButton
          name="ice"
          value={searchElement}
          icon={<IceIcon />}
          onClick={onElementClick}
        />
        <SearchIconButton
          name="earth"
          value={searchElement}
          icon={<EarthIcon />}
          onClick={onElementClick}
        />
        <SearchIconButton
          name="light"
          value={searchElement}
          icon={<LightIcon />}
          onClick={onElementClick}
        />
        <SearchIconButton
          name="dark"
          value={searchElement}
          icon={<DarkIcon />}
          onClick={onElementClick}
        />
      </Box>
      <Box marginRight="30px">
        <SearchIconButton name="all" value={searchClass} icon={'All'} onClick={onClassClick} />
        <SearchIconButton
          name="warrior"
          value={searchClass}
          icon={<WarriorIcon />}
          onClick={onClassClick}
        />
        <SearchIconButton
          name="knight"
          value={searchClass}
          icon={<KnightIcon />}
          onClick={onClassClick}
        />
        <SearchIconButton
          name="thief"
          value={searchClass}
          icon={<ThiefIcon />}
          onClick={onClassClick}
        />
        <SearchIconButton
          name="ranger"
          value={searchClass}
          icon={<RangerIcon />}
          onClick={onClassClick}
        />
        <SearchIconButton
          name="mage"
          value={searchClass}
          icon={<MageIcon />}
          onClick={onClassClick}
        />
        <SearchIconButton
          name="soul_weaver"
          value={searchClass}
          icon={<SoulWeaverIcon />}
          onClick={onClassClick}
        />
      </Box>
      <Box marginRight="30px">
        <SearchIconButton name="all" value={searchRank} icon={'All'} onClick={onRankClick} />
        <SearchIconButton
          name="3"
          value={searchRank}
          icon={
            <>
              3<StarIcon />
            </>
          }
          onClick={onRankClick}
        />
        <SearchIconButton
          name="4"
          value={searchRank}
          icon={
            <>
              4<StarIcon />
            </>
          }
          onClick={onRankClick}
        />
        <SearchIconButton
          name="5"
          value={searchRank}
          icon={
            <>
              5<StarIcon />
            </>
          }
          onClick={onRankClick}
        />
      </Box>
      <BaseSearchBlock placeholder={t('searchCharacter')} sx={{ marginRight: '30px' }} />
      <BaseSearchBlock placeholder={t('searchEditor')} />
    </BaseStickyBar>
  )
}

export default SearchBar
