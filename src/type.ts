import React,{ReactElement} from 'react'
export type forProduct = {
        data:forHomeState,
        Refetch: (term: string, e?: React.MouseEvent<HTMLDivElement, MouseEvent> | undefined) => Promise<void>
}

export type forHomeState = {
    fetchedResources: {
        id: string,
        title: string,
        desc: string,
        image: string,
        music: string
        cat: string,
    }[] | string,

    isNavigationBarOpen: boolean
}

export  type forFooter = {
    playIcon: boolean,
    musicIcon: boolean,
    profileIcon: boolean
 }

 export type forLoginState = {
    password: string,
    email: string,
    isValidated: boolean,
    passwordError: boolean,
    canLogIn:boolean | null,
    storeName: string
}

export type forFormProps = {
    isNameVisible?: boolean,
    buttonContent: string,
    accountType: string
}

export type forSVG = {
    flower:()=>  ReactElement,
    navIcon: ()=>  ReactElement,
    logo:()=> ReactElement,
    calm:()=> ReactElement,
    relax: ()=> ReactElement,
    focus: ()=> ReactElement,
    playIcon: ()=> ReactElement,
    darkLogo: ()=> ReactElement,
    darkMusic: ()=> ReactElement,
    profile: ()=> ReactElement,
    pause: ()=> ReactElement,
    wave:()=> ReactElement,
    next:()=> ReactElement,
    repeat:()=> ReactElement
 }


 export type forContext = {
    Item: {
        id: string,
        title: string,
        desc: string,
        image: string,
        music: string
    }[] |string,
    Refetch: (term: string,e?:React.MouseEvent<HTMLDivElement>)=> void
 }

 export type forPlayState = {
    id: string,
    title: string,
    desc: string,
    image: string,
    music: string
  }