import { createSlice } from "@reduxjs/toolkit";

const initialState = false

const loadingSlice = createSlice({

    name: "loading",
    initialState: initialState,
    reducers: {
        setLoadDing: (state, action) => {
            state = action.payload

        }
    }

})

export const { setLoadDing } = loadingSlice.actions

const { reducer: loadingReducer } = loadingSlice

export default loadingReducer;


