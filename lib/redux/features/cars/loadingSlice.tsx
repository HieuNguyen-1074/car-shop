import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: []
}

const loadingSlice = createSlice({

    name: "cars",
    initialState: initialState,
    reducers: {
        setCars: (state, action) => {
            console.log(action)
            state.data = action.payload.res

        }
    }

})

export const { setCars } = loadingSlice.actions

const { reducer: carsReducer } = loadingSlice

export default carsReducer;


