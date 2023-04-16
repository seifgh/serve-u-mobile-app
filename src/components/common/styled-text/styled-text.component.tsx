import {Text} from '@src/components';
import React, {FC} from 'react';
import {useStyles} from './styled-text.style';
import {StyledTextProps} from './styled-text.type';

const StyledText: FC<StyledTextProps> = props => {
  const styles = useStyles(props);

  if (Array.isArray(props.content)) {
    return (
      <>
        {props.content.map((text, index) => (
          <Text
            key={index}
            style={styles.text}
            numberOfLines={props.numberOfLines}>
            {text}
          </Text>
        ))}
      </>
    );
  }
  return (
    <Text style={styles.text} numberOfLines={props.numberOfLines}>
      {props.content}
    </Text>
  );
};

export default StyledText;
