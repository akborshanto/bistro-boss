import React, { useState } from "react";
import Cover from "../../sharedComponent/Cover";
import banner from "../../assets/shop/banner2.jpg";

import UseMenu from "../../HOOK/useMenu/UseMenu";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import OurShopCard from "./ourshopTab/OurShopCard";
import OrderShared from "../../sharedComponent/OrderShared";
import { useParams } from "react-router-dom";

const OurShop = () => {



  const [menu, loading] = UseMenu();
  const categoryies=["SALAD","PIZZA","SOUP","DESSRET","DRINKS"]
  const category=useParams()
const initialIndex=categoryies.indexOf(category)
const [tabIndex, setTabIndex] = useState(initialIndex);

  /* filter our shop */
  const pizza = menu.filter((pizza) => pizza.category === "pizza");
  const offereds = menu.filter((offer) => offer.category === "offered");
  const desserts = menu.filter((dessert) => dessert.category === "dessert");
  const soup = menu.filter((soup) => soup.category === "soup");
  const salad = menu.filter((salad) => salad.category === "salad");
  const drinks = menu.filter((drinks) => drinks.category === "drinks");

  return (
    <div>

{/*   <Helmet>
  <h1> OUR SHOP|| OREDER FOOD</h1>
  </Helmet> */}
      {/* our shop card */}
      <Cover img={banner} title={"OUR SHOP"}></Cover>
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
  
        <TabList>
          <Tab>SALAD</Tab>
          <Tab>PIZZA</Tab>
          <Tab>SOUPS</Tab>
          <Tab>DESERTS</Tab>
          <Tab>DRINKS</Tab>


        </TabList>
        <TabPanel>
          <OrderShared ourShopItem={salad}></OrderShared>
        </TabPanel>

        <TabPanel>
          <OrderShared ourShopItem={pizza}></OrderShared>
        </TabPanel>
        <TabPanel>
          <OrderShared ourShopItem={soup}></OrderShared>
        </TabPanel>
        <TabPanel>
          <OrderShared ourShopItem={desserts}></OrderShared>
        </TabPanel>
        <TabPanel>
          <OrderShared ourShopItem={drinks}></OrderShared>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default OurShop;
