import React from "react";
import CustomButton from "../components/customButton";
import { useState } from "react";

const mainpage = () => {

    const [Showf, setShowf] = useState(false); 
    const [previewPath, setPreviewPath] = useState("");
    const cvItems = [
        { name: "Cristi CV", path: "/mainpage/prev1" },
        { name: "Test CV", path: "/mainpage/prev2" },
      ];

  return (
    <>

    <div className='bg-slate-500 flex flex-row'>
        <div className='basis-1/3 m-4 w-52 min-h-[640px] bg-slate-100 border-2 border-slate-100 rounded-lg flex-column items-top justify-center '>
            <p className='flex justify-center m-6'>Lista</p>
            <ul className='flex flex-col items-center space-y-4'>
                 {cvItems.map((cv, index) => (
          <li key={index} className="flex justify-between items-center">
            <CustomButton
              tip="navigate"
              location={cv.path}
              className="border-2 bg-blue-200 rounded-lg px-4 py-2"
            >
              {cv.name}
            </CustomButton>
            <CustomButton
              tip="prev"
              className="border-2 bg-blue-200 rounded-lg px-4 py-2"
              onCustomClick={() => { 
                setPreviewPath(cv.path); 
                setShowf(true); 
            }}
            >
              Preview
            </CustomButton>
          </li>
        ))}
         
            </ul>
        </div>
        <div className='basis-2/3 m-4 w-52 min-h-[640px] bg-slate-100 border-2 border-slate-100 rounded-lg flex items-center justify-center'>
       {Showf&&<iframe src={previewPath} width="95%" height="600px"></iframe>}
        </div>
      </div>
    </>
  );
};

export default mainpage;
