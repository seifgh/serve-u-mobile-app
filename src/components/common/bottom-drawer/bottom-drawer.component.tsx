import {AnimatedPressable, Pressable} from '@src/components';
import {useAnimate, useStyledSizes} from '@src/hooks';
import React, {FC, useCallback, useEffect, useRef, useState} from 'react';
import {GestureResponderEvent} from 'react-native/types';
import {StyledModal} from '../styled-modal';
import {useStyles} from './bottom-drawer.style';
import {BottomDrawerProps} from './bottom-drawer.type';

const BottomDrawer: FC<BottomDrawerProps> = ({
  children,
  onClose,
  isVisible,
  ...props
}) => {
  // utils
  const {
    screen: {height: screenHeight},
  } = useStyledSizes();
  const [topPosition, animateTopPositionTo] = useAnimate(screenHeight, 200);

  // refs
  const initSwipeY = useRef<number>(0);

  // state
  const [showDrawer, setShowDrawer] = useState<boolean>(isVisible || false);

  const handleAnimateDrawer = useCallback(async () => {
    if (isVisible) {
      setShowDrawer(true);
      await animateTopPositionTo(0);
    } else {
      await animateTopPositionTo(screenHeight);
      setShowDrawer(false);
    }
  }, [animateTopPositionTo, isVisible, screenHeight]);

  // styles
  const styles = useStyles(props);

  // actions
  const handleTouchStart = (e: GestureResponderEvent) => {
    initSwipeY.current = e.nativeEvent.pageY;
  };

  const handleTouchMove = (e: GestureResponderEvent) => {
    if (e.nativeEvent.pageY - initSwipeY.current > 100) {
      onClose?.();
    }
  };

  // listeners
  useEffect(() => {
    handleAnimateDrawer();
  }, [handleAnimateDrawer]);

  // render
  return (
    <StyledModal
      {...props}
      isVisible={showDrawer}
      contentPosition="bl"
      isTransparent
      onClose={onClose}>
      <AnimatedPressable
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        style={[styles.container, {transform: [{translateY: topPosition}]}]}>
        <Pressable style={styles.controller} />
        {children}
      </AnimatedPressable>
    </StyledModal>
  );
};

export default BottomDrawer;
