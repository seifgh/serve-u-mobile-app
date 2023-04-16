import {useCurrentRestaurant} from '@src/modules/order/hooks';
import React, {useMemo} from 'react';
import {MenuItems} from '../../components';

const RestaurantMenuList = () => {
  const restaurant = useCurrentRestaurant();

  const menuItemsByCategory = useMemo(() => {
    if (restaurant?.menuItems) {
      const allCategoriesNames = Array.from(
        new Set(restaurant.menuItems.map(({category}) => category.name)),
      );

      return allCategoriesNames.map(name => {
        return {
          title: name,
          items: restaurant.menuItems,
          //   .filter(
          //     ({category}) => category.name === name,
          //   ),
        };
      });
    }

    return [];
  }, [restaurant?.menuItems]);

  return (
    <>
      {menuItemsByCategory.map((item, index) => (
        <MenuItems key={index} {...item} />
      ))}
    </>
  );
};

export default RestaurantMenuList;
