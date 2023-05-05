import {restaurantStoreSelectors} from '@src/store';
import React from 'react';
import {MenuItems} from '../../components';

const RestaurantMenuList = () => {
  const menuItemsByCategory = restaurantStoreSelectors.useMenuItemsByCategory();

  return (
    <>
      {menuItemsByCategory.map((item, index) => (
        <MenuItems key={index} {...item} />
      ))}
    </>
  );
};

export default RestaurantMenuList;
