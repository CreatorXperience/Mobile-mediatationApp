import React from 'react'
import axios from 'axios'


export async function  HandleFetch (term: string) {
    try {
        let response = await axios.get(`http://localhost:8080/${term}`)
        let data = response.data
    return data
    }

    catch(e){
       return  'an error has occured'
    }

}


export async function  HandleSingleFetch (term: string, id:string) {
    try {
        let response = await axios.get(`http://localhost:8080/${term}/${id}`)
        let data = response.data
    return data
    }

    catch(e){
       return  'an error has occured'
    }

}