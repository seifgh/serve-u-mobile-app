import {useStyledColors} from '@src/hooks';
import React, {FC} from 'react';
import {StatusBar} from 'react-native';
import {View} from '../../react-native';
import {useStyles} from './root-container.style';
import {RootContainerProps} from './root-container.type';

const RootContainer: FC<RootContainerProps> = ({children, ...props}) => {
  const styles = useStyles(props);
  const colors = useStyledColors();
  return (
    <>
      <StatusBar
        backgroundColor={'transparent'}
        barStyle={colors.isDark ? 'light-content' : 'dark-content'}
      />
      <View style={styles.container}>{children}</View>
    </>
  );
};

export default RootContainer;
