import React from 'react'

const MenuSection = () => {
  return (
    <div>



<div className='grid grid-cols-1 lg:grid-cols-2 my-8 p-4'>

<div className='grid grid-cols-1 lg:grid-cols-2  justify-items-center items-center'>

<div className="avatar">
  <div className="w-24 mask mask-triangle">
    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
  </div>

  </div>
<div className="title">
<h1> ROAST DUCT</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
</div>

</div>

<div className='grid grid-cols-1 lg:grid-cols-2  justify-items-center items-center'>

<div className="avatar">
  <div className="w-24 mask mask-triangle">
    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
  </div>

  </div>
<div className="title">
<h1> ROAST DUCT</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
</div>

</div>

</div>

<div className='text-center my-6'>
<button className="btn btn-success mx-auto">VIEW ALL MENU</button>
{/* call us */}

<div className=' my-5 bg-black p-8 text-white text-xl lg:font-5xl'>
<h1>Call Us: +88 0192345678910</h1>


</div>

</div>

    </div>
  )
}

export default MenuSection
