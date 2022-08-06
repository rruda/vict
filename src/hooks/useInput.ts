import e from "express";
import {ChangeEventHandler, EventHandler, useState} from "react";


export default ()=>{
    const [value,setValue] = useState<any>()
    function onChange(e:any){
        setValue(e.target.value)
    }
    return [value,onChange,setValue]
}
