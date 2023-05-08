import {requestedOrderImageAsset} from '@src/assets';
import {Spacer, StyledImage, StyledText} from '@src/components';
import {StyledButton} from '@src/components/common/styled-button';
import {ScrollViewContainer} from '@src/components/containers/scroll-view-container';
import {OrderStatus} from '@src/constants/enums';
import {useStyledSizes, useTimeout, useTranslate} from '@src/hooks';
import {orderStoreActions} from '@src/store';
import React, {useEffect} from 'react';

const RequestedOrderContainer = () => {
  // utils
  const {
    screen: {width: screenWidth},
  } = useStyledSizes();
  const t = useTranslate('orderScreen');
  const setTimeout = useTimeout();
  // state
  const setOrderStatus = orderStoreActions.useSetOrderStatus();

  // actions
  const handleCancelClick = () => {
    setOrderStatus(OrderStatus.WAITING_FOR_REQUEST);
  };

  useEffect(() => {
    setTimeout(() => {
      setOrderStatus(OrderStatus.CONFIRMED);
    }, 5000);
  }, [setTimeout, setOrderStatus]);

  return (
    <ScrollViewContainer alignItems="center" justifyContent="center">
      <Spacer height={32} />
      <StyledImage image={requestedOrderImageAsset} width={screenWidth * 0.8} />
      <Spacer height={24} />
      <StyledText
        content={t('requested_order.title')}
        size="2xl"
        weight="bold"
      />
      <StyledText
        align="center"
        content={t('requested_order.subtitle')}
        size="lg"
        weight="semi-bold"
      />
      <Spacer height={12} />
      <StyledText
        align="center"
        content={t('requested_order.description')}
        color="textGray"
      />
      <Spacer height={20} />
      <StyledButton
        onPress={handleCancelClick}
        color="white"
        content={t('common:edit')}
        isFlat
        size="md"
      />
    </ScrollViewContainer>
  );
};

export default RequestedOrderContainer;
