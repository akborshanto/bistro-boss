import React from 'react'
import img1 from '../../.././assets/home/banner.jpg'
import  img2 from '../../.../../../assets/home/featured.jpg'
import './bg_img.css'
const Feature = () => {
  return (
    <div>


<div className='flex flex-col  gap-4 lg:flex-row lg:justify-between bg-img  p-8 '>
<div className='w-[400px]'>
<img src={img2} alt="" />
</div>
<div  className='w-[400px]'>

<p>March 20, 2023</p>
<h3>WHERE CAN I GET SOME?</h3>
<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, quas deserunt. Aliquam ratione ipsam delectus sint voluptate velit nihil deserunt.</p>
 <button>READ MORE</button>
</div>

</div>


    </div>
  )
}

export default Feature
