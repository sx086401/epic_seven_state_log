import { BaseLoading, BasePageCenter } from 'common'
import { Box, Pagination } from '@mui/material'
import { KeyboardEvent, MouseEvent, useMemo } from 'react'
import { statesApi } from 'apiClient'
import { useCallback, useState } from 'react'
import { useUrlProps } from 'hooks'
import AddStateModal from './AddStateModal'
import CharInfo from './CharInfo'
import SearchBar from './SearchBar'

function StatesPage() {
  const { element, setElement } = useUrlProps()
  const [searchRole, setSearchRole] = useState('')
  const [searchRank, setSearchRank] = useState('')
  const [searchWord, setSearchWord] = useState('')
  const [modalOpen, setModalOpen] = useState<boolean>(false)
  const [page, setPage] = useState<number>(1)

  const stateListParams = useMemo(
    () => ({
      ...(element ? { element: element } : {}),
      ...(searchRole ? { role: searchRole } : {}),
      ...(searchRank ? { star: searchRank } : {}),
      ...(searchWord ? { search: searchWord } : {}),
      page,
    }),
    [searchRole, element, searchRank, searchWord, page]
  )

  const { data, isFetching } = statesApi.useGetStatesQuery(stateListParams)

  const count = useMemo(() => {
    if (!data?.count) {
      return 1
    }

    if (data.count < 20) {
      return 1
    }

    return Math.ceil(data.count / 20)
  }, [data?.count])

  const handlePageChange = useCallback(
    (e: React.ChangeEvent<unknown>, page: number) => setPage(page),
    []
  )

  const handleSearchElementClick = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      setElement(e.currentTarget.name)
    },
    [setElement]
  )

  const handleSearchRoleClick = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    setSearchRole(e.currentTarget.name)
  }, [])

  const handleSearchRankClick = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    setSearchRank(e.currentTarget.name)
  }, [])

  const handleSearchKeyUp = useCallback((e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setSearchWord(e.currentTarget.value)
    }
  }, [])

  const handleModalClose = useCallback(() => setModalOpen(false), [])

  const handleModalOpen = useCallback(() => setModalOpen(true), [])

  return (
    <>
      <SearchBar
        searchElement={element ?? ''}
        searchRole={searchRole}
        searchRank={searchRank}
        onElementClick={handleSearchElementClick}
        onRoleClick={handleSearchRoleClick}
        onRankClick={handleSearchRankClick}
        onSearchKeyUp={handleSearchKeyUp}
        onAddClick={handleModalOpen}
      />
      <Box display="flex" justifyContent="end" margin="0px 80px 5px 0px">
        <Pagination
          count={count}
          page={page}
          onChange={handlePageChange}
          variant="outlined"
          shape="rounded"
        />
      </Box>
      <BasePageCenter>
        {!isFetching && data?.states ? (
          <Box>
            {data.states.map((state) => (
              <CharInfo key={state.id} stateData={state} />
            ))}
          </Box>
        ) : (
          <BaseLoading />
        )}
      </BasePageCenter>
      <AddStateModal open={modalOpen} onClose={handleModalClose} />
    </>
  )
}

export default StatesPage
