import ListingsNavBar from "./ListingsNavBar";
import ListingGrid from "./ListingGrid";
// import ListingFilters from "./ListingFilters";
import React, { useState } from "react";
import { useParams } from "react-router";
import "./index.css"


const Listings = () => {
  const { category } = useParams();
  let currentEraString = 'grid_pre';
  if (category === "Antiquities") {
    currentEraString = 'grid_ant';
  }
  else if (category === "Modern") {
    currentEraString = 'grid_now';
  }
  else if (category === "Future") {
    currentEraString = 'grid_fut';
  }

  const [currentEra, setCurrentEra] = useState(currentEraString)

  return (
    <>
      <div id="left-side" className={`listingsPage__header ${currentEra}`}>
      <ListingsNavBar setCurrentEra={setCurrentEra}/>
      </div>
      <div className={`listingsPage__container`}>
        {/* <ListingFilters /> */}
        <ListingGrid />
        {/* <div id="right-side" className={`listingsPage__header ${currentEra}`}></div> */}
      </div>
    </>
  )
}


export default Listings
