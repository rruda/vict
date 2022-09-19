import { IState } from "../store/reduser"

export interface Iquiz{
    title:string,
    readonly _id:number
    sumOFquiz:number
    readonly author:string
    complexity:string
    time?:number
}
export type IQuizs = Iquiz[]

export type answers = {value:string,right:boolean}[] 

export interface question{
    text: string,
    answers:answers

}

export interface IquizStart{
    title:string,
    readonly id:number
    readonly author:string
    complexity:string
    questions:question[]
}
export type IquizsStart = IquizStart[]


export type TQuiz = any

export interface a{
    quiz:IState
} 



export interface IUser{
    lastQuizs:IQuizs,
    countOfPassQuiz:number,
    userName:string,
    password:string,
} 
