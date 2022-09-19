import { createAsyncThunk } from "@reduxjs/toolkit"
import { addQuizMeddleware } from "../store/reduser"
import axios from "axios"; 
import { authUser } from "../store/userSilece";

export interface Iauth{
    username:string,
    password:string
}

export const authorisation = createAsyncThunk(
    "user/authorization",
    async ({username,password}:Iauth,{rejectWithValue,dispatch})=>{
        axios.post('http://localhost:5000/api/authorisation',{
            userName:username,
            password:password
        })
        .then((data)=>{dispatch(authUser(data.data))})
    }
)
export const createNewUser = createAsyncThunk(
    "user/authorization",
    async ({username,password}:Iauth,{rejectWithValue,dispatch})=>{
        axios.post('http://localhost:5000/api/user',{
            userName:username,
            password:password
        })
    }
)

