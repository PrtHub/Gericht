import React from 'react';
import './menu.css';
import { Menuitem, SubHeading } from '../../components';
import {data, images} from '../../constants';

const Menu = () => {
  return (
    <div className='app__menu flex__center section__padding' id='menu'>
      <div className="app__menu-title">
        <SubHeading title="Menu that fits you palatte" />
        <h1 className='headtext__cormorant'>Today’s Special</h1>
      </div>
      
      <div className="app__menu-specialMenu">
      <div className="app__menu-specialMenu_wine  flex__center">
        <p className="app__menu-specialMenu_heading">Wine & Beer</p>
        <div className="app__menu-specialMenu_items">
          {data.wines.map((wine, index) => (
            <Menuitem  key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags}/>
          ))}
        </div>
      </div>

      <div className="app__menu-specialMenu_img">
        <img src={images.menu} alt="menu__img" />
      </div>

      <div className="app__menu-specialMenu_cocktails  flex__center">
        <p className="app__menu-specialMenu_heading">Cocktails</p>
        <div className="app__menu-specialMenu_items">
          {data.cocktails.map((cocktail, index) => (
            <Menuitem  key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags}/>
          ))}
        </div>
      </div>
    </div>
     
     <div  style={{marginTop: "15px"}}>
         <button type='button' className='custom__button'>View More</button>
     </div>

    </div>
  )
}

export default Menu
