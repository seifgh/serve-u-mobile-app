import {TouchableOpacity} from '@src/components';
import React, {FC} from 'react';
import {StyledText} from '../styled-text';
import {useStyles} from './styled-button.style';
import {StyledButtonProps} from './styled-button.type';

const StyledButton: FC<StyledButtonProps> = props => {
  const styles = useStyles(props);

  return (
    <TouchableOpacity
      {...props}
      activeOpacity={0.8}
      style={[styles.container, props.style]}>
      <StyledText
        content={props.content}
        size={props.size}
        weight="semi-bold"
        style={styles.text}
      />
    </TouchableOpacity>
  );
};

export default StyledButton;
