import React from "react";
import { QuizWrap } from "./QuizWrap/QuizWrap";
import { SearchAndFilter } from "./SearchAndFilter/SearchAndFilter";


export const HomePage:React.FC = (props)=>{
    return(
        <>
            <SearchAndFilter/>
            <QuizWrap/>
        </>
    )
}