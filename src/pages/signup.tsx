import React from 'react'
import Header from '../components/header'
import Form from '../components/form'
import svg from '../svgs/svg'
export default class Signup extends React.Component {
    render(){
        return (
            <div className='w-[100%] h-[100vh] overflow-hidden bg-[#253334]'>
            <Header content= "Sign Up" desc='Sign up now for free and start meditating, and explore Medic.' /> 
             <Form  buttonContent='SIGNUP' isNameVisible = {true} accountType='Sign In'/>
             <div className='relative bottom-0 z-0'> {svg.flower()}</div>
              </div>
        )
    }
}