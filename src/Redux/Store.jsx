import { configureStore } from '@reduxjs/toolkit'
import NabarSlice from "./NavbarSlice"
import ServicesSlice from "./ServicesSlice"
import SuccessProjectSlice from "./SuccesProjectSlice"
import TeaamSlice from "./TeamSlice"
export const store = configureStore({
  reducer: {
    Navbar:NabarSlice,
    Service:ServicesSlice,
    Project:SuccessProjectSlice,
    Team:TeaamSlice
  },
})