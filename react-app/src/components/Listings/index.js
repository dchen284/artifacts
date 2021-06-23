import ListingsNavBar from "./ListingsNavBar";
import ListingGrid from "./ListingGrid";
import ListingFilters from "./ListingFilters";
import React from "react";
import "./index.css"


const Listings = () => {


  return (
    <>
      <ListingsNavBar />
      <div className='listingsPage__container'>
        <ListingFilters />
        <ListingGrid />
      </div>
    </>
  )
}


export default Listings
