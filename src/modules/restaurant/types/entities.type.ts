import {BaseEntity, FileEntity} from '@src/types';

export type RestaurantEntity = BaseEntity & {
  name: string;
  email: string;
  phoneNumber: string;
  menuItems: MenuItemEntity[];
};

export type MenuItemEntity = BaseEntity & {
  name: string;
  image: FileEntity;
  price: number;
  category: CategoryEntity;
};

export type CategoryEntity = BaseEntity & {
  name: string;
};
