export interface Iquiz{
    title:string,
    readonly id:number
    sumOFquiz:number
    readonly author:string
    complexity:string
    time?:number
}
export type IQuizs = Iquiz[]


export interface question{
    text: string,
    answers:{value:string,right:boolean}[]

}

export interface IquizStart{
    title:string,
    readonly id:number
    sumOFquiz:number
    readonly author:string
    complexity:string
    questions:question[]
}
export type IquizsStart = IquizStart[]


export type TQuiz = any