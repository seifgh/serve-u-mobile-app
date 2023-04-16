import {TouchableOpacity} from '@src/components';
import React, {FC} from 'react';
import {StyledText} from '../styled-text';
import {useStyles} from './styled-button.style';
import {StyledButtonProps} from './styled-button.type';

const StyledButton: FC<StyledButtonProps> = props => {
  // styles
  const styles = useStyles(props);

  // computed
  const iconIsLeft = props.iconDirection === 'l';

  // render
  const renderIcon = props.icon ? props.icon(styles.icon) : null;

  return (
    <TouchableOpacity
      {...props}
      activeOpacity={0.8}
      style={[styles.container, props.style]}>
      {iconIsLeft ? renderIcon : null}
      {props.content ? (
        <StyledText
          content={props.content}
          size={props.size}
          weight="semi-bold"
          style={styles.text}
        />
      ) : null}
      {!iconIsLeft ? renderIcon : null}
    </TouchableOpacity>
  );
};

export default StyledButton;
