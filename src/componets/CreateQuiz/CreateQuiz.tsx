import React from "react";
import "./createQuiz.scss"




export const CreateQuiz:React.FC = (props)=>{
    return(
        <div className="create-quiz">
            <h1 className="create-quiz__title">
                Сздание викторины 
            </h1>
            <div className="create-quiz__options">
                <div className="create-quiz__option">
                    <label htmlFor="name">
                        <h2>Название викторины</h2>
                    </label>
                    <input type="text" id="name" className="create-quiz__input" />
                </div>
                <div className="create-quiz__option">
                    <label htmlFor="dificult">
                        <h2>Сложность</h2>
                    </label>
                    <input type={"text"} id="dificult" className="create-quiz__input" />
                </div>
            </div>
        </div>
    )
}