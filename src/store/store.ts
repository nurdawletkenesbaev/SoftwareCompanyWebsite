import { configureStore } from '@reduxjs/toolkit'
import pageActionSlice from './slices/pageActionSlice'

export const store = configureStore({
    reducer: {
        pageActions: pageActionSlice
    }
})

export type RootState = ReturnType<typeof store.getState>