import {qrCodeImageAsset} from '@src/assets';
import {Logo, StyledImage, StyledText} from '@src/components';
import Spacer from '@src/components/common/spacer/spacer.component';
import {StyledButton} from '@src/components/common/styled-button';
import {BottomTabBarScreenContainer} from '@src/components/containers';
import {ScrollViewContainer} from '@src/components/containers/scroll-view-container';
import {useStyledSizes} from '@src/hooks';
import {useTranslate} from '@src/hooks/i18n';
import React from 'react';

const QrCodeScannerScreen = () => {
  // utils
  const {
    screen: {width: screenWidth},
  } = useStyledSizes();

  const t = useTranslate('qrCodeScannerScreen');

  // render
  return (
    <BottomTabBarScreenContainer>
      <ScrollViewContainer centerContent>
        <Spacer height={24} />
        <Logo size="md" />
        <Spacer height={24} />
        <StyledText
          size="md"
          color="textGray"
          align="center"
          content={t('header_text')}
        />
        <Spacer height={24} />
        <StyledImage
          image={qrCodeImageAsset}
          width={250}
          maxWidth={screenWidth * 0.8}
        />
        <Spacer height={24} />
        <StyledText
          size="md"
          color="textGray"
          align="center"
          content={t('bottom_text')}
        />
        <Spacer height={24} />
        <StyledButton content="Scan" color="primary" size="lg" isFlat />
        <Spacer height={36} />
      </ScrollViewContainer>
    </BottomTabBarScreenContainer>
  );
};

export default QrCodeScannerScreen;
