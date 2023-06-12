import React,{ReactElement} from 'react'

export type forHomeState = {
    fetchedResources: {
        id: string,
        title: string,
        desc: string,
        image: string
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
    profile: ()=> ReactElement
 }

