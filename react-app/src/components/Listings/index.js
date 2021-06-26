import ListingsNavBar from "./ListingsNavBar";
import ListingGrid from "./ListingGrid";
// import ListingFilters from "./ListingFilters";
import React, { useState } from "react";
import "./index.css"


const Listings = () => {
  const [currentEra, setCurrentEra] = useState('grid_pre')



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
