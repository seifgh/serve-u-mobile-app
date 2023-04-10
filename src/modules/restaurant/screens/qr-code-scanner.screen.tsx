import {qrCodeImageAsset} from '@src/assets';
import {
  BottomTabBarScreenContainer,
  Logo,
  ScrollViewContainer,
  Spacer,
  StyledImage,
  StyledText,
} from '@src/components';
import {useStyledSizes, useTranslate} from '@src/hooks';
import React from 'react';
import {QrCodeCameraScanner} from '../containers';

const QrCodeScannerScreen = () => {
  // utils
  const {
    screen: {width: screenWidth},
  } = useStyledSizes();
  const t = useTranslate('qrCodeScannerScreen');

  // render
  return (
    <BottomTabBarScreenContainer>
      <ScrollViewContainer alignItems="center">
        <Spacer height={24} />
        <Logo size="md" />
        <Spacer height={24} />
        <StyledText
          size="md"
          color="textGray"
          align="center"
          content={t('header_text')}
        />
        <Spacer height={32} />
        <StyledImage
          image={qrCodeImageAsset}
          width={250}
          maxWidth={screenWidth * 0.8}
        />
        <Spacer height={32} />
        <StyledText
          size="md"
          color="textGray"
          align="center"
          content={t('bottom_text')}
        />
        <Spacer height={24} />

        <QrCodeCameraScanner />
        <Spacer height={36} />
      </ScrollViewContainer>
    </BottomTabBarScreenContainer>
  );
};

export default QrCodeScannerScreen;
