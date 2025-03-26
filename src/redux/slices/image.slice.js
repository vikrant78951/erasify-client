import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    originalImage : null,
    transformImage : null,
    loading : false,
    isError : false,
    error : null,

}

const removeBackground = ()=>{

}

const imageSlice = createSlice({
    name : 'image',
    initialState : initialState,
    reducers : {
        addImage : (state,action)=>{
            state.originalImage = action.payload   
        },
        transformedImage : (state,action)=>{
            state.transformedImage = action.payload
        },
    }

})
export const {addImage,transformedImage} = imageSlice.actions
export default imageSlice.reducer
