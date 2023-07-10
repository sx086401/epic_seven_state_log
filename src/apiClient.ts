import { StateValues } from 'features/states/types'
import { camelizeKeys } from 'humps'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const API_URL = process.env.REACT_APP_API_URL

const objToQueryStr = (params?: object) =>
  params
    ? '?' +
      Object.keys(params || {})
        .filter((key) => params![key as keyof typeof params] !== undefined)
        .map((key) => `${key}=${encodeURIComponent(params![key as keyof typeof params])}`)
        .join('&')
    : ''

export const statesApi = createApi({
  reducerPath: 'state',
  refetchOnMountOrArgChange: true,
  baseQuery: fetchBaseQuery({ baseUrl: `http://${API_URL}/api/` }),
  endpoints: (builder) => ({
    getStates: builder.query<StateValues[], object>({
      query: (params) => `states${objToQueryStr(params)}`,
      transformResponse: (resp: any[]): StateValues[] =>
        resp.map((data) => camelizeKeys(data) as StateValues),
    }),
  }),
})
