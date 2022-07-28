import React from "react";
import { Link } from "react-router-dom";
import { TQuiz } from "../../types/types";
import "./quiz.scss"


export const Quiz:React.FC<TQuiz> = (props)=>{
    return( 
        <Link to={`/${props.id}`} className="quiz-item">
            <h3 className="quiz-item__title">{props.title}</h3>
            <div className="quiz-item__descripion">
                <div className="quiz-item__complexity"><span>сложность:</span> {props.complexity}</div>
                <div className="quiz-item__numberOfQuestions"><span>количесвто вопросов:</span> {props.sumOFquiz}</div>
                <div className="quiz-item__Author"><span>автор:</span> {props.author}</div>
            </div>
        </Link>
    )
}