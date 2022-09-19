import React, { useState } from "react";
import useInput from "../../hooks/useInput";
import "./RegestraionWindow.scss"
import axios from "axios"; 
import { useDispatch } from "react-redux";
import { authUser } from "../../store/userSilece";
import { authorisation, createNewUser, Iauth } from "../../middleware/authorization";
import { useAppDispatch } from "../../hooks/othersHook";



export const RegestraionWindow:React.FC = ()=>{
    const [username,changeUsername,setUsername] = useInput()
    const [password,changePassword,setPassword] = useInput()
    const [chekPassword,chekChangePassword,setChekPassword] = useInput()
    const [newUser, setNewUser]  = useState(false)
    const dispatch = useAppDispatch()
    
    function auth(e:any){
        e.preventDefault()
        console.log(username,password)
        dispatch(authorisation({username,password}))
        
    }
    function createUser(e:any){
        e.preventDefault()
        console.log(username,password,password,chekPassword)
        if (password == chekPassword){
            dispatch(createNewUser({username,password}))
        }
    }
    return (
        <div className="regestraion-window">
            <div className="regestraion-window__window">
                <h1>{newUser?"Регистрация":"Авторизация"}</h1>
                <form action="" className="regestraion-window__form">
                    <div className="regestraion-window__username">
                        <label htmlFor="username">Имя пользователя</label>
                        <input id="username" type="text" value={username} onChange = {changeUsername} />
                    </div>
                    <div className="regestraion-window__password">
                        <label htmlFor="password">Пароль</label>
                        <input type="password" id="password" value={password} onChange = {changePassword} />
                    </div>
                    {newUser && (
                        <div className="regestraion-window__ password">
                            <label htmlFor="password">Подтверждение пароля</label>
                            <input type="password" id="password" value={chekPassword} onChange = {chekChangePassword} />
                        </div>
                    )}
                    <div className="regestraion-window__bottom">
                        <button onClick={newUser?(e:any)=>{createUser(e)}:(e:any)=>{auth(e)}}>войти</button>
                        <div className="regestraion-window__newUser"><span onClick={()=>{setNewUser(!newUser)}}>{newUser?"aвторизация":"регистрация"}</span></div>
                    </div>
                </form>
            </div>
        </div>
    )
}