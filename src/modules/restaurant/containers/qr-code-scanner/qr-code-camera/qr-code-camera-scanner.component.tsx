import {BottomDrawer, Spacer, StyledText, View} from '@src/components';
import {StyledButton} from '@src/components/common/styled-button';
import {useTranslate} from '@src/hooks';
import {toasterUtil} from '@src/utils';
import React, {useCallback, useEffect, useState} from 'react';
import {Camera, useCameraDevices} from 'react-native-vision-camera';
import {useStyles} from './qr-code-camera-scanner.style';

const QrCodeCameraScanner = () => {
  // utils
  const t = useTranslate('qrCodeScannerScreen');
  const device = useCameraDevices();

  // state
  const [isVisible, setIsVisible] = useState<boolean>(false);

  // actions
  const handleCameraPermissions = useCallback(async () => {
    if (isVisible) {
      const permissionResult = await Camera.requestCameraPermission();
      if (permissionResult === 'denied') {
        setIsVisible(false);
        toasterUtil.error({
          text1: t('camera_permission_alert.title'),
          text2: t('camera_permission_alert.description'),
        });
      }
    }
  }, [isVisible, t]);

  const handleBtnPress = () => {
    setIsVisible(true);
  };

  const handleOnClose = () => {
    setIsVisible(false);
  };

  // listeners
  useEffect(() => {
    handleCameraPermissions();
  }, [handleCameraPermissions]);

  // styles
  const styles = useStyles();

  // render
  return (
    <>
      <StyledButton
        content={t('scan_btn_text')}
        color="primary"
        size="md"
        isFlat
        onPress={handleBtnPress}
      />

      <BottomDrawer isVisible={isVisible} onClose={handleOnClose}>
        <View style={styles.cameraContainer}>
          {device.back ? (
            <Camera
              style={styles.camera}
              device={device.back}
              isActive={true}
            />
          ) : (
            <></>
          )}
        </View>
        <Spacer height={12} />
        <StyledText
          size="sm"
          color="textGray"
          align="center"
          content={t('scan_qr_code_text')}
        />
        <Spacer height={12} />
      </BottomDrawer>
    </>
  );
};

export default QrCodeCameraScanner;
