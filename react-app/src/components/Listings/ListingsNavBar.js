import { NavLink } from "react-router-dom";
import React from "react";

const ListingsNavBar = () => {
  return (
    <ul className='categories__navlinks'>
      <NavLink to={'/category/Prehistoric'}>Prehistoric</NavLink>
      <NavLink to='/category/Antiquities'>Antiquities</NavLink>
      <NavLink to='/category/Modern'>Modern</NavLink>
      <NavLink to='/category/Future'>Future</NavLink>
    </ul>
  )
}


export default ListingsNavBar;
