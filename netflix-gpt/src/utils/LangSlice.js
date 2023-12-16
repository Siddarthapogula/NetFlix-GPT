import { createSlice } from "@reduxjs/toolkit";

const LangSlice = createSlice({
    name:"lang",
    initialState: {
        language : 'English'
    },
    reducers:{
        setLanguage : (state, action)=>{
            state.language = action.payload;
        }
    }
});

export const {setLanguage} = LangSlice.actions;
export default LangSlice.reducer;