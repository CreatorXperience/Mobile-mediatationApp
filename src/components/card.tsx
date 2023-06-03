import React from 'react'
import svg from '../svgs/svg'
type forProps = {
    Datas: {
        id: string,
        title: string,
        desc: string,
        image: string
    }
}
export default class Card extends React.Component<forProps> {
    render() {
        return (
            <div className='w-[90%] rounded-2xl flex bg-[#F7F3F0] mx-4  mt-4 py-4 px-4'> 
            <div className='w-[90%]'> 
                <div className='text-2xl text-gray-700'> 
                {this.props.Datas.title}
                </div> 

                <div className='w-[80%] font-semibold text-sm'> 
                    {this.props.Datas.desc}
                    </div>

                    <button className='w-[50%] flex justify-center  bg-[#253334] text-white py-2 mt-4 my-2 rounded-md'> Play Now <div className='mt-2 ml-2'> {svg.playIcon()} </div> </button>
                    </div>
                    <div className='w-[30%]'> 
                    <img src={this.props.Datas.image} alt='meditate' className='w-[100%] rounded-full mt-8'/>
                    </div> 
            </div> 
        )
    }}
