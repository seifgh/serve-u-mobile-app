import {View} from '@src/components';
import {IconComponent} from '@src/types';
import React, {FC} from 'react';
import TabBarButton from './tab-bar-button/tab-bar-button.component';
import {useStyles} from './bottom-tab-bar.style';
import {BottomTabBarProps} from './bottom-tab-bar.type';

const BottomTabBar: FC<BottomTabBarProps> = props => {
  // props
  const {
    state: {routes, index: focusedIndex},
    descriptors,
    navigation,
  } = props;

  // styles
  const styles = useStyles({});

  // render
  const renderButtons = routes.map((route, index) => {
    const {
      options: {title, tabBarIcon, tabBarBadge},
    } = descriptors[route.key];
    return (
      <TabBarButton
        key={route.key}
        title={title || route.name}
        icon={tabBarIcon ? (tabBarIcon as IconComponent) : undefined}
        isFocused={index === focusedIndex}
        tabBarBadge={tabBarBadge}
        onPress={() => navigation.navigate(route.name)}
      />
    );
  });

  return <View style={styles.container}>{renderButtons}</View>;
};

export default BottomTabBar;
