import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useAppDispatch } from "../../hooks/othersHook";
import { getQuiz } from "../../middleware/getQuizByName";
import "./SearchAndFilter.scss"

export const SearchAndFilter:React.FC = ()=>{
    const [value,setValue] = useState<string>("")
    const dispatch = useAppDispatch()
    function search(e:React.ChangeEvent<HTMLInputElement>){
        setValue(e.target.value)
    }
    function onKeyPres(e:React.KeyboardEvent){
        if(e.key === "Enter"){
            console.log("search")
        }
    }
    useEffect(()=>{
        dispatch(getQuiz(value))
    },[value])
    return(
        <div className="searc-and-filter">
            <div className="wrapper">
                <div className="searc-and-filter__w">
                    
                    <h1>Q<span>uiz</span> - сайт с викторинами</h1>
                    <input 
                        type="text" 
                        value={value} 
                        onFocus = {()=>setValue("")} 
                        onChange={(e)=>{search(e)}}
                        onKeyDown = {(e)=>onKeyPres(e)} 
                        className="searc-and-filter__search" />
                </div>
            </div>
        </div>
    )
}