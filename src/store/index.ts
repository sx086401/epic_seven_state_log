import { configureStore } from '@reduxjs/toolkit'
import { logger } from 'redux-logger'

const reducer = {}

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(process.env.NODE_ENV === 'development' ? [logger] : []),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
