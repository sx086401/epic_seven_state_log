import { Character, StateValues } from 'features/states/types'
import { LoginInfo } from 'app/types'
import { camelizeKeys, decamelizeKeys } from 'humps'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { findIndex } from 'lodash'

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
  tagTypes: ['states'],
  baseQuery: fetchBaseQuery({ baseUrl: `http://${API_URL}/api/` }),
  endpoints: (builder) => ({
    getStates: builder.query<StateValues[], object>({
      query: (params) => `states${objToQueryStr(params)}`,
      transformResponse: (resp: any[]): StateValues[] =>
        resp.map((data) => camelizeKeys(data) as StateValues),
      providesTags: (result = []) => result?.map((state) => ({ type: 'states', id: state.id })),
    }),
    updateState: builder.mutation<StateValues, Partial<StateValues>>({
      query: (body) => ({
        url: `states/${body.id}/update`,
        method: 'PUT',
        body: decamelizeKeys(body),
      }),
      async onQueryStarted(body, { dispatch, queryFulfilled }) {
        try {
          const { data: newData } = await queryFulfilled

          dispatch(
            statesApi.util.updateQueryData('getStates', {}, (originData) => {
              const index = findIndex(originData, { id: body.id })
              originData.splice(index, 1, camelizeKeys(newData) as StateValues)
            })
          )
        } catch {
          return
        }
      },
      // invalidatesTags: (result) => [{ type: 'states', id: result?.id }],
    }),
    createState: builder.mutation<StateValues, StateValues>({
      query: (body) => ({ url: 'states', method: 'POST', body: decamelizeKeys(body) }),
      invalidatesTags: (result, error) => {
        if (error) {
          return []
        }

        return ['states']
      },
    }),
    deleteState: builder.mutation<any, number>({
      query: (id) => ({ url: `states/${id}/delete`, method: 'DELETE' }),
      invalidatesTags: (result, error) => {
        if (error) {
          return []
        }

        return ['states']
      },
    }),
  }),
})

export const characterApi = createApi({
  reducerPath: 'character',
  tagTypes: ['characters'],
  baseQuery: fetchBaseQuery({ baseUrl: `http://${API_URL}/api/` }),
  endpoints: (builder) => ({
    getCharacters: builder.query<Character[], any>({
      query: () => `characters`,
      transformResponse: (resp: any[]) => resp.map((data) => camelizeKeys(data) as Character),
    }),
  }),
})

export const userApi = createApi({
  reducerPath: 'user',
  tagTypes: ['user'],
  baseQuery: fetchBaseQuery({ baseUrl: `http://${API_URL}/api/` }),
  endpoints: (builder) => ({
    login: builder.mutation<{ message: string; username: string }, LoginInfo>({
      query: (body) => ({ url: 'login', method: 'POST', body }),
    }),
  }),
})
