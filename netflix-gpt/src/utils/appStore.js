import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import moviesReducer from "./movieSlice"
import rootReducer from "./rootReducer";
const appStore = configureStore(
    {
        reducer : rootReducer,
    }
)
export default appStore;