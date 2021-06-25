import { NavLink } from "react-router-dom";
import React from "react";
import "./ListingsNavBar.css"

const ListingsNavBar = () => {
  return (
    <ul className='categories__navlinks'>
      <NavLink className='categories__titles' id='prehistoric' to={'/category/Prehistoric'}>Prehistoric<span>Before 3000 B.C.</span></NavLink>
      <NavLink className='categories__titles antiquities-nav' to='/category/Antiquities'>Antiquities<span>3000 B.C. - 1500 A.D.</span></NavLink>
      <NavLink className='categories__titles modern-nav' to='/category/Modern'>Modern<span>1500 A.D. - 2100 A.D.</span></NavLink>
      <NavLink className='categories__titles' id='future' to='/category/Future'>Future<span>After 2100 A.D.</span></NavLink>
    </ul>
  )
}


export default ListingsNavBar;
