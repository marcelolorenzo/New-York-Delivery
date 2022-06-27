import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/u serSlice"

const store = configureStore({
    reducer: {
        userData: userReducer
    }
})

export default store
