import React, { useState } from "react";
import "./SearchAndFilter.scss"

export const SearchAndFilter:React.FC = ()=>{
    const [value,setValue] = useState<string>("Поиск")
    function search(e:React.ChangeEvent<HTMLInputElement>){
        setValue(e.target.value)
    }
    function onKeyPres(e:React.KeyboardEvent){
        if(e.key === "Enter"){
            console.log("search")
        }
    }
    return(
        <div className="searc-and-filter">
            <div className="wrapper">
                <div className="searc-and-filter__w">
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