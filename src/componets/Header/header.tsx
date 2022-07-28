import React from "react";
import { Link } from "react-router-dom";
import "./header.scss"


export const Header:React.FC = (props)=>{
    return (
        <header className="header">
            <div className="header__logo">
                <span>Q</span>uiz
            </div>
            <ul className="header__links">
                <Link to={"/addQuiz" }>создать викторину</Link>
                <Link to={"/profile" }>профиль</Link>
            </ul>
        </header>
    )
}