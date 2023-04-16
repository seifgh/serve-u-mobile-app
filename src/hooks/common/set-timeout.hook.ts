import {useCallback, useEffect, useRef} from 'react';

export const useTimeout = () => {
  const [_setTimeout] = useTimeoutWithClear();

  return _setTimeout;
};

export const useTimeoutWithClear = (): [
  (callback: () => void, duration?: number) => void,
  () => void,
] => {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const _setTimeout = useCallback((callback: () => void, duration?: number) => {
    timeoutRef.current = setTimeout(callback, duration);
  }, []);

  const _clearTimeout = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }, []);

  useEffect(() => _clearTimeout, [_clearTimeout]);

  return [_setTimeout, _clearTimeout];
};
