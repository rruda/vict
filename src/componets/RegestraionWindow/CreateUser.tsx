import React from "react";
import useInput from "../../hooks/useInput";
import "./RegestraionWindow.scss"
import axios from "axios"; 


export const CreateUser:React.FC = ()=>{
    const [username,changeUsername,setUsername] = useInput()
    const [password,changePassword,setPassword] = useInput()
    const [passwordCheck,changePasswordCheck,setPasswordCheck] = useInput()

    function createUser(e:any){
        e.preventDefault()
        console.log(username,password)
        axios.post('http://localhost:5000/api/user',{
            userName:username,
            password:password
        })
    }    

    return(
        <div className="regestraion-window__window">
        <h1>Регистрация</h1>
        <form action="" className="regestraion-window__form">
            <div className="regestraion-window__username">
                <label htmlFor="username">Имя пользователя</label>
                <input id="username" type="text" value={username} onChange = {changeUsername} />
            </div>
            <div className="regestraion-window__password">
                <label htmlFor="password">Пароль</label>
                <input type="password" id="password" value={password} onChange = {changePassword} />
            </div>
            <div className="regestraion-window__password-check">
                <label htmlFor="password-check">Пароль</label>
                <input type="password" id="password-check" value={passwordCheck} onChange = {changePasswordCheck} />
            </div>
            <button onClick={(e:any)=>{createUser(e)}}>войти</button>
        </form>
    </div>
    )
} 