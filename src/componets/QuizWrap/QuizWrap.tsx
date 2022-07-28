import React from "react";
import { IQuizs } from "../../types/types";
import { Quiz } from "../Quiz/Quiz";
import "./quiz.scss" 

export const QuizWrap:React.FC = ()=>{
    const quizs:IQuizs = [
        {
            title:"Брачный период у среднеазиатской черепахи",id:0,sumOFquiz:0,complexity:"hard",author:"Rula",
        },
        {title:"КАК жать 1000bpm в секунду",time:10,id:1,sumOFquiz:10,complexity:"imposibel",author:"Rula"}
    ]

    return(
        <div className="quiz">
            <div className="wrapper">
                <div className="quiz__items">
                    {quizs.map((item,imdex)=>{
                        return <Quiz key={item.id} {...item} />
                    })}
                </div>
            </div>
        </div>
    )
}