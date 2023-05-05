export type TimeStampEntity = {
  createdAt: Date;
  updatedAt: Date;
};

export type BaseEntity = TimeStampEntity & {
  id: string;
};

export type FileEntity = BaseEntity & {
  path: string;
};

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

export type OrderItemEntity = {
  item: MenuItemEntity;
  quantity: number;
};
