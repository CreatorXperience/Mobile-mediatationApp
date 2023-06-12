import React from 'react'
import axios from 'axios'

export async function  HandleFetch (term: string) {
let response = await axios.get(`http://localhost:8080/${term}`)
return response.data
}