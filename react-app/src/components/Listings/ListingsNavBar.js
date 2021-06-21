import { NavLink } from "react-router-dom";
import React from "react";

const ListingsNavBar = () => {
  return (
    <ul className='categories__navlinks'>
      <NavLink to='/Prehistoric'>Prehistoric</NavLink>
      <NavLink to='/Antiquities'>Antiquities</NavLink>
      <NavLink to='/Modern'>Modern</NavLink>
      <NavLink to='/Future'>Future</NavLink>
    </ul>
  )
}


export default ListingsNavBar;
