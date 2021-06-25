import { NavLink } from "react-router-dom";
import React from "react";
import "./ListingsNavBar.css"

const ListingsNavBar = ({setCurrentEra}) => {


  return (
    <div className='categories__navlinks'>
      <NavLink onClick={() => setCurrentEra('grid_pre')} className='categories__titles' id='prehistoric' to={'/category/Prehistoric'}>Prehistoric<span>Before 3000 B.C.</span></NavLink>
      <NavLink onClick={() => setCurrentEra('grid_ant')} className='categories__titles antiquities-nav' to='/category/Antiquities'>Antiquities<span>3000 B.C. - 1500 A.D.</span></NavLink>
      <NavLink onClick={() => setCurrentEra('grid_now')} className='categories__titles modern-nav' to='/category/Modern'>Modern<span>1500 A.D. - 2100 A.D.</span></NavLink>
      <NavLink onClick={() => setCurrentEra('grid_fut')} className='categories__titles' id='future' to='/category/Future'>Future<span>After 2100 A.D.</span></NavLink>
    </div>
  )
}


export default ListingsNavBar;
