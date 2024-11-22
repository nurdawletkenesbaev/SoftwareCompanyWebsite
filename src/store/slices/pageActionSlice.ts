import { createSlice } from '@reduxjs/toolkit'

interface pageAction {
  activeTechStack: number
}

const initialState: pageAction = {
  activeTechStack: 1,
}

const pageActionSlice = createSlice({
  name: 'pageActionSlice',
  initialState,
  reducers: {
    changeActiveTechStack: (state, action) => {
        state.activeTechStack = action.payload
    },
  },
})
export const {changeActiveTechStack} = pageActionSlice.actions
export default pageActionSlice.reducer
