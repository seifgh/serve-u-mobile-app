import {FC} from 'react';

export type ComponentBaseProps = {
  children?: JSX.Element;
};

export type SvgIconProps = {
  color: string;
};

export type IconComponent = FC<SvgIconProps>;
