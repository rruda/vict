import axios from "axios";
import React, { useState } from "react";
import useInput from "../../hooks/useInput";
import { answers,question } from "../../types/types";
import { Input } from "../input/input";
import "./createQuiz.scss"




export const CreateQuiz:React.FC = (props)=>{

    const [nameQuestion,changeNameQuestion,setNameQuestion] = useInput()
    const [name,changeName] = useInput()
    const [dificult,changeDificult] = useInput()
    const [quizs,changeQuizs] = useInput()
    const [answer,changeAnswer,setAnswer] = useInput()
    const [right,changeRight] = useInput()

    const [answers,setAnswers] = useState<answers>([])
    const [question,setQuestion] = useState<question[]>([])

    function fetc(e:any){
        e.preventDefault()
        axios.post('http://localhost:5000/api/quiz',{
            title:name,
            complexity:dificult,
            author:"Rula",
            questions:question
        })
    }

    function addqQuestion(e:any){
        e.preventDefault()
        if(answers.length >= 2){
            setQuestion([...question,{text:nameQuestion,answers:answers}])
            setAnswers([])
            setNameQuestion("")
        }

    }
    function addAnswer(e:any){
        e.preventDefault()
        setAnswers([...answers,{value:answer,right:right}])
        setAnswer("")
    }
    console.log(question)

    return(
        <div className="create-quiz">
            <h1 className="create-quiz__title">
                Сздание викторины 
            </h1>
            <form className="create-quiz__options">
                <div className="creare-quiz__left">
                    <div className="create-quiz__option">
                        <label htmlFor="name">
                            <h2>Название викторины:</h2>
                        </label>
                        <input className="input" value={name} onChange = {(e)=>{changeName(e)}} />
                    </div>
                    <div className="create-quiz__option">
                        <label htmlFor="dificult">
                            <h2>Сложность:</h2>
                        </label>
                        <input className="input" value={dificult} onChange = {(e)=>{changeDificult(e)}} />
                    </div>
                </div>
                <div className="create-quiz__right">
                    <div className="create-quiz__option">
                        <label htmlFor="dificult">
                            <h2>Вопросы:</h2>
                        </label>
                        <input className="input" value={nameQuestion} onChange = {(e)=>{changeNameQuestion(e)}} />
                        <button onClick={(e)=>{addqQuestion(e)}}>добавить</button>
                    </div>
                    <div className="create-quiz__answers">
                        <h2>Ответы:</h2>
                        <input value={answer} onChange = {changeAnswer} type="text" />
                        <input value={right} onChange={changeRight} type={"checkbox"} />
                        <button onClick={(e)=>{addAnswer(e)}}>+</button>
                    </div>
                    {question&&question.map((item,index)=>{
                        return <p>{item.text}</p>
                    })}
                </div>
                <button onClick={(e)=>fetc(e)}></button>
            </form>
        </div>
    )
}