import {ScrollViewContainer, Spacer} from '@src/components';
import {StyledButton} from '@src/components/common/styled-button';
import {FlexContainer} from '@src/components/containers/flex-container';
import {useStyledColors} from '@src/hooks';
import {restaurantStoreSelectors} from '@src/store';
import React, {Fragment, useEffect, useRef} from 'react';
import {ScrollView} from 'react-native-gesture-handler';

const RestaurantMenuCategories = () => {
  // utils
  const styledColors = useStyledColors();

  // refs
  const scrollViewRef = useRef<ScrollView>(null);

  // categories
  const categories = restaurantStoreSelectors.useCategories();

  // actions

  // listeners
  useEffect(() => {
    scrollViewRef.current?.scrollTo({
      x: 12,
    });
  }, []);

  // styles
  const containerStyles = {
    borderBottomWidth: 2,
    borderColor: styledColors.borderGray,
  };

  return (
    <FlexContainer height={64} style={containerStyles}>
      <ScrollViewContainer
        ref={scrollViewRef}
        horizontal
        showsHorizontalScrollIndicator={false}>
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
};

export default RestaurantMenuCategories;
