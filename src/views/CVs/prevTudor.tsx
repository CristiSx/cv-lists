import React from "react";
import noimage from "../../assets/noimage.jpg";
import { AiFillPhone, AiFillMail, AiOutlineEnvironment } from "react-icons/ai";
import Bar from "../../components/bar";

const PrevTudor = () => {
  return (
    <>
      <div className="flex bg-[#F1F3F4]">
        <div className="inline-flex bg-[#FEFEFE] w-[210mm] h-[297mm] shadow-lg my-8 mx-auto">
          {/* Sidebar */}
          <div className="flex flex-col bg-gray-600 h-[297mm] w-[70mm]">
            {/* Profile Image */}
            <div className="flex justify-center items-center mt-4">
              <img
                src={noimage}
                alt="No Image"
                className="rounded-full w-[150px] h-[150px]"
              />
            </div>

            {/* Personal Info Header */}
            <div className="flex justify-center items-center text-white mt-8">
              <span>Informații personale</span>
            </div>
            <div className="flex justify-center items-center">
              <hr className="border-t-2 border-black w-[50mm]" />
            </div>

            {/* Contact Info */}
            <div className="flex justify-center items-center mt-2">
              <ul>
                <li className="flex items-center text-white text-m">
                  <AiFillPhone className="mr-2" />
                  <span className="text-black text-sm">0754678217</span>
                </li>
                <li className="mt-1 flex items-center text-white text-m">
                  <AiFillMail className="mr-2" />
                  <span className="text-black text-sm">tudor@gmail.com</span>
                </li>
                <li className="mt-1 flex items-center text-white text-m">
                  <AiOutlineEnvironment className="mr-2" />
                  <span className="text-black text-sm">București, România</span>
                </li>
              </ul>
            </div>

            {/* sectiune limbi */}
            <div className="flex justify-center items-center mt-8">
              <span className="text-white">Limbi</span>
            </div>
            <div className="flex justify-center items-center">
              <hr className="border-t-2 border-black w-[50mm]" />
            </div>
            <div className="flex justify-start ml-4 mt-2">
              <ul>
                <li className="flex items-center justify-start text-white text-m">
                  <span className="text-white text-sm w-[50px]">Engleză</span>
                  <div className="ml-6 ">
                    <Bar length="100px" slength="75px" />
                  </div>
                </li>
                <li className="mt-1 flex items-center justify-start text-white text-m">
                  <span className="text-white text-sm w-[50px]">Română</span>
                  <div className="ml-6 ">
                    <Bar length="100px" slength="100px" />
                  </div>
                </li>
                <li className="mt-1 flex items-center justify-start text-white text-m">
                  <span className="text-white text-sm w-[50px]">Franceza</span>
                  <div className="ml-6 ">
                    <Bar length="100px" slength="25px" />
                  </div>
                </li>
                <li className="mt-1 flex items-center justify-start text-white text-m">
                  <span className="text-white text-sm w-[50px]">Germana</span>
                  <div className="ml-6 ">
                    <Bar length="100px" slength="10px" />
                  </div>
                </li>
              </ul>
            </div>

            {/*sectiune competente*/}
            <div className="flex justify-center items-center mt-8">
              <span className="text-white">Competențe</span>
            </div>
            <div className="flex justify-center items-center">
              <hr className="border-t-2 border-black w-[50mm]" />
            </div>
            <div className="flex justify-start ml-8 mt-2">
              <ul className="list-disc text-white">
                <li>
                  <span className="text-white text-sm">C++</span>
                </li>
                <li>
                  <span className="text-white text-sm">C#</span>
                </li>
                <li>
                  <span className="text-white text-sm">TypeScript</span>
                </li>
                <li>
                  <span className="text-white text-sm">React</span>
                </li>
              </ul>
            </div>
          </div>

          {/*main page (right)*/}
          <div className="flex flex-col bg-slate-100 h-[297mm] w-[217mm]">
            <div className="flex flex-col mt-8">
              <h1 className="flex ml-16 text-5xl font-bold text-[#00172B]">
                Tudor
              </h1>
              <span className="flex ml-16 text-2xl justify-start">
                tare rau
              </span>
            </div>

            {/*sectiune educatie */}
            <div className="flex flex-col ml-16 mt-[85px]">
              <span>Educatie</span>
            </div>
            <div className="flex justify-start items-center ml-16">
              <hr className="border-t-2 border-black w-[30mm]" />
                <h1 className="">  
                    Etti
                </h1>
            </div>

            {/*sectiune exeperienta*/}
            <div className="flex flex-col ml-16 mt-[85px]">
              <span>Experienta</span>
            </div>
            <div className="flex justify-start items-center ml-16">
              <hr className="border-t-2 border-black w-[30mm]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrevTudor;
