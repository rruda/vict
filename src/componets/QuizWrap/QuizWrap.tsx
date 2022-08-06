import React, { useEffect, useState } from "react";
import { IQuizs } from "../../types/types";
import { Quiz } from "../Quiz/Quiz";
import "./quiz.scss" 

export const QuizWrap:React.FC = ()=>{
    // const quizs:IQuizs = [
    //     {
    //         title:"Черепахи",id:0,sumOFquiz:0,complexity:"hard",author:"Rula",
    //     },
    //     {title:"КАК жать 1000bpm в секунду",time:10,id:1,sumOFquiz:10,complexity:"imposibel",author:"Rula"}
    // ]
    const [quizs,steQuizs] = useState<IQuizs>()
    useEffect(()=>{
        fetch("http://localhost:5000/api/quiz")
        .then((response)=>response.json())
        .then((data)=>{steQuizs(data);console.log(data[0]._id)})
    },[])
    return(
        <div className="quiz">
            <div className="wrapper">
                <div className="quiz__items">
                    {quizs&&quizs.map((item,imdex)=>{
                        return <Quiz key={item._id} {...item} />
                    })}
                </div>
            </div>
        </div>
    )
}