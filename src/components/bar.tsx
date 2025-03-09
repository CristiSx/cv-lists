import React from 'react'
interface barProps {
    length?: string
    slength?: string
    color?: string
}

const bar:React.FC<barProps> = ({length='100px', slength='100px'}) => {
  return (
    <div style={{position:'relative', height:'8px'}}>
     <hr className='border-t-8 border-opacity-45 rounded-lg border-white' style={{width: length, position:'absolute', top: 0, left:0}}></hr>
     <hr className='border-t-8 rounded-lg border-white' style={{width: slength, position:'absolute', top: 0, left:0}}></hr>
    </div>
  )
}

export default bar