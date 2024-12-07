import { createSlice } from '@reduxjs/toolkit'

interface pageAction {
  activeTechStack: number
  openMenu: boolean
  recourseModalImage: string
  recourseModalTitle: string
  recourseOpenModal: boolean
}

const initialState: pageAction = {
  activeTechStack: 1,
  openMenu: false,
  recourseModalImage: '',
  recourseModalTitle: '',
  recourseOpenModal: false,
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
    selectRecourseModalImage: (state, action) => {
      state.recourseModalImage = action.payload
    },
    selectRecourseModalTitle: (state, action) => {
      state.recourseModalTitle = action.payload
    },
    toggleRecourseOpenModal: (state) => {
      state.recourseOpenModal = !state.recourseOpenModal
    },
  },
})
export const {
  changeActiveTechStack,
  toggleMenu,
  selectRecourseModalImage,
  selectRecourseModalTitle,
  toggleRecourseOpenModal
} = pageActionSlice.actions
export default pageActionSlice.reducer
