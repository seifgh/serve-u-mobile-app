import {useNavigation} from '@react-navigation/native';
import {emptyOrderImageAsset} from '@src/assets';
import {Spacer, StyledImage, StyledText} from '@src/components';
import {StyledButton} from '@src/components/common/styled-button';
import {ScrollViewContainer} from '@src/components/containers/scroll-view-container';
import {NavigationScreenName} from '@src/constants/enums';
import {useStyledSizes, useTranslate} from '@src/hooks';
import {RootNavigationProps} from '@src/types';
import React from 'react';

const EmptyOrderContainer = () => {
  // utils
  const {
    screen: {width: screenWidth},
  } = useStyledSizes();
  const t = useTranslate('orderScreen');
  const navigation = useNavigation<RootNavigationProps>();

  // actions
  const handleBtnPress = () => {
    navigation.navigate(NavigationScreenName.RESTAURANT_QR_SCANNER);
  };

  // render
  return (
    <ScrollViewContainer alignItems="center" justifyContent="center">
      <Spacer height={32} />
      <StyledImage image={emptyOrderImageAsset} width={screenWidth * 0.8} />
      <Spacer height={24} />
      <StyledText content={t('empty_order.title')} size="2xl" weight="bold" />
      <StyledText
        align="center"
        content={t('empty_order.subtitle')}
        size="lg"
        weight="semi-bold"
      />
      <Spacer height={12} />
      <StyledText
        align="center"
        content={t('empty_order.description')}
        color="textGray"
      />
      <Spacer height={20} />
      <StyledButton
        content={t('empty_order.btn_text')}
        size="md"
        isFlat
        onPress={handleBtnPress}
      />
    </ScrollViewContainer>
  );
};

export default EmptyOrderContainer;
