export const apiBaseUrl=process.env['NEXT_PUBLIC_API_BASE_URL']??'[!!NEXT_PUBLIC_API_BASE_URL env var not set!!]';

export interface Question
{
    id:string;
    title:string;
    description:string;
    imageUrl:string;
    options:Option[];
}

export interface Option
{
    id:string;
    title:string;
    description:string;
}

export interface Answer
{
    questionId:string;
    optionId:string;
}

export const isAnswer=(value:any):boolean=>(
    value &&
    (typeof (value as Answer).optionId === 'string') &&
    (typeof (value as Answer).questionId === 'string')
)
