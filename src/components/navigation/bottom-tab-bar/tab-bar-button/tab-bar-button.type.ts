import {IconComponent} from '../../../../types';

export type TabBarButtonProps = {
  isFocused: boolean;
  icon?: IconComponent;
  title: string;
  onPress: () => void;
  tabBarBadge: number | string | undefined;
};
