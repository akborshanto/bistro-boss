import React from "react";
import { Link } from "react-router-dom";

const OurMenuShared = ({ img, title, statement, price }) => {
  return (
    <div>
      <div className=" my-4 p-6">


        <div className="flex  flex-col lg:flex-row gap-4 justify-between items-center ">
          <div className="avatar">
            <div className="w-20  rounded-badge">
              <img src={img} />
            </div>
          </div>
          <div className="title">
            <h1 className="text-2xl font-bold font-serif"> {title}</h1>
            <p className="font-gray ">{statement}</p>
          </div>
        
         <div>  <p className="font-bold text-yellow-400 text-xl">${price}</p>
         </div>
        </div>

        <div className="text-center my-8">
       
        </div>
      </div>
    </div>
  );
};

export default OurMenuShared;
