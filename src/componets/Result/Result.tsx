import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { IUser } from "../../types/types";
import "./result.scss"

interface IResult{
    rightAnswers:number,
    questionsLenght:number,
}

export const Result:React.FC<IResult> = (props)=>{
    const [height,setHeight] = useState(0)

    const userData:IUser = useSelector((state:any)=> state.user.user)
    const lastQuiz = useSelector((state:any)=> state.quiz.lastQuiz)
    const percent:number = props.rightAnswers/props.questionsLenght * 100
    const animationSyle:{} = {
        position:"absolute",
        bottom:0,
        backgroundColor:"rgb(255, 183, 242)",
        width:"150%",
        height:`${percent * height}%`,

    }
    useEffect(()=>{
        setTimeout(()=>{setHeight(1)},1);
        
        userData.userName && axios.post(`http://localhost:5000/api/addLastQuiz`,{
            userName:userData.userName,
            quiz:lastQuiz,
        })
    },[])
    console.log(percent)
    function resultMassage(percent:number){
        if(percent <= 25){
            return "baka!"
        }
        else if(25 < percent && percent <= 50){
            return "можно попробовать улучшить результат!"
        }
        else if(50 < percent && percent < 75){
            return "неплохо, но можно лучше!"
        }
        else if(percent==100){
            return "идеально!"
        }
        else if(percent>=75){
            return "а вы хорошо разбираетесь в этом!"
        }
    }
    return <div className="result">
        <h1 className="result__title">Твой пезультат</h1>
        <div className="result__circle">
            <div style={animationSyle} className="result__circle-animation"></div>
            <div className="result__circle-inside">
                <h2>{props.rightAnswers} / {props.questionsLenght}</h2>
            </div>
        </div>
        <p className="result__massage">
            {resultMassage(percent)}
        </p>
    </div>
}