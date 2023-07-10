import { BaseLoading, BasePageCenter } from 'common'
import { Box } from '@mui/material'
import { KeyboardEvent, MouseEvent, useMemo } from 'react'
import { statesApi } from 'apiClient'
import { useCallback, useState } from 'react'
import { useUrlProps } from 'hooks'
import CharInfo from './CharInfo'
import SearchBar from './SearchBar'

function StatesPage() {
  const [searchClass, setSearchClass] = useState('')
  const [searchRank, setSearchRank] = useState('')
  const [searchWord, setSearchWord] = useState('')
  const { element, setElement } = useUrlProps()

  const stateListParams = useMemo(
    () => ({
      ...(element ? { element: element } : {}),
      ...(searchClass ? { classes: searchClass } : {}),
      ...(searchRank ? { star: searchRank } : {}),
      ...(searchWord ? { search: searchWord } : {}),
    }),
    [searchClass, element, searchRank, searchWord]
  )

  const { data: states, isFetching } = statesApi.useGetStatesQuery(stateListParams)

  const handleSearchElementClick = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      setElement(e.currentTarget.name)
    },
    [setElement]
  )

  const handleSearchClassClick = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    setSearchClass(e.currentTarget.name)
  }, [])

  const handleSearchRankClick = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    setSearchRank(e.currentTarget.name)
  }, [])

  const handleSearchKeyUp = useCallback((e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setSearchWord(e.currentTarget.value)
    }
  }, [])

  return (
    <>
      <SearchBar
        searchElement={element ?? ''}
        searchClass={searchClass}
        searchRank={searchRank}
        onElementClick={handleSearchElementClick}
        onClassClick={handleSearchClassClick}
        onRankClick={handleSearchRankClick}
        onSearchKeyUp={handleSearchKeyUp}
      />
      <BasePageCenter>
        {!isFetching && states ? (
          <Box>
            {states.map((state) => (
              <CharInfo key={state.id} stateData={state} />
            ))}
          </Box>
        ) : (
          <BaseLoading />
        )}
      </BasePageCenter>
    </>
  )
}

export default StatesPage
