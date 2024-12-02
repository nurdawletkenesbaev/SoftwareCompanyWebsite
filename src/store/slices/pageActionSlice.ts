import { createSlice } from '@reduxjs/toolkit'

interface pageAction {
  activeTechStack: number
  openMenu: boolean
}

const initialState: pageAction = {
  activeTechStack: 1,
  openMenu: false,
}

const pageActionSlice = createSlice({
  name: 'pageActionSlice',
  initialState,
  reducers: {
    changeActiveTechStack: (state, action) => {
      state.activeTechStack = action.payload
    },
    toggleMenu: (state, action) => {
      state.openMenu = action.payload
    },
  },
})
export const { changeActiveTechStack
             , toggleMenu 
             } = pageActionSlice.actions
export default pageActionSlice.reducer
