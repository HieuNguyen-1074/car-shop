import { createSlice } from "@reduxjs/toolkit";


interface StateUserProps{
    data : User[], 
    userLogined : User
}

const initialState = {
    data : [] , 
    userLogined : {
        userName : '' , 
        password : ''
    }
}

export const usersSlice = createSlice({
    name: "users" , 
    initialState , 
    reducers : {
        setUser : (state , action) =>{
            const newState = {
                ...state , 
                userLogined : action.payload
            }
            state =newState
        },
        setUsers  :(state , action)=>{
            const newState = {
                ...state , 
                data : action.payload
            }
            state = newState
        }
    }

})

export const {setUser} = usersSlice.actions
const {reducer : usersReducer} = usersSlice
export default usersReducer;