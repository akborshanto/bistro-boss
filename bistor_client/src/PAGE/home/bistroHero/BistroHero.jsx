import React from 'react'
import heroImg from '../../../../src/assets/home/chef-service.jpg'
const BistroHero = () => {
  return (
    <div>
    <div class="relative h-screen w-full">
    <img src={heroImg} alt="Background Image" class="absolute inset-0 w-full h-full object-cover filter blur-sm fixed"/>
    <div class="absolute inset-0 bg-black bg-opacity-50"></div>
    <div class="absolute inset-0 flex flex-col items-center justify-center">
        <h1 class="text-4xl text-white font-bold">Hello, World!</h1>
        <p class="text-xl text-white mt-4">This is a sample text</p>
    </div>
</div>
    </div>
  )
}

export default BistroHero
