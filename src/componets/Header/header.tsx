import React from "react";
import { Link } from "react-router-dom";
import "./header.scss"


export const Header:React.FC = (props)=>{
    return (
        <header className="header">
            <Link to={"/"} className="header__logo">
                <span>Q</span>uiz
            </Link>
            <ul className="header__links">
                <Link to={"/createQuiz" }>создать викторину</Link>
                <Link to={"/profile" }>профиль</Link>
            </ul>
        </header>
    )
}