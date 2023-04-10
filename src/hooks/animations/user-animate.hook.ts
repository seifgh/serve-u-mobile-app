import {useCallback, useEffect, useRef, useState} from 'react';
import {Animated, Easing} from 'react-native';

type AnimateToFunc = (
  toValue: number,
  onEnd?: Animated.EndCallback,
  duration?: number,
) => void;

type AnimateToFuncPromise = (
  toValue: number,
  duration?: number,
) => Promise<void>;

export const useAnimateByValue = (
  initialValue: number,
  duration = 500,
): [Animated.Value, AnimateToFunc, AnimateToFuncPromise] => {
  const [value] = useState(new Animated.Value(initialValue));
  const animRef = useRef<Animated.CompositeAnimation | null>(null);
  const animateTo: AnimateToFunc = useCallback(
    (
      toValue: number,
      onEnd?: Animated.EndCallback,
      _duration: number = duration,
    ) => {
      animRef.current = Animated.timing(value, {
        toValue: toValue,
        duration: _duration,
        easing: Easing.ease,
        useNativeDriver: true,
      });

      animRef.current.start(props => {
        if (props.finished) {
          onEnd?.(props);
        }
      });
    },
    [duration, value],
  );

  const animateToPromise: AnimateToFuncPromise = useCallback(
    (toValue: number, _duration: number = duration) => {
      return new Promise(resolve => {
        animateTo(
          toValue,
          () => {
            resolve();
          },
          _duration,
        );
      });
    },
    [animateTo, duration],
  );

  const clearAnimation = () => {
    animRef.current?.reset();
  };

  useEffect(() => clearAnimation, []);
  return [value, animateTo, animateToPromise];
};

export const useAnimate = (
  initialValue: number,
  duration = 500,
): [Animated.Value, AnimateToFuncPromise] => {
  const [
    value,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _,
    animateToPromise,
  ] = useAnimateByValue(initialValue, duration);

  return [value, animateToPromise];
};
