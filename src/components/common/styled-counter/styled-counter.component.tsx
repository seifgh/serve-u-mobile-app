import {FlexContainer, Spacer, StyledText} from '@src/components';
import AddIcon from '@src/components/icons/add.icon';
import MinusIcon from '@src/components/icons/minus.icon';
import React, {FC} from 'react';
import {StyledButton} from '../styled-button';
import {useStyles} from './styled-counter.style';
import {StyledCounterProps} from './styled-counter.type';

const StyledCounter: FC<StyledCounterProps> = props => {
  const styles = useStyles(props);

  return (
    <FlexContainer
      style={styles.container}
      flexDirection="row"
      alignItems="center">
      <StyledButton
        disabled={props.disabled}
        onPress={props.onDecrement}
        size="sm"
        icon={MinusIcon}
      />
      <Spacer width={8} />
      <StyledText
        weight="semi-bold"
        size="md"
        content={props.value.toString()}
      />
      <Spacer width={8} />
      <StyledButton
        disabled={props.disabled}
        onPress={props.onIncrement}
        size="sm"
        icon={AddIcon}
      />
    </FlexContainer>
  );
};

export default StyledCounter;
