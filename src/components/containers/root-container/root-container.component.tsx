import React, {FC} from 'react';
import {View} from '../../react-native';
import {useStyles} from './root-container.style';
import {RootContainerProps} from './root-container.type';

const RootContainer: FC<RootContainerProps> = ({children, ...props}) => {
  const styles = useStyles(props);

  return <View style={styles.container}>{children}</View>;
};

export default RootContainer;
