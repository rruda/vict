import React from "react";
import { QuizWrap } from "./QuizWrap/QuizWrap";
import { SearchAndFilter } from "./SearchAndFilter/SearchAndFilter";


export const HomePage:React.FC = (props)=>{
    return(
        <div className="HomePage" style = {{display:"flex",flexDirection:"column",flex:"1 1 1px"}} >
            <SearchAndFilter/>
            <QuizWrap/>
        </div>
    )
}