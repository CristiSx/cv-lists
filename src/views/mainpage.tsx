import React from 'react'
import CustomButton from '../components/customButton'
import { useState } from 'react'

const mainpage = () => {
    const [Showf, setShowf] = useState(false); 
  return (

    <>
    <div className='bg-slate-500 flex flex-row'>
        <div className='basis-1/3 m-4 w-52 min-h-[640px] bg-slate-100 border-2 border-slate-100 rounded-lg flex-column items-top justify-center '>
            <p className='flex justify-center m-6'>Lista</p>
            <ul className='flex justify-center flex-col items-center'>
                <li className='inline-flex '>
                    
                    <CustomButton tip='navigate' location='/mainpage/prev1' className='mr-8 border-2 bg-blue-200 rounded-lg text-lg pt-1 pb-1 pl-2 pr-2' >
                       Cristi CV
                    </CustomButton>
                    <CustomButton  
                    tip='prev' 
                    className='mr-8 border-2 bg-blue-200 rounded-lg pt-1 pb-1 pl-2 pr-2'
                    onCustomClick={()=>setShowf(true)}>
                        preview
                    </CustomButton> 
                    
                    
                </li>  
               <li>
                <CustomButton tip='navigate'location='/mainpage/prevrobert' className='mr-8 border-2 bg-red-600 rounded-lg text-lg pt-1 pb-1 pl-2 pr-2'>
                Robert CV
                </CustomButton>
                <CustomButton
                tip='prev'
                className='mr-8 border-2 bg-red-400 rounded-lg pt-1 pb-1 pl-2 pr-2'
                onCustomClick={()=>setShowf(true)}>
                    preview

                </CustomButton>

               </li>
            </ul>
            
        </div>
        <div className='basis-2/3 m-4 w-52 min-h-[640px] bg-slate-100 border-2 border-slate-100 rounded-lg flex items-center justify-center'>
       {Showf&&<iframe src="/mainpage/prev1" width="95%" height="600px"></iframe>}
        </div>
    </div>
    </>
  )
}

export default mainpage