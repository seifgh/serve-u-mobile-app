import {confirmedOrderImageAsset} from '@src/assets';
import {
  FlexContainer,
  PriceTag,
  Spacer,
  StyledImage,
  StyledText,
} from '@src/components';
import {ScrollViewContainer} from '@src/components/containers/scroll-view-container';
import {useStyledSizes, useTranslate} from '@src/hooks';
import {orderStoreSelectors} from '@src/store';
import React, {Fragment} from 'react';
import {OrderItemCardComponent} from '../../components/order-item';

const ConfirmedOrderContainer = () => {
  // utils
  const {
    screen: {width: screenWidth},
  } = useStyledSizes();
  const t = useTranslate('orderScreen');

  // state
  const orders = orderStoreSelectors.useOrders();
  const totalPrice = orderStoreSelectors.useTotalPrice();

  // render
  return (
    <>
      <ScrollViewContainer alignItems="center">
        <Spacer height={32} />
        <StyledImage
          image={confirmedOrderImageAsset}
          width={screenWidth * 0.7}
        />
        <Spacer height={24} />
        <StyledText
          content={t('confirmed_order.title')}
          size="2xl"
          weight="bold"
        />
        <StyledText
          align="center"
          content={t('confirmed_order.subtitle')}
          size="lg"
          weight="semi-bold"
        />
        <Spacer height={12} />
        <StyledText
          align="center"
          content={t('confirmed_order.description')}
          color="textGray"
        />

        <Spacer height={24} />

        <FlexContainer flexDirection="row" alignItems="center">
          <StyledText
            content={`${t('common:total')} - `}
            size="lg"
            weight="semi-bold"
            color="textGray"
          />
          <PriceTag styledTextProps={{size: 'lg'}} content={totalPrice} />
        </FlexContainer>

        <Spacer height={24} />

        {orders.map(order => (
          <Fragment key={order.item.id}>
            <OrderItemCardComponent disableEdit {...order} />
            <Spacer height={12} />
          </Fragment>
        ))}
      </ScrollViewContainer>
    </>
  );
};

export default ConfirmedOrderContainer;
