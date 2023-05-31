import React from 'react'

export default class UserAccount {
    email:string
    password:string
  name?: string
    constructor(email:string,password:string,name?: string) {
        this.email = email;
        this.password = password;
        this.name= name
    }



  isLoggedIn(){
   if(this.name){
    localStorage.setItem('isLoggedIn', JSON.stringify({user: this.name }))
   }
   
  }

  setAccount(){
    
  }

}
