import { configureStore } from '@reduxjs/toolkit'
import e_Commerce from '../Store/Features/Features'

export const store = configureStore({
  reducer: {
    Commerce: e_Commerce,
  },
})
