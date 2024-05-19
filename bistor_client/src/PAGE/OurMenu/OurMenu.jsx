import React from "react";
import { Helmet } from "react-helmet-async";
import moduleName from "module";
import Cover from "../../sharedComponent/Cover";
import imgCover from "../../assets/menu/banner3.jpg";
import UseTitle from "./../../HOOK/TitelHook/UseTitle";
import TodayOffer from "./todayOffer/TodayOffer";
import UseMenu from "../../HOOK/useMenu/UseMenu";

/* import img banner */
import banner1 from "../../assets/menu/banner3.jpg";
import pizzabg from "../../assets/menu/pizza-bg.jpg";
import dessertbg from "../../assets/menu/dessert-bg.jpeg";
import saladbg from "../../assets/menu/salad-bg.jpg";
import soupbg from "../../assets/menu/soup-bg.jpg";
//import OurMenuShared from '../../sharedComponent/OurMenuShared';
const OurMenu = () => {
  const [menu, loading] = UseMenu();
  const pizza = menu.filter((pizza) => pizza.category === "pizza");
  const offereds = menu.filter((offer) => offer.category === "offered");
  const desserts = menu.filter((dessert) => dessert.category === "dessert");
  const soup = menu.filter((soup) => soup.category === "soup");
  const salad = menu.filter((salad) => salad.category === "salad");

  return (
    <div>
      <Helmet>
        <title>OUR MENU</title>
        <link
          rel="canonicadl"
          href="https://img.freepik.com/free-vector/polygonal-restaurant-menu_23-2147491107.jpg?t=st=1715925851~exp=1715929451~hmac=b2db7e95fe677f82c0c747f64c29246b27403baf44e4d944343f142146b1eb5e&w=740"
        />
      </Helmet>
      OUR MENU
      {/* ourmenu cover */}
      <Cover img={banner1} title="OUR MENU" statement={"asdfsd"}></Cover>
      {/* 
{/* Today coffe */}
      <UseTitle heading="TODAY'S OFFER" statement="---Don't miss---"></UseTitle>
      {/* TODAY MENU */}

      <TodayOffer pizza={offereds} ></TodayOffer>
      {/* deseret */}
      <TodayOffer pizza={desserts} img={dessertbg} title={"DESERT"}></TodayOffer>
      {/* pizza */}
      <TodayOffer pizza={pizza} img={pizzabg} title={"PIZZA"}></TodayOffer>
      {/* salsd */}
      <TodayOffer pizza={salad} img={saladbg} title={"SALAD"}></TodayOffer>
      {/* soupt */}
      <TodayOffer pizza={soup} img={soupbg} title={"soup"}  ></TodayOffer>
    </div>
  );
};

export default OurMenu;
