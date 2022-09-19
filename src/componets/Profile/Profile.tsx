import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { authUser } from "../../store/userSilece";
import { IQuizs, IUser } from "../../types/types";
import { Quiz } from "../Quiz/Quiz";
import { RegestraionWindow } from "../RegestraionWindow/RegestraionWindow";
import "./profile.scss"
const img = require("./avatar.jpg")


export const Profile:React.FC = (props)=>{
    const userData:IUser = useSelector((state:any)=> state.user.user)
    console.log(userData)

    const user = {
        userAvatr:"./avatar.jpg"
    }
    const [lastQuiz,setLastQuiz] = useState<IQuizs>([])
    const [quizs,setQuizs] = useState<IQuizs>()
    useEffect(()=>{
        axios.get(`http://localhost:5000/api/quizByAuthor?author=${userData.userName}`)
        .then((data)=>{
            setQuizs(data.data);
        });
        axios.get(`http://localhost:5000/api/quizByID?id=${userData.lastQuizs}`)
        .then((data)=>{setLastQuiz(data.data)})
        
        
    },[userData])
    return (
        userData.userName? (
            <div className="profile">
            <div className="profile__main">
                <div className="profile__avatar">
                    <img src={img} alt="" />
                    <h1 className="profile__username">{userData.userName}</h1>
                </div>
                <div className="profile__information">
                    <h2 className="profile__title">Информация о пользователи</h2>
                    <ul className="profile__data">
                        <li className="profile__name"><div>имя пользователя:</div><span>{userData.userName}</span></li>
                        <li className="profile__number-of-quiz"><div>количество пройденных викторин:</div><span>{userData.countOfPassQuiz}</span></li>
                        <li className="profile__number-of-created-quiz"><div>количество созданных викторин:</div><span>{quizs?.length}</span></li>
                    </ul>
                </div>
            </div>
            <div className="profile__quiz">
                <div className="profile__last-quiz">
                    <h3>Послдение викторины</h3>
                    <div className="profile__quizs">
                        {lastQuiz&&lastQuiz.map((item,imdex)=>{return <Quiz key={item._id} {...item} />})}
                    </div>
                </div>
                <div className="profile__create-quiz">
                    <h3>Созданные виуторины</h3>
                    <div className="profile__quizs">
                        {quizs&&quizs.map((item,imdex)=>{return <Quiz key={item._id} {...item} />})}
                    </div>
                </div>
            </div>
        </div>
        )
        :<RegestraionWindow/>
        
    )
}