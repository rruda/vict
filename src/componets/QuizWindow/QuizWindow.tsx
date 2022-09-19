import React, { useEffect, useState } from "react";
import { question } from "../../types/types";
import "./quizWindow.scss"

interface IQuizWindow{
    question:question,
    propgress:number,
    questionLenght:number,
    answersArr:number,
    setPropgress:(value:number)=>void,
    setAnswersArr:(value:any)=>void
}


export const QuizWiondow:React.FC<IQuizWindow> = (props)=>{
    function click(r:boolean){
        setClick(true)
        if(r&&howManyClick == 0){
            props.setAnswersArr(props.answersArr+1)
        }
        steHowManyClick(howManyClick+1)

    }

    function setColor(color:boolean){
        if(Cclick){
            if(color){
                return {backgroundColor:"#5ae35a"}
            }
            else{
                return {backgroundColor:"#f54463"}
            }
        }
    }

    const [howManyClick,steHowManyClick] = useState<number>(0)
    const [Cclick,setClick] = useState<boolean>(false)

    useEffect(()=>{
        setClick(false)
        steHowManyClick(0)
    },[props.propgress])

    return(
        <div className="quiz-wiondow">
            <h2 className="quiz-wiondow__question">
                {props.question.text}
            </h2>
            <ul className="quiz-wiondow__answers">
                {props.question.answers.map((item,index)=>{
                    return(
                        <li 
                            style={setColor(item.right)} 
                            onClick={()=>{click(item.right)}} 
                            className="quiz-wiondow__answer">
                                <span>{index+1}</span> {item.value}
                        </li>
                    ) 
                })}
            </ul>
            <div className="quiz-wiondo__buttons">
                <button 
                    onClick={ () => props.setPropgress( props.propgress>1 ? props.propgress-1: props.propgress)}   
                    className="prev-btn">
                        {"<"}
                </button>
                {}
                <button 
                    onClick={ () => props.setPropgress(props.propgress+1)} 
                    className="next-btn">
                        {props.propgress+1 == props.questionLenght? "завершить":">"}
                </button>
            </div>
        </div>    
        )
}