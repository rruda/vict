import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../types/types";

interface IUserSlice{
    user:IUser|{}
}

const initialState:IUserSlice = {
    user:{
    }
}

const userSlaice = createSlice({
    name:"user",
    initialState:initialState,
    reducers:{
        authUser(state,action){
            state.user = action.payload
        }
    }
})
export default userSlaice.reducer
export const {authUser} = userSlaice.actions