import { type } from "@testing-library/user-event/dist/type";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../hooks/othersHook";import { IState } from "../../store/reduser";
import { a, Iquiz, IQuizs } from "../../types/types";
import { Quiz } from "../Quiz/Quiz";
import "./quiz.scss" 


export const QuizWrap:React.FC = ()=>{
    const dispatch = useAppDispatch()
    // let [quizs,steQuizs] = useState<IQuizs>()
    
    // useEffect(()=>{S
    //     dispatch(getQuiz())
    // },[])
    const quizs:IQuizs = useSelector((state:any)=>state.quiz.quizs)
    console.log(quizs)
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