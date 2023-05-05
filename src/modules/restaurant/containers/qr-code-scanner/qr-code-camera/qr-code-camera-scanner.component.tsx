import {useNavigation} from '@react-navigation/native';
import {BottomDrawer, Spacer, StyledText, View} from '@src/components';
import {StyledButton} from '@src/components/common/styled-button';
import {NavigationScreenName, QueryKey} from '@src/constants/enums';
import {useTimeoutWithClear, useTranslate} from '@src/hooks';
import {restaurantService} from '@src/modules/restaurant/services';
import {restaurantStoreActions, restaurantStoreSelectors} from '@src/store';
import {RestaurantEntity, RootNavigationProps} from '@src/types';
import {toasterUtil} from '@src/utils';
import React, {useCallback, useEffect, useState} from 'react';
import {Camera, useCameraDevices} from 'react-native-vision-camera';
import {useQuery} from 'react-query';
import {useStyles} from './qr-code-camera-scanner.style';

const QrCodeCameraScanner = () => {
  // utils
  const navigation = useNavigation<RootNavigationProps>();
  const t = useTranslate('qrCodeScannerScreen');
  const device = useCameraDevices();
  const [fetchTimeout, clearFetchTimeout] = useTimeoutWithClear();
  const setRestaurant = restaurantStoreActions.useSetRestaurant();
  const {restaurant} = restaurantStoreSelectors.useGetState();
  const {refetch} = useQuery<RestaurantEntity>(QueryKey.GET_RESTAURANT, {
    enabled: false,
    queryFn: () => restaurantService.getOne('15'),
    onSuccess: data => {
      handleFoundRestaurant(data);
    },
  });

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
    clearFetchTimeout();
    setIsVisible(false);
  };

  const handleFoundRestaurant = (data: RestaurantEntity) => {
    setIsVisible(false);
    setRestaurant(data);
  };

  // listeners
  useEffect(() => {
    handleCameraPermissions();
  }, [handleCameraPermissions]);

  useEffect(() => {
    if (isVisible) {
      fetchTimeout(refetch, 1000);
    }
  }, [isVisible, refetch, fetchTimeout]);

  useEffect(() => {
    if (restaurant) {
      navigation.navigate(NavigationScreenName.RESTAURANT_MENU);
    }
  }, [navigation, restaurant]);

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
          ) : null}
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
