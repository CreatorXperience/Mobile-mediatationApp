import React from 'react'
import svg from '../svgs/svg'
export default class Card extends React.Component {
    render() {
        return (
            <div className='w-[90%] rounded-2xl flex bg-[#F7F3F0] mx-4 mt-4 py-4 px-4'> 
            <div className='w-[70%]'> 
                <div className='text-3xl text-gray-700'> 
                Meditation 101
                </div> 

                <div className='w-[80%] font-semibold text-sm'> 
                Techniques, Benefits, and a Beginner’s How-To
                    </div>

                    <button className='w-[50%] flex justify-center  bg-[#253334] text-white py-2 mt-4 my-2 rounded-md'> Play Now <div className='mt-2 ml-2'> {svg.playIcon()} </div> </button>
                    </div>
                    <div className='w-[30%]'> 
                    <img src='https://i.pinimg.com/564x/64/57/fd/6457fd6a88bac87bdba08b3ec2e74447.jpg' alt='meditate' className='w-[100%] rounded-full mt-8'/>
                    </div> 
            </div> 
        )
    }}
