import {useNavigation} from '@react-navigation/native';
import {Spacer, StyledText} from '@src/components';
import {StyledButton} from '@src/components/common/styled-button';
import {FlexContainer} from '@src/components/containers/flex-container';
import {ArrowLeftIcon} from '@src/components/icons';
import {useTranslate} from '@src/hooks';
import {useCurrentRestaurant} from '@src/modules/order/hooks';
import {RootNavigationProps} from '@src/types';
import React from 'react';

const RestaurantMenuHeader = () => {
  const t = useTranslate('restaurantMenuScreen');
  const restaurant = useCurrentRestaurant();
  const navigation = useNavigation<RootNavigationProps>();

  if (restaurant) {
    return (
      <FlexContainer spacing="md">
        <StyledButton
          icon={ArrowLeftIcon}
          size="md"
          color="white"
          hasBorder
          onPress={() => navigation.goBack()}
        />
        <Spacer height={16} />
        <FlexContainer alignContent="center" flexDirection="row">
          <StyledText
            content={t('header.title')}
            size="2xl"
            weight="semi-bold"
          />
          <StyledText
            content={restaurant.name + '!'}
            color="primary"
            size="2xl"
            weight="semi-bold"
          />
        </FlexContainer>
        <StyledText
          content={t('header.subtitle')}
          size="lg"
          weight="semi-bold"
        />
      </FlexContainer>
    );
  }
  return null;
};

export default RestaurantMenuHeader;
