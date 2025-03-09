  import React from 'react'
  import { useNavigate } from 'react-router-dom'


  interface buttonProps extends React.HTMLAttributes<HTMLButtonElement>{
  location?: string
  tip?:string
  showi?:boolean
  onCustomClick?: () => void;
  }


  const CustomButton: React.FC<buttonProps> = ({onCustomClick,  tip, location, className, children}) => {
    const navigate = useNavigate();

    return (
      
      <button onClick={()=> {
      console.log("clicked");
      if(tip === "navigate"){
      if(location ){
      console.log(location)
      navigate(location);
    }}else if(tip==="prev"){
      if(onCustomClick){
        onCustomClick();
      }
    }
    }} className={className}>{children}</button>
    )
  }

  export default CustomButton