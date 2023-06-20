import { BasePageCenter } from 'common'
import { Box } from '@mui/material'
import { MouseEvent } from 'react'
import { useCallback, useState } from 'react'
import CharInfo from './CharInfo'
import SearchBar from './SearchBar'

function StatesPage() {
  const [searchElement, setSearchElement] = useState('all')
  const [searchClass, setSearchClass] = useState('all')
  const [searchRank, setSearchRank] = useState('all')

  const handleSearchElementClick = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    setSearchElement(e.currentTarget.name)
  }, [])

  const handleSearchClassClick = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    setSearchClass(e.currentTarget.name)
  }, [])

  const handleSearchRankClick = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    setSearchRank(e.currentTarget.name)
  }, [])

  return (
    <>
      <SearchBar
        searchElement={searchElement}
        searchClass={searchClass}
        searchRank={searchRank}
        onElementClick={handleSearchElementClick}
        onClassClick={handleSearchClassClick}
        onRankClick={handleSearchRankClick}
      />
      <BasePageCenter>
        <Box>
          <CharInfo />
          <CharInfo />
        </Box>
      </BasePageCenter>
    </>
  )
}

export default StatesPage
