import React from "react";
import "./ListingFilters.css"


const ListingFilters = () => {
  return (
    <div className='listingFilters__container'>
      <div className='listingFilters__inputs'>
        Add Filter
        <label><input type='checkbox'></input>Apparel</label>
        <label><input type='checkbox'></input>Accessories</label>
        <label><input type='checkbox'></input>Art</label>
        <label><input type='checkbox'></input>Weapons</label>
      </div>
      <br/>
      <div className='listingFilters__inputs'>
        <label><input type='radio' name='Under $1000' value='1000'></input>Less than $1,000</label>
        <label><input type='radio'></input>$1,000 - $10,000</label>
        <label><input type='radio'></input>$10,000 - $1,000,000</label>
        <label><input type='radio'></input>Over $1,000,000</label>

      </div>
    </div>
  )
};


export default ListingFilters;
