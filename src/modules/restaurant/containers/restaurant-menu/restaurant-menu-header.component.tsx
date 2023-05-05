import {useNavigation} from '@react-navigation/native';
import {Spacer, StyledText} from '@src/components';
import {StyledButton} from '@src/components/common/styled-button';
import {FlexContainer} from '@src/components/containers/flex-container';
import {ArrowLeftIcon} from '@src/components/icons';
import {useTranslate} from '@src/hooks';
import {restaurantStoreActions, restaurantStoreSelectors} from '@src/store';
import {RootNavigationProps} from '@src/types';
import React from 'react';

const RestaurantMenuHeader = () => {
  // utils
  const t = useTranslate('restaurantMenuScreen');
  const restaurant = restaurantStoreSelectors.useRestaurant();
  const emptyRestaurant = restaurantStoreActions.useEmptyRestaurant();
  const navigation = useNavigation<RootNavigationProps>();

  // actions
  const handleGoBack = () => {
    navigation.goBack();
    emptyRestaurant();
  };

  // render
  return (
    <FlexContainer spacing="md">
      <StyledButton
        icon={ArrowLeftIcon}
        size="md"
        color="white"
        hasBorder
        onPress={handleGoBack}
      />
      <Spacer height={16} />
      <FlexContainer alignContent="center" flexDirection="row">
        <StyledText content={t('header.title')} size="2xl" weight="semi-bold" />
        <StyledText
          content={restaurant.name + '!'}
          color="primary"
          size="2xl"
          weight="semi-bold"
        />
      </FlexContainer>
      <StyledText content={t('header.subtitle')} size="lg" weight="semi-bold" />
    </FlexContainer>
  );
};

export default RestaurantMenuHeader;
