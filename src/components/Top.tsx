import React, {createRef} from "react";
import { Link } from "react-router-dom";
import svg from "../svgs/svg";
import '../style.css'
export default class Top extends React.Component {
    ref
    constructor(props:any){
        super(props)
        this.ref = createRef<HTMLDivElement>()
    }
    state = { 
        isClicked: false
    }

    openNav = (e:React.MouseEvent<HTMLDivElement>)=> {
        e.stopPropagation()
       
        this.setState({isClicked: true})
    }

    EventFunction = (e:MouseEvent)=> {
        if(this.ref.current && !this.ref.current?.contains(e.target as Node))
        this.setState({isClicked: false})
    }

    componentDidMount(): void {
        document.body.addEventListener('click', this.EventFunction)
    }

   
    componentWillUnmount(): void {
        document.body.removeEventListener('click',this.EventFunction)
        // TODO this.setState({isClicked: true}) this idea for carting
    }

    render() {
      
            
        
        return(
            <div> 

            <div className='MainBody w-[100%]    absolute  z-10 text-white'> 
            <div className='container  w-[100%]  flex justify-around mx-4 mt-10 pl-2'> 
           <div onClick={(e)=> this.openNav(e)} className="hi">  {svg.navIcon()} </div>
           <div className='translate-y-[-30%]'>{svg.logo()}</div>
           <div className='container rounded-[50%] w-[40px] translate-x-[-60%] h-[40px] bg-white'> 
           <img src='https://i.pinimg.com/564x/8a/f0/a2/8af0a298a18b75c6e9920d457d6a67fe.jpg' className="rounded-[50%]" alt="medic" /> 
           </div>
            </div>

            <div ref={this.ref} className={`w-[50%] top-0 z-10 py-4  h-[120vh] fixed ${this.state.isClicked? '': 'hidden'}  bg-[#fcfcfc] text-black`}> 
     <div> {svg.darkLogo()}  </div>   <Link to="/home"> <div className='text-xl py-4 px-2 text-center'>  Home </div> </Link>
    <Link to="/music"><div className='text-xl py-4 px-2 text-center'> Music </div>  </Link> 
         <Link to="/profile"> </Link> <div className='text-xl py-4 px-2 text-center'> Profile </div>
            </div> 

            <div className={`w-[100%] h-[120vh] fixed z-1 bg-gray-900  top-0 opacity-60 ${this.state.isClicked? '': 'hidden'} `}> </div>
             </div>

             </div>
        )
    }}
