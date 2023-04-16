import {ScrollViewContainer, Spacer} from '@src/components';
import {StyledButton} from '@src/components/common/styled-button';
import {FlexContainer} from '@src/components/containers/flex-container';
import {useStyledColors} from '@src/hooks';
import {useCurrentRestaurant} from '@src/modules/order/hooks';
import React, {Fragment} from 'react';

const RestaurantMenuCategories = () => {
  // utils
  const restaurant = useCurrentRestaurant();
  const styledColors = useStyledColors();

  // categories
  const categories = restaurant?.menuItems.map(item => item.category);

  // actions

  // styles
  const containerStyles = {
    borderBottomWidth: 2,
    borderColor: styledColors.borderGray,
  };

  if (categories) {
    return (
      <FlexContainer height={64} style={containerStyles}>
        <ScrollViewContainer horizontal showsHorizontalScrollIndicator={false}>
          <Spacer width={8} />
          <FlexContainer
            flexDirection="row"
            justifyContent="center"
            flexWrap="nowrap"
            spacing="sm"
            background="background">
            {categories.map(category => {
              const isActive = false;
              return (
                <Fragment key={category.id}>
                  <StyledButton
                    size="sm"
                    content={category.name}
                    color={isActive ? 'primary' : 'white'}
                    textColor={isActive ? undefined : 'text'}
                    hasBorder
                  />
                  <Spacer width={12} />
                </Fragment>
              );
            })}
          </FlexContainer>
        </ScrollViewContainer>
      </FlexContainer>
    );
  }

  return null;
};

export default RestaurantMenuCategories;
