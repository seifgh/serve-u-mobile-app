import {StyledText} from '@src/components/common';
import {TouchableOpacity} from '@src/components/react-native';
import React, {FC} from 'react';
import {useStyles} from './tab-bar-button.style';
import {TabBarButtonProps} from './tab-bar-button.type';

const TabBarButton: FC<TabBarButtonProps> = props => {
  // props
  const {isFocused} = props;

  // computed
  const activeOpacity = isFocused ? 1 : 0.6;

  // styles
  const styles = useStyles(props);

  // render
  return (
    <TouchableOpacity
      activeOpacity={activeOpacity}
      style={styles.container}
      onPress={props.onPress}>
      {props.icon?.({color: styles.icon.color})}
      <StyledText style={styles.title} size="xs" content={props.title} />
    </TouchableOpacity>
  );
};

export default TabBarButton;
