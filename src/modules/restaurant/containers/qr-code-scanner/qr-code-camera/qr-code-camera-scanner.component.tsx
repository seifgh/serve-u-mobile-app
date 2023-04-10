import {BottomDrawer, Spacer, StyledText, View} from '@src/components';
import {StyledButton} from '@src/components/common/styled-button';
import {useTranslate} from '@src/hooks';
import React, {useEffect, useState} from 'react';
import {Camera, useCameraDevices} from 'react-native-vision-camera';
import {useStyles} from './qr-code-camera-scanner.syle';

const QrCodeCameraScanner = () => {
  // utils
  const t = useTranslate('qrCodeScannerScreen');
  const device = useCameraDevices();

  // state
  const [isVisible, setIsVisible] = useState<boolean>(false);

  // styles
  const styles = useStyles();

  // listeners
  useEffect(() => {
    if (isVisible) {
      (async () => {
        const permissionResult = await Camera.requestCameraPermission();
        if (permissionResult === 'denied') {
        }
      })();
    }
  }, [isVisible]);

  return (
    <>
      <StyledButton
        content={t('scan_btn_text')}
        color="primary"
        size="md"
        isFlat
        onPress={() => setIsVisible(true)}
      />

      <BottomDrawer isVisible={isVisible} onClose={() => setIsVisible(false)}>
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
