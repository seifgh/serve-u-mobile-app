import {ScrollView} from '@src/components';
import React, {FC} from 'react';
import {useStyles} from './scroll-view-container.style';
import {ScrollViewContainerProps} from './scroll-view-container.type';

const ScrollViewContainer: FC<ScrollViewContainerProps> = ({
  children,
  ...props
}) => {
  const styles = useStyles(props);
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      {...props}>
      {children}
    </ScrollView>
  );
};
export default ScrollViewContainer;
