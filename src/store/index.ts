import { configureStore } from '@reduxjs/toolkit'
import { logger } from 'redux-logger'
import { statesApi } from 'apiClient'

const reducer = {
  [statesApi.reducerPath]: statesApi.reducer,
}

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(process.env.NODE_ENV === 'development' ? [logger] : [])
      .concat(statesApi.middleware),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
