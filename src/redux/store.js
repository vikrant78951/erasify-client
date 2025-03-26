

import { configureStore } from "@reduxjs/toolkit";

// slices 
import imageSlice from './slices/image.slice'
import authSlice from "./slices/auth.slice";


// store 
export const store = configureStore({
    reducer : {
        auth : authSlice,
        image : imageSlice,
    }
});