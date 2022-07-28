import React from "react";
import { IQuizs } from "../../types/types";
import { Quiz } from "../Quiz/Quiz";
import "./profile.scss"
const img = require("./avatar.jpg")


export const Profile:React.FC = (props)=>{
    const user = {
        userAvatr:"./avatar.jpg"
    }
    const quizs:IQuizs = [
        {
            title:"Брачный период у среднеазиатской черепахи",id:0,sumOFquiz:0,complexity:"hard",author:"Rula",
        },
        {title:"КАК жать 1000bpm в секунду",time:10,id:1,sumOFquiz:10,complexity:"imposibel",author:"Rula"}
    ]
    return (
        <div className="profile">
            <div className="profile__main">
                <div className="profile__avatar">
                    <img src={img} alt="" />
                    <h1 className="profile__username">Rula</h1>
                </div>
                <div className="profile__information">
                    <h2 className="profile__title">Информация о пользователи</h2>
                    <ul className="profile__data">
                        <li className="profile__name"><div>имя пользователя:</div><span>Rula</span></li>
                        <li className="profile__number-of-quiz"><div>количество пройденных викторин:</div><span>0</span></li>
                        <li className="profile__number-of-created-quiz"><div>количество созданных викторин:</div><span>0</span></li>
                    </ul>
                </div>
            </div>
            <div className="profile__quiz">
                <div className="profile__last-quiz">
                    <h3>Послдение викторины</h3>
                    <div className="profile__quizs">
                        {quizs.map((item,imdex)=>{return <Quiz key={item.id} {...item} />})}
                    </div>
                </div>
                <div className="profile__create-quiz">
                    <h3>Созданные виуторины</h3>
                    <div className="profile__quizs">
                        {quizs.map((item,imdex)=>{return <Quiz key={item.id} {...item} />})}
                    </div>
                </div>
            </div>
        </div>
    )
}