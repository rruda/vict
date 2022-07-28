import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { IquizsStart, IquizStart } from "../../types/types";
import { QuizWiondow } from "../QuizWindow/QuizWindow";
import { Result } from "../Result/Result";
import "./startQuiz.scss"

export const StartQuiz:React.FC = (pops)=>{
    const quiz:IquizsStart = [
        { title:"Черепахи",id:0,complexity:"hard",author:"Rula",questions:[
            {text:"Сколько видов черепах насчитывается на нашей планете?",answers:[{value:"230",right:false},{value:"231",right:false},{value:"200",right:false},{value:"130",right:false}]},
            {text:"Какова максимальная продолжительность жизни черепахи?",answers:[{value:"230",right:true},{value:"231",right:true},{value:"200",right:false},{value:"130",right:false}]},
            {text:"Сколько видов черепах насчитывается на нашей планете?",answers:[{value:"230",right:true},{value:"231",right:false},{value:"200",right:false},{value:"130",right:false}]},
            {text:"Черепахи относятся к ...?",answers:[{value:"230",right:true},{value:"231",right:false},{value:"200",right:false},{value:"130",right:false}]},
        ]},    
    ]
    const ref = useParams()
    console.log(ref)
    const [propgress,setPropgress] = useState<number>(0)
    const [answersArr,setAnswersArr] = useState<number>(0)

    console.log(propgress)
    return (
        <div className="start-quiz">
                <div className="start-quiz__main">
                    <div className="start-quiz__header">
                        <h2 className="start-quiz__title">{quiz[0].title}</h2>
                        {propgress+1>quiz[0].questions.length?"":<div className="start-quiz__propgerss-bar">{propgress+1}/{quiz[0].questions.length}</div>}
                    </div>
                    {propgress+1 > quiz[0].questions.length? 
                    <Result rightAnswers = {answersArr} questionsLenght = {quiz[0].questions.length}/>
                    :<QuizWiondow 
                        questionLenght = {quiz[0].questions.length}  
                        propgress = {propgress} setPropgress = {setPropgress} 
                        question = {quiz[0].questions[propgress]}
                        answersArr = {answersArr}
                        setAnswersArr = {setAnswersArr}
                        />}
                        
                </div>
        </div>
    )
}