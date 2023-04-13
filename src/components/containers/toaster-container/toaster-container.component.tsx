import {useStyledColors} from '@src/hooks';
import React, {memo, useMemo} from 'react';
import Toast from 'react-native-toast-message';
import {getToastConfigs} from './toaster-container.util';

const ToasterContainer = () => {
  const styledColors = useStyledColors();
  const configs = useMemo(
    () => getToastConfigs(styledColors, ['success', 'error', 'primary']),
    [styledColors],
  );

  return <Toast config={configs} position={'top'} />;
};

export default memo(ToasterContainer);
