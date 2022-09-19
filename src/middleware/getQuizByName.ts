import { createAsyncThunk } from "@reduxjs/toolkit"
import { addQuizMeddleware } from "../store/reduser"


export const getQuiz = createAsyncThunk(
    "quiz/getQuiz",
    async (name:string,{rejectWithValue,dispatch})=>{
        if (name){
            const response = await fetch(`http://localhost:5000/api/quizByName?name=${name}`)
            const data = await response.json()
            dispatch(addQuizMeddleware(data))
        }
        else{
            const response = await fetch(`http://localhost:5000/api/quiz`)
            const data = await response.json()
            dispatch(addQuizMeddleware(data))
        }
    }
)
