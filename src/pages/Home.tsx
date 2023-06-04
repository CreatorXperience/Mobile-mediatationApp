import React, {ReactNode} from 'react'
import Top from '../components/Top'
import svg from '../svgs/svg'
import Card from '../components/card'
import axios from 'axios'

type forHomeState = {
    fetchedResources: {
        id: string,
        title: string,
        desc: string,
        image: string
    }[] | string,

    isNavigationBarOpen: boolean
}
export default class Home extends React.Component  {
    state:forHomeState  = {
        fetchedResources: [],
        isNavigationBarOpen: false
    }


  

    handleFetch = async (term:string)=> {
        try{
            let response = await    axios.get(`http://localhost:8080/${term}`)
            this.setState({fetchedResources: response.data})

            
        }
        
        catch(e){
           this.setState({fetchedResources: 'an error has occured'})
        }
    
    }

    componentDidMount() {
        this.handleFetch('calm')
    }

    renderData = ():ReactNode => {
        let CardComponent
  
        if(typeof this.state.fetchedResources !==  "string"){
           CardComponent = this.state.fetchedResources.map((datas)=> {
                return <Card key={datas.id} Datas={datas} />
            })
        }

        return CardComponent
       
    }

    render(){
        return (
            <div className='container w-[100%]  bg-[#253334]   relative'> 
       
              <Top/>     
            
                <div className='absolute w-[100%]  top-[9rem]'> 
                <div className= ' text-white  text-3xl pl-6'> Welcome back, Dude!</div>
                <div className='mx-6 text-gray-400 text-xl py-2'>How are you feeling today ?</div>

                <div className='container w-[100%]  flex justify-around mt-4'> 
                <div className='w-[18%]'>
                <div className='w-[100%] rounded-3xl bg-gray-100 py-4 flex justify-center' onClick={()=> this.handleFetch('calm')}> 
                    {svg.calm()}
                    </div> 
                    <div className='text-white text-sm  w-[100%] text-center'>Calm</div> 
                    </div> 

                    <div className='w-[18%]'>
                <div className='w-[100%] rounded-3xl bg-gray-100 py-4 flex justify-center' onClick={()=> this.handleFetch('relax')}> 
                    {svg.relax()}
                    </div> 
                    <div className='text-white text-sm  w-[100%] text-center'>Relax</div> 
                    </div> 



                    <div className='w-[18%]'>
                <div className='w-[100%] rounded-3xl bg-gray-100 py-4 flex justify-center' onClick={()=> this.handleFetch('focus')}> 
                    {svg.focus()}
                    </div> 
                    <div className='text-white text-sm  w-[100%] text-center'>Focus</div> 
                    </div> 
                    
                    <div className='w-[18%]'>
                <div className='w-[100%] rounded-3xl bg-gray-100 py-4 flex justify-center' onClick={()=> this.handleFetch('anxious')}> 
                    {svg.relax()}
                    </div> 
                    <div className='text-white text-sm w-[100%] text-center'>Anxious</div> 
                    </div> 
                    
                </div>

        <div className='mb-20'> 
            {this.renderData()}
            </div> 
             
                </div>

            

                </div>
                
                
                
        )
    }
}