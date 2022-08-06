import React, { ChangeEvent, useState } from "react";
import "./input.scss"
interface IInput{
    id:string
    type:string
}

export const Input:React.FC<IInput> = ({id,type})=>{
    const [value,setValue] = useState<any>()
    function onChange(e:ChangeEvent<HTMLInputElement>){
        setValue(e.target.value)
    }
    return(
        <input className="input" value={value} id = {id} type = {type} onChange = {(e)=>{onChange(e)}} />
    )
}