import ListingsNavBar from "./ListingsNavBar";
import ListingGrid from "./ListingGrid";
import React from "react";


const Listings = () => {


  return (
    <>
      <ListingsNavBar />
      <div className='ListingsPage__container'>
        <ListingGrid />
      </div>
    </>
  )
}


export default Listings
