import { characterApi, statesApi } from 'apiClient'
import { configureStore } from '@reduxjs/toolkit'
import { logger } from 'redux-logger'

const reducer = {
  [statesApi.reducerPath]: statesApi.reducer,
  [characterApi.reducerPath]: characterApi.reducer,
}

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(process.env.NODE_ENV === 'development' ? [logger] : [])
      .concat(statesApi.middleware)
      .concat(characterApi.middleware),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
