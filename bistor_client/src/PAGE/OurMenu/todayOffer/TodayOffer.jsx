import React from "react";
import UseMenu from './../../../HOOK/useMenu/UseMenu';
import OurMenuShared from "../../../sharedComponent/OurMenuShared";
import Cover from "../../../sharedComponent/Cover";
import { Link } from "react-router-dom";
const TodayOffer = ({pizza,img,title,statement}) => {

    


  return <div>

 
 
   { title &&   <Cover img={img} title={title} statement={statement}></Cover>
  }   
  <div className="text-center ">
<Link to={`/ourshop/${title}`}> <button className="btn btn-outline btn-success">Order Your Favourite Food</button></Link>

</div>
  <div className="grid grid-cols-1 lg:grid-cols-2">
  
  {
     
    pizza.map(item=><OurMenuShared img={item?.image} title={item?.category} statement={item?.recipe} price={item?.price}></OurMenuShared>)
    
        
    }

  </div>



 
 
  </div>;
};

export default TodayOffer;
