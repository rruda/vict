import { combineReducers, configureStore } from '@reduxjs/toolkit'
import reducer from './reduser'
import userSilece from './userSilece'

const redusers = combineReducers(reducer)


export const store = configureStore({
    reducer:{
        quiz:reducer,
        user:userSilece
    }
})


export type AppDispath = typeof store.dispatch; 
