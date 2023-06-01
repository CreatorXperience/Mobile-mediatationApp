import React from "react";
import svg from "../svgs/svg";
export default class Top extends React.Component {
    render() {
        return(
            <div className='MainBody w-[100%]  absolute  z-0 text-white'> 
            <div className='container  w-[100%]  flex justify-around mx-4 mt-10 pl-2'> 
           <div>  {svg.navIcon()} </div>
           <div className='translate-y-[-30%]'>{svg.logo()}</div>
           <div className='container rounded-[50%] w-[40px] translate-x-[-60%] h-[40px] bg-white'> </div>
            </div>
             </div>
        )
    }}
