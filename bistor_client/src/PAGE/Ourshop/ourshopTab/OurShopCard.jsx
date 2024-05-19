import React from 'react'
import UseMenu from '../../../HOOK/useMenu/UseMenu';

const OurShopCard = ({item}) => {
  //recipei/apppliance,provision,device,wrincle,loophole= khabar toireir pronani,koshol
  const {image,name,recipe}=item;
  const {loading}=UseMenu()
  return (
    <div>

{
  loading ? <h1>LOADING..................</h1>: <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={image} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    <p>{recipe}</p>
    <div className="card-actions">
      <button className="btn btn-primary">Add To Card</button>
    </div>
  </div>
</div>
}

   
    </div>
  )
}

export default OurShopCard
