import { configureStore } from "@reduxjs/toolkit"
import usersReducer from "./features/users/usersSlice"
import loadingReducer from "./features/loading/loadingSlice"
import carsReducer from "./features/cars/loadingSlice"



export const makeStore = () =>{
    return configureStore({
        reducer : {
            users : usersReducer , 
            loading : loadingReducer , 
            cars : carsReducer ,
        }
    })
}

export type AppStore = ReturnType<typeof makeStore>


export type RootState = ReturnType<AppStore["getState"]>

export type AppDispatch = AppStore["dispatch"]