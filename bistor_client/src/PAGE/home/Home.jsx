import React from 'react'
import Slider from './slider/Slider'
import Banner from './banner/Banner'
import UseTitle from '../../HOOK/TitelHook/UseTitle'
import BistroHero from './bistroHero/BistroHero'
import MenuSection from './menuSection/MenuSection'
import Recomend from './recomendSection/Recomend'
import Feature from './feature/Feature'
import Testimonial from './testimonial/Testimonial'

const Home = () => {
  return (
    <div>
    {/* banner section */}
    <Banner></Banner>

{/* slider section */}
<UseTitle heading="ORDER ONLINE" statement=" FROM 11am: 00am to 10:0pm"></UseTitle>
<Slider></Slider>

<BistroHero></BistroHero>
{/* menu section */}
<UseTitle heading="CheckOut " statement="FORM  OUR MENU"></UseTitle>
<MenuSection></MenuSection>
{/* Recomend section */}

<UseTitle heading="CHEF RECOMMENDS" statement="SHOULD TRY"> </UseTitle>
<Recomend></Recomend> 

{/* feature secdtion */}

<Feature></Feature>

{/* testimonial */}

<Testimonial></Testimonial>

    </div>
  )
}

export default Home
