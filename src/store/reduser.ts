import { createAction, createReducer, createSlice } from "@reduxjs/toolkit"
import { Iquiz, IQuizs } from "../types/types"

export interface IState{
    quizs:IQuizs | [],
    lastQuiz: string
}
const initialState:IState = {
    quizs:[],
    lastQuiz:""
}
// const POST_QUIZ_MIDDLEWARE = createAction<any>("POST_QUIZ")

const reduserSlice = createSlice({
    name:'quiz',
    initialState,
    reducers:{
        addQuizMeddleware(state,action){
            state.quizs = action.payload
            console.log(action.payload)
        },
        changeLastQuiz(state,action){
            state.lastQuiz = action.payload
        } 
    },
    extraReducers(builder) {
        
    },
})


export default reduserSlice.reducer
export const {addQuizMeddleware,changeLastQuiz} = reduserSlice.actions