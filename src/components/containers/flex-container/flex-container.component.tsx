import {View} from '@src/components';
import React, {FC} from 'react';
import {useStyles} from './flex-container.style';
import {FlexContainerProps} from './flex-container.type';

const FlexContainer: FC<FlexContainerProps> = ({children, ...props}) => {
  const styles = useStyles(props);
  return (
    <View {...props} style={[styles.container, props.style]}>
      {children}
    </View>
  );
};
export default FlexContainer;
