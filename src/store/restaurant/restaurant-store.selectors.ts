import {StoreSelectorKey} from '@src/constants/enums';
import {CategoryEntity, MenuItemEntity, RestaurantEntity} from '@src/types';
import {selector, useRecoilState, useRecoilValue} from 'recoil';
import {restaurantStoreAtom} from './restaurant-store.atom';

const currentRestaurant = selector<RestaurantEntity>({
  key: StoreSelectorKey.CURRENT_RESTAURANT,
  get: ({get}) => {
    const {restaurant} = get(restaurantStoreAtom);

    return restaurant as RestaurantEntity;
  },
});
const menuItemsCategories = selector<CategoryEntity[]>({
  key: StoreSelectorKey.MENU_ITEMS_CATEGORIES,
  get: ({get}) => {
    const restaurant = get(currentRestaurant);

    const allCategoriesNames = Array.from(
      new Set(restaurant.menuItems.map(({category}) => category.name)),
    );

    return allCategoriesNames.map(name => {
      return restaurant.menuItems.find(({category}) => category.name === name)
        ?.category as CategoryEntity;
    });
  },
});

const menuItemsByCategory = selector<
  {
    items: MenuItemEntity[];
    title: string;
  }[]
>({
  key: StoreSelectorKey.MENU_ITEMS,
  get: ({get}) => {
    const restaurant = get(currentRestaurant);
    const categories = get(menuItemsCategories);

    return categories.map(({name, id}) => {
      return {
        title: name,
        items: restaurant.menuItems.filter(({category}) => category.id === id),
      };
    });
  },
});

export const restaurantStoreSelectors = {
  useGetState: () => useRecoilState(restaurantStoreAtom)[0],
  useRestaurant: () => useRecoilValue(currentRestaurant),
  useMenuItemsByCategory: () => useRecoilValue(menuItemsByCategory),
  useCategories: () => useRecoilValue(menuItemsCategories),
};
