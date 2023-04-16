import {
  FlexContainer,
  ScrollViewContainer,
  Spacer,
  StyledText,
} from '@src/components';
import React, {FC, Fragment} from 'react';
import {MenuItemCard, MENU_ITEM_CONTAINER_HEIGHT} from '../menu-item-card';
import {menuItemsProps} from './menu-items.type';

const MenuItems: FC<menuItemsProps> = ({title, items}) => {
  return (
    <FlexContainer>
      <Spacer height={12} />
      {title ? (
        <FlexContainer spacing={'sm'}>
          <StyledText content={title} size="xl" weight="semi-bold" />
          <Spacer height={12} />
        </FlexContainer>
      ) : null}
      <FlexContainer
        justifyContent="flex-start"
        height={MENU_ITEM_CONTAINER_HEIGHT}>
        <ScrollViewContainer horizontal showsHorizontalScrollIndicator={false}>
          <Spacer width={12} />
          {items.map(item => (
            <Fragment key={item.id}>
              <MenuItemCard {...item} />
              <Spacer width={18} />
            </Fragment>
          ))}
        </ScrollViewContainer>
      </FlexContainer>
      <Spacer height={12} />
    </FlexContainer>
  );
};

export default MenuItems;
