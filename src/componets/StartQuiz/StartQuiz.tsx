import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "../../hooks/othersHook";
import { changeLastQuiz } from "../../store/reduser";
import { IquizsStart, IquizStart } from "../../types/types";
import { QuizWiondow } from "../QuizWindow/QuizWindow";
import { Result } from "../Result/Result";
import "./startQuiz.scss"

export const StartQuiz:React.FC = (pops)=>{
    const dispatch = useAppDispatch()

    const ref = useParams()

    const [quiz,setQuiz] = useState<IquizsStart>()
    const [propgress,setPropgress] = useState<number>(0)
    const [answersArr,setAnswersArr] = useState<number>(0)


    useEffect(()=>{
        fetch(`http://localhost:5000/api/quizByID?id=${ref.id}`)
        .then((response)=>response.json())
        .then((data)=>{
            console.log(data);
            setQuiz(data);
        })

        dispatch(changeLastQuiz(ref.id))
    },[])
    return (
        <div className="start-quiz">
                <div className="start-quiz__main">
                    <div className="start-quiz__header">
                        <h2 className="start-quiz__title">{quiz&&quiz[0].title}</h2>
                        {quiz && propgress+1>quiz[0].questions.length?"":<div className="start-quiz__propgerss-bar">{propgress+1}/{quiz&&quiz[0].questions.length}</div>}
                    </div>
                    
                    {quiz?propgress+1 > quiz[0].questions.length? 
                    <Result rightAnswers = {answersArr} questionsLenght = {quiz[0].questions.length}/>
                    :<QuizWiondow 
                        questionLenght = {quiz[0].questions.length}  
                        propgress = {propgress} setPropgress = {setPropgress} 
                        question = {quiz[0].questions[propgress]}
                        answersArr = {answersArr}
                        setAnswersArr = {setAnswersArr}
                        />
                    :""}
                        
                </div>
        </div>
    )
}