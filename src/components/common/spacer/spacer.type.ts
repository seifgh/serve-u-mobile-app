import {DimensionValue} from '@src/types';

export type SpacerProps =
  | {
      height: DimensionValue;
      width: DimensionValue;
    }
  | {height: DimensionValue}
  | {width: DimensionValue};
