import {ScrollView} from '@src/components';
import React, {forwardRef} from 'react';
import {useStyles} from './scroll-view-container.style';
import {ScrollViewContainerProps} from './scroll-view-container.type';

const ScrollViewContainer = forwardRef<ScrollView, ScrollViewContainerProps>(
  ({children, ...props}, ref) => {
    const styles = useStyles(props);
    return (
      <ScrollView
        ref={ref}
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
        {...props}>
        {children}
      </ScrollView>
    );
  },
);
export default ScrollViewContainer;
