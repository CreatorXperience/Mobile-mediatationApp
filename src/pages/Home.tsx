import React from 'react'
import Top from '../components/Top'
import svg from '../svgs/svg'
import Card from '../components/card'
export default class Home extends React.Component  {
    render(){
        return (
          
                <div className='container w-[100%]  bg-[#253334] h-[120vh] relative'> 
            <div className='myNav w-[40%] z-10 h-[100vh] absolute hidden bg-[#253334] text-white'> 
            <div> Hi </div>
            <div> Hi </div>
            <div> Hi </div>
            <div> Hi </div>
            </div>

              <Top />
            
                <div className='absolute w-[100%] top-[9rem]'> 
                <div className= ' text-white  text-3xl pl-6'> Welcome back, Dude!</div>
                <div className='mx-6 text-gray-400 text-xl py-2'>How are you feeling today ?</div>

                <div className='container w-[100%] flex justify-around mt-4'> 
                <div className='w-[18%]'>
                <div className='w-[100%] rounded-3xl bg-gray-100 py-4 flex justify-center'> 
                    {svg.calm()}
                    </div> 
                    <div className='text-white text-sm  w-[100%] text-center'>Calm</div> 
                    </div> 

                    <div className='w-[18%]'>
                <div className='w-[100%] rounded-3xl bg-gray-100 py-4 flex justify-center'> 
                    {svg.relax()}
                    </div> 
                    <div className='text-white text-sm  w-[100%] text-center'>Relax</div> 
                    </div> 



                    <div className='w-[18%]'>
                <div className='w-[100%] rounded-3xl bg-gray-100 py-4 flex justify-center'> 
                    {svg.focus()}
                    </div> 
                    <div className='text-white text-sm  w-[100%] text-center'>Focus</div> 
                    </div> 
                    
                    <div className='w-[18%]'>
                <div className='w-[100%] rounded-3xl bg-gray-100 py-4 flex justify-center'> 
                    {svg.relax()}
                    </div> 
                    <div className='text-white text-sm w-[100%] text-center'>Anxious</div> 
                    </div> 
                    
                </div>

                <Card />
                <Card />
                </div>

            

                </div>
                
                
                
        )
    }
}