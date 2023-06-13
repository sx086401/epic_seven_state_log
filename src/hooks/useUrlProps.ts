import { useCallback } from 'react'
import { useSearchParams } from 'react-router-dom'

function useUrlProps() {
  const [searchParams, setSearchParams] = useSearchParams()

  const elements = searchParams.getAll('element')

  const updateSearchParamsPartially = useCallback(
    (params: Record<string, string | string[] | null>) => {
      const newSearchParams = new URLSearchParams(searchParams)

      Object.entries(params).forEach(([key, value]) => {
        if (value === null) {
          newSearchParams.delete(key)
        } else if (typeof value === 'string') {
          newSearchParams.set(key, value)
        } else {
          value.forEach((item) => newSearchParams.append(key, item))
        }
      })

      setSearchParams(newSearchParams)
    },
    [searchParams, setSearchParams]
  )

  const setElement = useCallback(
    (params: string | string[]) => updateSearchParamsPartially({ element: params }),
    [updateSearchParamsPartially]
  )

  return {
    elements,
    setElement,
  }
}

export default useUrlProps
