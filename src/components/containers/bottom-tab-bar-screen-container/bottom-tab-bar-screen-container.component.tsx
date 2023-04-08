import {View} from '@src/components';
import {ComponentBaseProps} from '@src/types';
import React, {FC} from 'react';
import {useStyles} from './bottom-tab-bar-screen-container.styles';

const BottomTabBarScreenContainer: FC<ComponentBaseProps> = ({children}) => {
  const styles = useStyles();

  return <View style={styles.container}>{children}</View>;
};

export default BottomTabBarScreenContainer;
